// lib/html.ts
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function addHeadingIds(html: string) {
  return html.replace(/<(h[23])>(.*?)<\/\1>/gi, (_, tag, inner) => {
    const id = slugify(inner.replace(/<[^>]+>/g, ""));
    return `<${tag} id="${id}">${inner}</${tag}>`;
  });
}

export function extractToc(html: string) {
  const regex = /<(h[23]) id="([^"]+)">(.*?)<\/\1>/gi;
  const items: { level: 2 | 3; id: string; title: string }[] = [];
  let m: RegExpExecArray | null;
  while ((m = regex.exec(html)) !== null) {
    items.push({
      level: m[1] === "h2" ? 2 : 3,
      id: m[2],
      title: m[3].replace(/<[^>]+>/g, ""),
    });
  }
  return items;
}
