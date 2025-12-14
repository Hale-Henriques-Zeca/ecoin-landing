export async function translateText(text: string, lang: string) {
  if (!window.translationCache) window.translationCache = {};

  const key = `${lang}:${text}`;
  if (window.translationCache[key]) return window.translationCache[key];

  const res = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, target: lang }),
  });

  const { translated } = await res.json();

  window.translationCache[key] = translated;

  return translated;
}
