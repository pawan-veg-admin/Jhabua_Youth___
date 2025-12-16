import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight via-purple-900/80 to-black p-8 shadow-glow">
      <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-blush/30 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-neon/30 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="badge-pill">Books, vibes, and bold ideas</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Curated reads for <span className="gradient-text">Gen Z</span> creators.
          </h1>
          <p className="text-lg text-white/70">
            Discover statement-making fiction, startup playbooks, and mindful design gems.
            Flip the vibe between light and dark, and checkout securely with Razorpay.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#collection" className="btn-primary">
              Shop the drop
            </Link>
            <Link href="#features" className="btn-ghost">
              Explore features
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <div className="rounded-full bg-white/10 px-3 py-2">⚡ Fast search</div>
            <div className="rounded-full bg-white/10 px-3 py-2">🛒 Cart & checkout</div>
            <div className="rounded-full bg-white/10 px-3 py-2">🛡️ Secure JWT auth</div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card relative flex flex-col gap-4 rounded-2xl p-6 text-foam"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-foam/80">Cart preview</p>
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">2 items</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">Pixels & Poetry</p>
                <p className="text-xs text-white/70">Art & Design</p>
              </div>
              <p className="font-semibold text-white">₹299</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">Quantum Chai</p>
                <p className="text-xs text-white/70">Science</p>
              </div>
              <p className="font-semibold text-white">₹599</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <p className="text-white/80">Subtotal</p>
            <p className="text-2xl font-bold text-white">₹898</p>
          </div>
          <button className="btn-primary w-full">Checkout with Razorpay</button>
          <p className="text-xs text-white/60">Admin dashboard tracks orders, users, and stock in real time.</p>
        </motion.div>
      </div>
    </section>
  );
}
