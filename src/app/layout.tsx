import GlobalContext from "@/context";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalContext>
        <body className="relative w-screen h-screen transition-all">
          {children}
        </body>
      </GlobalContext>
    </html>
  );
}
