/**
 * Auto-calculate estimated read time from Portable Text blocks.
 * Average reading speed: 238 words/minute.
 * Returns a manual override if provided.
 */
export function calcReadTime(body?: any[], manualOverride?: number): number {
  if (manualOverride && manualOverride > 0) return manualOverride;
  if (!body || body.length === 0) return 1;

  const text = body
    .filter((block) => block._type === "block" && block.children)
    .flatMap((block: any) => block.children)
    .filter((child: any) => child._type === "span" && child.text)
    .map((child: any) => child.text)
    .join(" ");

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 238));
}

/**
 * Format a date string to "March 1, 2026" style.
 */
export function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
