"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={cn(
              "border rounded-xl overflow-hidden transition-colors duration-200",
              isOpen
                ? "border-[#c8a84b]/60 bg-white shadow-sm"
                : "border-gray-200 bg-white hover:border-[#c8a84b]/30"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              aria-expanded={isOpen}
            >
              <h3 className="text-base md:text-lg font-bold text-[#0A0F1E] leading-snug">
                {faq.q}
              </h3>
              <ChevronDown
                className={cn(
                  "w-5 h-5 shrink-0 text-[#c8a84b] transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
