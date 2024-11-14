import ButtonScrollToTop from "@/components/float-button/ButtonScrollToTop";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
      {children}
    </div>
  );
}
