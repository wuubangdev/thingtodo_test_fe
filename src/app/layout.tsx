'use client'
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MobileMenuContextProvider } from "@/components/context/MobileMenuContext";
import MobileMenu from "@/components/navbar/MobileMenu";
import { ContactContextProvider } from "@/components/context/ContactContext";
import ContactModal from "@/components/modal-contact/ContactModal";
import ButtonScrollToTop from "@/components/float-button/ButtonScrollToTop";
import { CursorVariantContextProvider } from "@/components/context/CursorVariantContext";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/TTD-favicon.svg" type="image/svg+xml" />
      </head>
      <body className="relative">
        <MobileMenuContextProvider>
          <ContactContextProvider>
            <CursorVariantContextProvider>
              {children}
            </CursorVariantContextProvider>
            <MobileMenu />
            <ContactModal />
            <ButtonScrollToTop />
          </ContactContextProvider>
        </MobileMenuContextProvider>
      </body>
    </html>
  );
}
