import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
      <Navbar isPrimary={false} />
      {children}
    </div>
  );
}
