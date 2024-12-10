// import ClientFeedBack from "@/components/client-feedback/ClientFeedBack";
import ClientFeedBack from "@/components/client-feedback/ClientFeedBack";
import Feature from "@/components/feature/Feature";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero-section/HeroSection";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import OurService from "@/components/our-service/OurService";
import OurValued from "@/components/our-valued/OurValued";
import OurWork from "@/components/our-work/OurWork";
import { sendRequest } from "@/utils/api";
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
          url: 'https://github.com/bangkbdtvtcm/file/blob/main/Open%20Graph.png?raw=true',
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
      images: ['https://github.com/bangkbdtvtcm/file/blob/main/Open%20Graph.png?raw=true']
    },
  }
}

const idJsonObject = {
  "@context": "https://www.thingtodo.vn/",
  "@type": "Agency",
  "name": "Thing to do",
  "image": {
    "@type": "ImageObject",
    "url": "https://github.com/bangkbdtvtcm/file/blob/main/Open%20Graph.png?raw=true",
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

export default async function Home() {

  const heroRes = await sendRequest<IBackendRes<IHero>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/heros/1`,
    method: "GET",
    nextOption: {
      next: { tags: ['heroes'] }
    }
  })
  const catalogRes = await sendRequest<IBackendRes<ICatalog>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/catalogs/1`,
    method: "GET",
    nextOption: {
      next: { tags: ['catalogs'] }
    }
  })
  const projectRes = await sendRequest<IResultPaginate<IProject>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/projects?page=1&size=10`,
    method: "GET",
    nextOption: {
      next: { tags: ['projects'] }
    }
  })
  const servicesRes = await sendRequest<IResultPaginate<IService>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/services?page=1&size=10`,
    method: "GET",
    nextOption: {
      next: { tags: ['services'] }
    }
  })
  const clientRes = await sendRequest<IResultPaginate<IClient>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/valued?page=1&size=100`,
    method: "GET",
    nextOption: {
      next: { tags: ['clients'] }
    }
  })
  const feedBackRes = await sendRequest<IResultPaginate<IClientFeedback>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/clients?page=1&size=100`,
    method: "GET",
    nextOption: {
      next: { tags: ['feedbacks'] }
    }
  })


  return (
    <>
      <div>
        <Navbar isPrimary={true} />
        {/* Hero section */}
        {heroRes.data && <Hero hero={heroRes.data} />}
        {heroRes.data && <HeroSection hero={heroRes.data} />}
        <div className="xl:block hidden">
          <Feature />
        </div>
        {projectRes?.data?.result && <OurWork projects={projectRes.data.result} />}
        {servicesRes?.data?.result && <OurService services={servicesRes.data.result} />}
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
          {clientRes?.data?.result && <OurValued clients={clientRes.data.result} />}
          {feedBackRes?.data?.result && <ClientFeedBack clientFeedback={feedBackRes.data.result!} />}
        </div>
        {catalogRes?.data && <Footer catalog={catalogRes.data} />}
      </div>
      <Script
        id="json-ld-organization"
        strategy='lazyOnload'
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(idJsonObject) }} />
    </>
  );
}
