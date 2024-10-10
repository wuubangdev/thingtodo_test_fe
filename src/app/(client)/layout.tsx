import ButtonScrollToTop from "@/components/float-button/ButtonScrollToTop";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
      {children}
      <Footer />
      <ButtonScrollToTop />
    </div>
  );
}
