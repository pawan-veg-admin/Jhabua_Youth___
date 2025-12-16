import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-midnight/80 via-midnight/40 to-transparent backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-neon to-blush text-white font-bold shadow-glow">
            AL
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Arpit Library</p>
            <p className="text-lg font-bold text-white">Books for the bold.</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
          <Link href="#collection" className="hover:text-white">Collection</Link>
          <Link href="#features" className="hover:text-white">Features</Link>
          <Link href="#admin" className="hover:text-white">Admin</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="group relative rounded-full bg-white/10 p-3 text-white shadow-lg transition hover:shadow-glow" aria-label="Cart">
            <ShoppingBagIcon className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blush text-xs font-bold text-white shadow-lg">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
