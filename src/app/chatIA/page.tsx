import { Metadata } from "next";

export const metadata: Metadata = {
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

export default function RootLayout() {
  return <div />;
}
