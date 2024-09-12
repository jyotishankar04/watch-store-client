import Navbar from "@/components/projectComp/main/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-full">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
