/*
  Wix current post copier

  How to use:
  1. Open a Wix blog post in the editor.
  2. Open the SEO panel if you want SEO title/meta/slug included.
  3. Open browser DevTools > Console.
  4. Paste this whole file and press Enter.
  5. The JSON is copied to your clipboard and also printed in the console.
*/

(() => {
  const visited = new Set();

  function text(value) {
    return String(value ?? "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getDocuments(win = window) {
    const docs = [];

    function visit(currentWindow) {
      if (!currentWindow || visited.has(currentWindow)) return;
      visited.add(currentWindow);

      try {
        if (currentWindow.document) docs.push(currentWindow.document);
        for (const frame of currentWindow.frames) visit(frame);
      } catch {
        // Cross-origin frames are expected in Wix. Ignore them.
      }
    }

    visit(win);
    return docs;
  }

  function fieldLabel(element) {
    const id = element.getAttribute("id");
    const aria = element.getAttribute("aria-label");
    const placeholder = element.getAttribute("placeholder");
    const name = element.getAttribute("name");

    if (id) {
      const owner = element.ownerDocument;
      const label = owner.querySelector(`label[for="${CSS.escape(id)}"]`);
      if (label) return text(label.innerText);
    }

    const nearby = element.closest("label, [class], [data-hook], [role]");
    const nearbyText = nearby ? text(nearby.innerText).slice(0, 160) : "";

    return text(aria || placeholder || name || nearbyText || element.tagName);
  }

  const documents = getDocuments();
  const fields = [];
  const editableBlocks = [];
  const images = [];

  for (const doc of documents) {
    for (const input of doc.querySelectorAll("input, textarea")) {
      const value = text(input.value);
      if (!value) continue;

      fields.push({
        label: fieldLabel(input),
        value,
      });
    }

    for (const editable of doc.querySelectorAll('[contenteditable="true"], [role="textbox"]')) {
      const value = text(editable.innerText || editable.textContent);
      if (value.length < 20) continue;

      editableBlocks.push(value);
    }

    for (const image of doc.querySelectorAll("img")) {
      const src = image.currentSrc || image.src;
      if (!src || src.startsWith("data:")) continue;

      images.push({
        src,
        alt: text(image.alt),
      });
    }
  }

  const unique = (items, key) => {
    const seen = new Set();
    return items.filter((item) => {
      const value = key(item);
      if (!value || seen.has(value)) return false;
      seen.add(value);
      return true;
    });
  };

  const result = {
    copiedAt: new Date().toISOString(),
    pageUrl: location.href,
    documentTitle: document.title,
    visibleLanguage:
      text(document.querySelector('[aria-label*="language" i]')?.innerText) ||
      text(document.querySelector('[aria-label*="idioma" i]')?.innerText) ||
      "",
    fields: unique(fields, (item) => `${item.label}:${item.value}`),
    editorTextBlocks: unique(editableBlocks, (value) => value),
    images: unique(images, (item) => item.src),
  };

  const json = JSON.stringify(result, null, 2);

  navigator.clipboard
    ?.writeText(json)
    .then(() => console.log("Copied Wix post data to clipboard:", result))
    .catch(() => console.log("Copy failed. Select and copy this JSON:", json));

  console.log(json);
})();
