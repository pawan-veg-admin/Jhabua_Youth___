import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Book, books } from "@/lib/books";
import { BookCard } from "./BookCard";

const categories = ["All", "Fiction", "Business", "Art & Design", "Science", "Travel"];

export function BookGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || book.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="mt-16 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="badge-pill">Curated drops</p>
          <h2 className="text-2xl font-semibold text-white">Books that vibe with you</h2>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <input
            className="w-full rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-neon md:w-64"
            placeholder="Search titles"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((name) => (
              <button
                key={name}
                onClick={() => setCategory(name)}
                className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                  category === name
                    ? "bg-gradient-to-r from-neon to-blush text-white shadow-glow"
                    : "bg-white/5 text-white/80 hover:bg-white/10"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {filtered.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </motion.div>
    </section>
  );
}
