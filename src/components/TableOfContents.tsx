import { useState } from 'react';
import { BookOpen, ChevronUp } from 'lucide-react';

interface TOCSection {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  sections: TOCSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export function DesktopTOC({ sections, activeSection, onSectionClick }: TableOfContentsProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
      <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-widest">
        TABLE OF CONTENTS
      </h4>
      <nav className="space-y-2">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`w-full text-left text-sm py-2.5 px-3 rounded-lg transition-all duration-200 flex items-start gap-3 ${
              section.level === 3 ? 'pl-8' : ''
            } ${
              activeSection === section.id
                ? 'bg-[#1B7A4E]/10 text-[#1B7A4E] dark:text-[#4a9d7d] font-semibold'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-semibold">
              {section.level === 3 ? '' : idx + 1}
            </span>
            <span className="flex-1 leading-snug">{section.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export function MobileTOC({
  sections,
  activeSection,
  onSectionClick,
}: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentSection = sections.find(s => s.id === activeSection);
  const currentLabel = currentSection?.title || 'Table of Contents';

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
      {/* Expanded TOC Dropdown */}
      {isOpen && (
        <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl max-h-[60vh] overflow-y-auto">
          <div className="p-4 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onSectionClick(section.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left text-sm py-2.5 px-4 rounded-lg transition-all ${
                  section.level === 3 ? 'pl-8' : ''
                } ${
                  activeSection === section.id
                    ? 'bg-[#1B7A4E]/10 text-[#1B7A4E] dark:text-[#4a9d7d] font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg px-4 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex items-center gap-2 text-sm">
          <BookOpen size={16} className="text-[#1B7A4E] flex-shrink-0" />
          <span className="text-gray-600 dark:text-gray-400 truncate max-w-[250px] font-medium">
            {currentLabel}
          </span>
        </div>
        <ChevronUp
          size={18}
          className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
}
