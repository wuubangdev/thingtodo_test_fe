import Feature from "@/components/feature/Feature";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import OurWork from "@/components/our-work/OurWork";

export default function Home() {
  return (
    <div>
      <Navbar isPrimary={true} />
      <Hero />
      {/* <Feature /> */}
      <OurWork />
    </div>
  );
}
