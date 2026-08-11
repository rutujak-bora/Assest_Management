/**
 * Calculates aging (time elapsed) from a given date string (e.g. purchase_date or edit date) to today.
 * Examples: "2y 3m", "5m 12d", "14d", "0d"
 */
export function calculateAging(dateStr: string | null | undefined): string {
  if (!dateStr) return "—";
  const start = new Date(dateStr);
  if (isNaN(start.getTime())) return "—";

  const now = new Date();
  if (start > now) return "Future date";

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  if (years === 0 && months === 0) parts.push(`${days} ${days === 1 ? "day" : "days"}`);

  return parts.join(" ") || "0 days";
}
