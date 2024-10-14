import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Production from "./components/Production";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Production />
    </div>
  );
}
