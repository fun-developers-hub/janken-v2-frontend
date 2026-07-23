"use client";

import { useId, useState, type ReactNode } from "react";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabSwitcherProps = {
  tabs: Tab[];
};

export function TabSwitcher({ tabs }: TabSwitcherProps) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const groupId = useId();
  const active = tabs.find(tab => tab.id === activeId) ?? tabs[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="コンテンツ切り替え"
        className="flex gap-2 border-b border-slate-300">
        {tabs.map(tab => (
          <button
            key={tab.id}
            id={`${groupId}-tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={tab.id === activeId}
            aria-controls={`${groupId}-panel-${tab.id}`}
            onClick={() => setActiveId(tab.id)}
            className={
              tab.id === activeId
                ? "border-newblue text-newblue border-b-2 px-4 py-2 font-bold"
                : "px-4 py-2 text-slate-500"
            }>
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${groupId}-panel-${active.id}`}
        aria-labelledby={`${groupId}-tab-${active.id}`}
        className="py-4">
        {active.content}
      </div>
    </div>
  );
}
