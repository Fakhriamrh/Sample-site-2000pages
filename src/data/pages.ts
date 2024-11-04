import { titles, categories, authors, paragraphs, tags } from './sampleData';

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements<T>(array: T[], count: number): T[] {
  return Array.from({ length: count }, () => getRandomElement(array))
    .filter((value, index, self) => self.indexOf(value) === index);
}

function generateContent(): string {
  const numParagraphs = Math.floor(Math.random() * 2) + 2; // 2-3 paragraphs
  return getRandomElements(paragraphs, numParagraphs).join('\n\n');
}

function generateTitle(id: number): string {
  const baseTitle = getRandomElement(titles);
  const part = Math.floor(id / 200) + 1; // Creates series of related content
  return `${baseTitle} - Part ${part}: ${getRandomElement(tags)}`;
}

// Generate 2000 sample pages with more realistic and varied content
export const pages = Array.from({ length: 2000 }, (_, i) => {
  const id = i + 1;
  const date = new Date(Date.now() - Math.random() * 31536000000); // Random date within last year
  
  return {
    id,
    title: generateTitle(id),
    content: generateContent(),
    category: getRandomElement(categories),
    author: getRandomElement(authors),
    date: date.toISOString(),
    tags: getRandomElements(tags, Math.floor(Math.random() * 3) + 2), // 2-4 tags per page
    readTime: Math.floor(Math.random() * 15) + 5, // 5-20 min read time
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 50),
  };
});