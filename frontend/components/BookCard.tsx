import Image from "next/image";
import { motion } from "framer-motion";
import { Book } from "@/lib/books";

export function BookCard({ book }: { book: Book }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass-card overflow-hidden rounded-2xl p-4 text-foam shadow-xl"
    >
      <div className="relative mb-4 h-56 w-full overflow-hidden rounded-xl">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        {book.tags && (
          <div className="absolute left-3 top-3 flex gap-2">
            {book.tags.map((tag) => (
              <span key={tag} className="badge-pill bg-white/20 text-xs text-white">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
        <span>{book.category}</span>
        <span>⭐ {book.rating.toFixed(1)}</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold text-white">{book.title}</h3>
      <p className="text-sm text-white/70">by {book.author}</p>
      <p className="mt-3 text-white/80 line-clamp-2 text-sm">{book.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold text-foam">₹{book.price}</span>
        <button className="btn-primary text-sm">Add to cart</button>
      </div>
    </motion.div>
  );
}
