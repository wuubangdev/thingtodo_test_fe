import ClientFeedBack from "@/components/client-feedback/ClientFeedBack";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import OurService from "@/components/our-service/OurService";
import OurValued from "@/components/our-valued/OurValued";
import OurWork from "@/components/our-work/OurWork";

export default function Home() {
  return (
    <div
    // className="overflow-hidden"
    >
      <Navbar isPrimary={true} />
      {/* Hero section */}
      <Hero />
      {/* Our lasted work */}
      <OurWork />
      {/* How can we help you */}
      <OurService />
      <div
        className="py-20 flex flex-col gap-40"
        style={{
          background: "linear-gradient(180deg, rgba(19, 30, 41, 0.9) 6.01%, rgba(19, 30, 41, 0.72) 57.21%), url(/hero/hero_image.jpeg)",
          boxShadow: "0px 21px 26.5px 0px #131E2933 inset",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <OurValued />
        <ClientFeedBack />
      </div>
    </div>
  );
}
