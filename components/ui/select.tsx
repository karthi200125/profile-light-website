"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  value?: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function Select({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
  className,
}: SelectProps) {
  const id = useId();
  const listboxId = `${id}-listbox`;

  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selected = options.find((o) => o.value === value) ?? null;

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  useEffect(() => {
    if (!open || focusedIndex < 0) return;
    const item = listRef.current?.children[focusedIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [focusedIndex, open]);

  function handleOpen() {
    if (disabled) return;
    const idx = options.findIndex((o) => o.value === value);
    setFocusedIndex(idx >= 0 ? idx : 0);
    setOpen(true);
  }

  function handleTriggerKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    switch (e.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
        e.preventDefault();
        handleOpen();
        break;
      case "ArrowUp":
        e.preventDefault();
        handleOpen();
        break;
    }
  }

  function handleListKeyDown(e: React.KeyboardEvent<HTMLUListElement>) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((i) => Math.min(i + 1, options.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((i) => Math.max(i - 1, 0));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedIndex >= 0 && options[focusedIndex]) {
          handleSelect(options[focusedIndex].value);
        }
        break;
      case "Escape":
      case "Tab":
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        break;
      case "Home":
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case "End":
        e.preventDefault();
        setFocusedIndex(options.length - 1);
        break;
    }
  }

  function handleSelect(val: string) {
    onChange(val);
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>

      {/* ── Trigger ────────────────────────────────────────────── */}
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={() => (open ? setOpen(false) : handleOpen())}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          "flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition-all",
          "hover:border-slate-300 hover:bg-white",
          "focus-visible:border-slate-400 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-slate-900/8",
          open && "border-slate-400 bg-white ring-2 ring-slate-900/8",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <span className={cn("flex-1 truncate text-left", !selected && "text-slate-400")}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={cn("h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {/* ── Dropdown ───────────────────────────────────────────── */}
      <div
        className={cn(
          "absolute left-0 right-0 top-[calc(100%+4px)] z-50 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-900/8",
          "transition-all duration-150 ease-out",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
        aria-hidden={!open}
      >
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-label="Options"
          tabIndex={open ? 0 : -1}
          onKeyDown={handleListKeyDown}
          className="max-h-60 overflow-y-auto overscroll-contain p-1.5 focus:outline-none [scrollbar-color:theme(colors.slate.200)_transparent] [scrollbar-width:thin]"
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isFocused = index === focusedIndex;

            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                onPointerDown={(e) => e.preventDefault()}
                onClick={() => handleSelect(option.value)}
                onPointerEnter={() => setFocusedIndex(index)}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isFocused && !isSelected && "bg-slate-50 text-slate-900",
                  isSelected && "bg-slate-900 text-white",
                  !isFocused && !isSelected && "text-slate-700",
                )}
              >
                <span className="truncate">{option.label}</span>
                {isSelected && <Check className="h-3.5 w-3.5 flex-shrink-0" aria-hidden />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}