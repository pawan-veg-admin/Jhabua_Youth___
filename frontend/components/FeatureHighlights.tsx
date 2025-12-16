import { SparklesIcon, ShieldCheckIcon, CurrencyRupeeIcon, CommandLineIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "JWT-secured auth",
    description: "Login & sign-up flows wired for modern security standards with token-based sessions.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Search, filter, sort",
    description: "Speedy browsing with category filters, fuzzy search, and curated tag pills.",
    icon: SparklesIcon,
  },
  {
    title: "Razorpay checkout",
    description: "Collect payments in INR with a sleek Razorpay drop-in flow plus webhook handler hooks.",
    icon: CurrencyRupeeIcon,
  },
  {
    title: "Admin cockpit",
    description: "Manage inventory, promotions, and order status from a dedicated dashboard shell.",
    icon: CommandLineIcon,
  },
];

export function FeatureHighlights() {
  return (
    <section id="features" className="mt-20 grid gap-6 md:grid-cols-2">
      {features.map((feature) => (
        <div key={feature.title} className="glass-card flex items-start gap-4 rounded-2xl p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
            <feature.icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="text-sm text-white/70">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
