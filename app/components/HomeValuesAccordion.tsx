"use client";

import { useState, type ReactNode } from "react";

type ValueItem = {
  title: string;
  icon: ReactNode;
  points: string[];
};

export function HomeValuesAccordion({ items }: { items: ValueItem[] }) {
  const [openTitle, setOpenTitle] = useState<string | null>(items[0]?.title ?? null);

  return (
    <div className="values-list">
      {items.map((value) => {
        const isOpen = openTitle === value.title;

        return (
          <div key={value.title} className={`value-item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="value-summary"
              aria-expanded={isOpen}
              onClick={() => setOpenTitle(isOpen ? null : value.title)}
            >
              <div className="value-title-wrap">
                <span className="value-icon">{value.icon}</span>
                <span className="value-title">{value.title}</span>
              </div>
              <span className="value-chevron" aria-hidden="true" />
            </button>
            {isOpen ? (
              <div className="value-content">
                <ul>
                  {value.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
