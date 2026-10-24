const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** "2026-08" -> "August 2026", "2026" -> "2026", "present" -> "present" */
export function formatMonth(value?: string): string {
  if (!value) return '';
  if (value === 'present') return 'present';
  const [year, month] = value.split('-');
  return month ? `${months[Number(month) - 1]} ${year}` : year;
}

export function formatRange(start: string, end?: string): string {
  return `${formatMonth(start)} to ${end ? formatMonth(end) : 'present'}`;
}

/** Content fields that still need Mohammad's input start with "TODO:" */
export const isTodo = (value?: string) => !value || value.trim().startsWith('TODO:');
