const images = import.meta.glob("./*.webp");

const IMAGES = [];
for (const path in images) {
  images[path]().then(() => {
    IMAGES.push(new URL(path, import.meta.url).href);
  });
}

export async function loadImages() {
  await Promise.all(Object.values(images));
  return IMAGES;
}

export function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
