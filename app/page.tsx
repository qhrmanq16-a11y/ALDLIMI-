import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { FeatureGrid } from "@/components/FeatureGrid";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <FeatureGrid />
      <Footer />
    </main>
  );
}
