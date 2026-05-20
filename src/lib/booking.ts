// Paste your Microsoft Bookings URL here once you generate it from M365.
// Leave as empty string to fall back to the existing schedule call modal.
export const BOOKING_URL = '';

export function openBooking(fallback?: () => void): void {
  if (BOOKING_URL) {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
    return;
  }
  if (fallback) {
    fallback();
    return;
  }
  window.dispatchEvent(new CustomEvent('openScheduleModal'));
}
