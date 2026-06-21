"use client";

import { useState, useMemo } from "react";
import NoteCard from "@/components/notes/NoteCard";
import Dropdown from "@/components/notes/Dropdown";
import { statusLabel, typeLabel } from "@/lib/note-labels";
import type { Note, NoteStatus, NoteType } from "@/types/note";

type NotesArchiveProps = {
  notes: Note[];
};

export default function NotesArchive({ notes }: NotesArchiveProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<NoteType | "all">("all");
  const [selectedStatus, setSelectedStatus] = useState<NoteStatus | "all">("all");
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading state for better UX
  const handleFilterChange = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 150);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    handleFilterChange();
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    handleFilterChange();
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value as NoteType | "all");
    handleFilterChange();
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value as NoteStatus | "all");
    handleFilterChange();
  };

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(notes.map((note) => note.category))).sort();
  }, [notes]);

  // Filter notes based on search and filters
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        note.title.toLowerCase().includes(searchLower) ||
        note.description.toLowerCase().includes(searchLower) ||
        note.tags.some((tag) => tag.toLowerCase().includes(searchLower));

      // Category filter
      const matchesCategory =
        selectedCategory === "all" || note.category === selectedCategory;

      // Type filter
      const matchesType = selectedType === "all" || note.type === selectedType;

      // Status filter
      const matchesStatus =
        selectedStatus === "all" || note.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesType && matchesStatus;
    });
  }, [notes, searchQuery, selectedCategory, selectedType, selectedStatus]);

  return (
    <>
      {/* Search and Filters */}
      <section className="mb-8 rounded-lg border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-4">
          <label htmlFor="search-input" className="sr-only">
            Search notes
          </label>
          <input
            id="search-input"
            type="text"
            placeholder="Search notes by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-black/10 px-4 py-2 text-sm text-foreground placeholder-foreground/40 focus:border-cyan-300/40 focus:outline-none"
            disabled={isLoading}
            aria-label="Search notes by title, description, or tags"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          <div className="flex-1 min-w-[150px]">
            <label htmlFor="category-filter" className="mb-1 block text-xs uppercase tracking-[0.2em] text-foreground-dim">
              Category
            </label>
            <Dropdown
              id="category-filter"
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={[
                { value: "all", label: "All Categories" },
                ...categories.map((cat) => ({ value: cat, label: cat })),
              ]}
              placeholder="All Categories"
              disabled={isLoading}
            />
          </div>

          {/* Type Filter */}
          <div className="flex-1 min-w-[150px]">
            <label htmlFor="type-filter" className="mb-1 block text-xs uppercase tracking-[0.2em] text-foreground-dim">
              Type
            </label>
            <Dropdown
              id="type-filter"
              value={selectedType}
              onChange={handleTypeChange}
              options={[
                { value: "all", label: "All Types" },
                ...Object.entries(typeLabel).map(([value, label]) => ({
                  value,
                  label,
                })),
              ]}
              placeholder="All Types"
              disabled={isLoading}
            />
          </div>

          {/* Status Filter */}
          <div className="flex-1 min-w-[150px]">
            <label htmlFor="status-filter" className="mb-1 block text-xs uppercase tracking-[0.2em] text-foreground-dim">
              Status
            </label>
            <Dropdown
              id="status-filter"
              value={selectedStatus}
              onChange={handleStatusChange}
              options={[
                { value: "all", label: "All Statuses" },
                ...Object.entries(statusLabel).map(([value, label]) => ({
                  value,
                  label,
                })),
              ]}
              placeholder="All Statuses"
              disabled={isLoading}
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
              className="rounded-md border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="mb-4 text-sm text-foreground-muted">
        Showing {filteredNotes.length} of {notes.length} notes
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="text-sm text-foreground-muted">Loading...</div>
        </div>
      )}

      {/* Notes Grid */}
      {!isLoading && filteredNotes.length === 0 ? (
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 text-center">
          <p className="text-foreground-muted">No notes match your filters.</p>
        </div>
      ) : !isLoading ? (
        <ul className="grid gap-4">
          {filteredNotes.map((note) => (
            <li key={note.slug}>
              <NoteCard note={note} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
