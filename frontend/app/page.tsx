import { Hero } from "@/components/Hero";
import { BookGrid } from "@/components/BookGrid";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { AdminShowcase } from "@/components/AdminShowcase";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <div id="collection">
        <BookGrid />
      </div>
      <FeatureHighlights />
      <AdminShowcase />
    </div>
  );
}
