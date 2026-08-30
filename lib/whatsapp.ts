export const whatsAppNumber = "34665259859";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
}
