"use client";

import { useState, useMemo, useDeferredValue } from "react";
import NoteCard from "@/components/notes/NoteCard";
import Dropdown from "@/components/notes/Dropdown";
import type { Note, NoteStatus, NoteType } from "@/types/note";

import { useDictionary } from "@/hooks/useDictionary";
import { useNoteLabels } from "@/hooks/useNoteLabels";

type NotesArchiveProps = {
  notes: Note[];
};

export default function NotesArchive({ notes }: NotesArchiveProps) {
  const dict = useDictionary();
  const archive = dict.notes.archive;

  const { statusLabel, typeLabel } = useNoteLabels();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<NoteType | "all">("all");
  const [selectedStatus, setSelectedStatus] = useState<NoteStatus | "all">(
    "all",
  );
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value as NoteType | "all");
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value as NoteStatus | "all");
  };

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(notes.map((note) => note.category))).sort();
  }, [notes]);

  // Filter notes based on search and filters
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const searchLower = deferredSearchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        note.title.toLowerCase().includes(searchLower) ||
        note.description.toLowerCase().includes(searchLower) ||
        note.tags.some((tag) => tag.toLowerCase().includes(searchLower));

      const matchesCategory =
        selectedCategory === "all" || note.category === selectedCategory;
      const matchesType = selectedType === "all" || note.type === selectedType;
      const matchesStatus =
        selectedStatus === "all" || note.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesType && matchesStatus;
    });
  }, [notes, searchQuery, selectedCategory, selectedType, selectedStatus]);

  const isSearching = searchQuery !== deferredSearchQuery;

  return (
    <>
      {/* 检索控制台面板 */}
      <section className="mb-8 rounded-lg border border-(--panel-border) bg-(--panel)/60 p-5 md:p-6 shadow-xl dark:shadow-black/40">
        {/* 搜索输入框 - 带提示符 */}
        <div className="mb-6">
          <label htmlFor="search-input" className="sr-only">
            Search archive
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-(--accent) font-bold pointer-events-none">
              &gt;
            </span>
            <input
              id="search-input"
              type="text"
              placeholder={archive.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full rounded-md border border-(--panel-border) bg-(--background) py-2.5 pl-10 pr-4 text-sm text-(--foreground) placeholder-(--foreground-dim) focus:border-(--accent) focus:outline-none focus:shadow-[0_0_15px_var(--accent-bg)] transition-all"
              aria-label="Search notes by title, description, or tags"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          <div className="flex-1 min-w-[150px]">
            <label
              htmlFor="category-filter"
              className="mb-1.5 block text-[10px] uppercase tracking-widest text-(--foreground-dim) font-bold"
            >
              &gt; Element
            </label>
            <Dropdown
              id="category-filter"
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={[
                { value: "all", label: archive.allCategories },
                ...categories.map((cat) => ({ value: cat, label: cat })),
              ]}
              placeholder={archive.allCategories}
            />
          </div>

          {/* Type Filter */}
          <div className="flex-1 min-w-[150px]">
            <label
              htmlFor="type-filter"
              className="mb-1.5 block text-[10px] uppercase tracking-widest text-(--foreground-dim) font-bold"
            >
              &gt; Format
            </label>
            <Dropdown
              id="type-filter"
              value={selectedType}
              onChange={handleTypeChange}
              options={[
                { value: "all", label: archive.allTypes },
                ...Object.entries(typeLabel).map(([value, label]) => ({
                  value,
                  label,
                })),
              ]}
              placeholder={archive.allTypes}
            />
          </div>

          {/* Status Filter */}
          <div className="flex-1 min-w-[150px]">
            <label
              htmlFor="status-filter"
              className="mb-1.5 block text-[10px] uppercase tracking-widest text-(--foreground-dim) font-bold"
            >
              &gt; State
            </label>
            <Dropdown
              id="status-filter"
              value={selectedStatus}
              onChange={handleStatusChange}
              options={[
                { value: "all", label: archive.allStatuses },
                ...Object.entries(statusLabel).map(([value, label]) => ({
                  value,
                  label,
                })),
              ]}
              placeholder={archive.allStatuses}
            />
          </div>

          {/* Clear Filters Button */}
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedType("all");
                setSelectedStatus("all");
              }}
              className="rounded-md border border-(--panel-border) bg-(--background) px-4 py-2 text-xs font-bold uppercase tracking-widest text-(--foreground-muted) transition-all hover:border-(--accent) hover:text-(--accent) active:scale-95"
            >
              {archive.reset}
            </button>
          </div>
        </div>
      </section>

      {/* 结果日志 - RPG 系统提示 */}
      <div className="mb-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-(--foreground-dim)">
        <span className="text-(--accent)">[SYS]</span>
        <span>
          {archive.scanResults
            .replace("{found}", String(filteredNotes.length))
            .replace("{total}", String(notes.length))}
        </span>
        {isSearching && (
          <span className="ml-2 animate-pulse text-(--accent)">
            {archive.scanning}
          </span>
        )}
      </div>

      {/* 笔记网格 */}
      {filteredNotes.length === 0 ? (
        <div className="rounded-lg border border-dashed border-(--panel-border) bg-(--panel)/40 p-8 text-center">
          <p className="font-mono text-sm text-(--foreground-muted)">
            &gt; ERROR: NO_DATA_FOUND. <br />
            <span className="text-(--foreground-dim)">
              {archive.noDataDescription}
            </span>
          </p>
        </div>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2">
          {filteredNotes.map((note) => (
            <li key={note.slug} className="group h-full">
              {/* 使用与 /notes 首页完全一致的“相框”包装结构 */}
              <div className="h-full rounded-lg border border-(--panel-border) bg-(--panel) p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent)/50 hover:shadow-[0_8px_30px_-10px_var(--accent-bg)]">
                <div className="h-full rounded-md bg-(--background)">
                  <NoteCard note={note} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
