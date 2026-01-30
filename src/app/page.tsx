import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsGrid from "@/components/NewsGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <NewsGrid />
      
      <footer className="py-12 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">TheDailyNews<span className="text-gradient">Point</span></h2>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} The Daily News Point. Crafted for the future.</p>
        </div>
      </footer>
    </main>
  );
}