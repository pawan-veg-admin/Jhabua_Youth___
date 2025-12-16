export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  rating: number;
  description: string;
  cover: string;
  tags?: string[];
};

export const books: Book[] = [
  {
    id: "1",
    title: "Neon Nights in Mumbai",
    author: "Aisha Kapoor",
    price: 399,
    category: "Fiction",
    rating: 4.8,
    description: "A cyberpunk love letter to the city that never sleeps, packed with edge-of-the-seat chases and tender chaos.",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    tags: ["Trending", "Signed"],
  },
  {
    id: "2",
    title: "The Mindful Founder",
    author: "Raghav Menon",
    price: 499,
    category: "Business",
    rating: 4.6,
    description: "Startup rituals, burn-out antidotes, and flow-state frameworks for Gen Z builders.",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    tags: ["Bestseller"],
  },
  {
    id: "3",
    title: "Pixels & Poetry",
    author: "Kiara Fernandes",
    price: 299,
    category: "Art & Design",
    rating: 4.7,
    description: "A coffee-table keepsake blending UI inspo, color palettes, and prose about digital dreams.",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
    tags: ["New"],
  },
  {
    id: "4",
    title: "Quantum Chai",
    author: "Dr. Aarav Patel",
    price: 599,
    category: "Science",
    rating: 4.9,
    description: "Physics explained over chai breaks with doodles, memes, and bite-sized experiments.",
    cover: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Sunrise Selfies",
    author: "Meera & Kabir",
    price: 259,
    category: "Travel",
    rating: 4.5,
    description: "Micro-itineraries and photo prompts for travelers hunting golden-hour magic across India.",
    cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
  },
];
