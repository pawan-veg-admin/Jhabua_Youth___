export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-center text-sm text-white/60">
      <p>
        © {new Date().getFullYear()} Arpit Library. Built with Next.js, Tailwind, Express, MongoDB, and Razorpay.
      </p>
    </footer>
  );
}
