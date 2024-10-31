// import ClientFeedBack from "@/components/client-feedback/ClientFeedBack";
import Feature from "@/components/feature/Feature";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero-section/HeroSection";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import OurService from "@/components/our-service/OurService";
import OurValued from "@/components/our-valued/OurValued";
import OurWork from "@/components/our-work/OurWork";
import { Metadata } from "next";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Thing to do",
    description: 'A create agency - Create awesome stuff together',
    openGraph: {
      title: "Thing to do",
      description: 'A create agency - Create awesome stuff together',
      url: 'https://www.thingtodo.vn/',
      images: [
        {
          url: 'https://raw.githubusercontent.com/wuubangdev/share-host-file/refs/heads/main/Open%20Graph.png',
          width: 1220,
          height: 633,
          alt: 'Thing to do'
        }
      ],
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@thingtodo_agency',
      title: 'Thing to do',
      description: 'A create agency - Create awesome stuff together',
      images: ['https://raw.githubusercontent.com/wuubangdev/share-host-file/refs/heads/main/Open%20Graph.png']
    },
  }
}

const idJsonObject = {
  "@context": "https://www.thingtodo.vn/",
  "@type": "Agency",
  "name": "Thing to do",
  "image": {
    "@type": "ImageObject",
    "url": "https://raw.githubusercontent.com/wuubangdev/share-host-file/refs/heads/main/Open%20Graph.png",
    "width": 1220,
    "height": 633
  },
  "telephone": "+84 966 080 411",
  "url": "https://www.thingtodo.vn/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3rd floor, TSA Building, 169/1 Vo Thi Sau Street, Vo Thi Sau Ward, District 3, HCMC",
    "addressLocality": "Ho Chi Minh",
    "postalCode": "700000",
    "addressRegion": "Ho Chi Minh",
    "addressCountry": "VN"
  },
  "priceRange": "1000 - 1000000000",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      "opens": "09:00",
      "closes": "18:30"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "10.7830647",
    "longitude": "106.6875892"
  }
}

export default function Home() {
  return (
    <>
      <div className="bg-[#fcfcfc]">
        <Navbar isPrimary={true} />
        {/* Hero section */}
        <Hero />
        <HeroSection />
        <div className="xl:block hidden">
          <Feature />
        </div>
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
          {/* <ClientFeedBack /> */}
        </div>
        <Footer />
      </div>
      <Script
        id="json-ld-organization"
        strategy='lazyOnload'
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(idJsonObject) }} />
    </>
  );
}
