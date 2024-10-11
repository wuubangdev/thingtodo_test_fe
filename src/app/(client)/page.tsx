import Feature from "@/components/feature/Feature";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import OurService from "@/components/our-service/OurService";
import OurWork from "@/components/our-work/OurWork";

export default function Home() {
  return (
    <div>
      <Navbar isPrimary={true} />
      {/* Hero section */}
      <Hero />
      {/* <Feature /> */}
      {/* Our lasted work */}
      <OurWork />
      {/* How can we help you */}
      <OurService />
    </div>
  );
}
