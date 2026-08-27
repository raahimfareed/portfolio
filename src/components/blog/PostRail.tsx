"use client"
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Heading } from "@/types";

interface iPostRailProps {
  title: string;
  dateLabel: string;
  readingTime: number;
  headings: Heading[];
}

export const PostRail = ({ title, dateLabel, readingTime, headings }: iPostRailProps) => {
  const [pinned, setPinned] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const header = document.getElementById("post-header");
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPinned(!entry.isIntersecting),
      { rootMargin: "-96px 0px 0px 0px" }
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const onScreen = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (onScreen.length > 0) setActiveId(onScreen[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px" }
    );

    headings.forEach(heading => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div
        aria-hidden={!pinned}
        className={clsx(
          "sticky top-32 rounded border border-accent bg-secondary/40 shadow p-4 flex flex-col gap-3 motion-safe:transition motion-safe:duration-300",
          pinned ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        )}>
        <div className="flex flex-col gap-1">
          <p className="font-bold leading-snug">{title}</p>
          <p className="text-sm opacity-70">
            <time dateTime={dateLabel}>{dateLabel}</time> &middot; {readingTime} min read
          </p>
        </div>

        {headings.length > 0 && (
          <nav className="flex flex-col gap-1 border-t border-accent pt-3">
            <p className="text-xs uppercase tracking-wide opacity-60 mb-1">On this page</p>
            {headings.map(heading => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                tabIndex={pinned ? undefined : -1}
                className={clsx(
                  "text-sm leading-snug transition hover:opacity-100",
                  heading.level === 3 && "pl-3",
                  activeId === heading.id ? "opacity-100 font-bold" : "opacity-60"
                )}>
                {heading.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </aside>
  )
}
