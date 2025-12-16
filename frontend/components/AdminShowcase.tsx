import { ChartBarIcon, UsersIcon, CubeTransparentIcon } from "@heroicons/react/24/outline";

export function AdminShowcase() {
  return (
    <section id="admin" className="mt-20 rounded-3xl bg-white/5 p-8 shadow-inner backdrop-blur-xl dark:bg-midnight/80">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="badge-pill">Admin dashboard</p>
          <h3 className="text-2xl font-semibold text-white">Control every metric</h3>
          <p className="text-white/70">
            Monitor sales, track inventory, manage promo drops, and resolve orders without leaving the cockpit.
          </p>
        </div>
        <div className="flex gap-3">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">Orders • 124</span>
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">Stock alerts • 3</span>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[{
          title: "Revenue pulses",
          desc: "Charts & cohorts to spotlight high-intent buyers.",
          Icon: ChartBarIcon,
        }, {
          title: "User roles",
          desc: "Admins, managers, and customers with granular JWT scopes.",
          Icon: UsersIcon,
        }, {
          title: "Inventory sync",
          desc: "Stock states ready for webhooks and cron jobs.",
          Icon: CubeTransparentIcon,
        }].map((item) => (
          <div key={item.title} className="glass-card flex gap-3 rounded-2xl p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
              <item.Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="text-sm text-white/70">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
