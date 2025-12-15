import Connect from "@/features/home/components/Connect";
import Experience from "@/features/home/components/Experience";
import Hero from "@/features/home/components/Hero";
import TechStack from "@/features/home/components/TechStack";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Experience />
      <TechStack />
      <Connect />
    </main>
  );
}
