export default function truncateString(text: string, size: number) {
  return (text && text.length >= size + 3) ? text.substring(0, size).replace(/\s+/g, ' ').concat('...') : text;
}
