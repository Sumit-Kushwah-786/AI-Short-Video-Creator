import { Roboto } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

export const metadata = {
  title: "AI-SVC",
  description: "AI-Short-Video-Creator",
};

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={roboto.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
