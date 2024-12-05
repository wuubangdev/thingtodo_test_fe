// import Footer from "@/components/footer/Footer";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { sendRequest } from "@/utils/api";

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const catalogRes = await sendRequest<IBackendRes<ICatalog>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/catalogs/1`,
    method: "GET",
  })
  return (
    <div>
      <Navbar isPrimary={false} />
      {children}
      <Footer catalog={catalogRes.data!} />
    </div>
  );
}
