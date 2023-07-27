import GlobalStyles from "../../styles/twitter/GlobalStyles";
import Layout from "../../components/twitter/Layout";

export const metadata = {
  title: {
    default: "Thiago Miguel",
    template: "%s | Thiago Miguel",
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "Thiago Miguel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout />
      <GlobalStyles />
    </>
  );
}
