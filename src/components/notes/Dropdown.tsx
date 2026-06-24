"use client";

import { useState, useRef, useEffect } from "react";

type DropdownProps = {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
  id?: string;
};

export default function Dropdown({
  value,
  onChange,
  options,
  placeholder = "Select...",
  disabled = false,
  id,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        id={id}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={placeholder}
        className="w-full rounded-md border border-white/10 px-3 py-2 text-sm text-foreground text-left focus:border-cyan-300/40 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: 'var(--panel)' }}
      >
        {selectedOption?.label || placeholder}
        <span className="float-right text-foreground/40" aria-hidden="true">▼</span>
      </button>

      {isOpen && !disabled && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-white/10 shadow-lg" style={{ backgroundColor: 'var(--panel)' }}>
          <ul
            role="listbox"
            aria-label={placeholder}
            className="max-h-60 overflow-auto py-1"
          >
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`cursor-pointer px-3 py-2 text-sm transition hover:bg-white/10 ${
                  option.value === value
                    ? "bg-white/10 text-(--accent)"
                    : "text-foreground"
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
