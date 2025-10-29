import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Course Generator",
  description:
    "AI Course Generator is a platform that allows users to easily create and generate educational courses using artificial intelligence. By simply entering course details like name, duration, number of chapters, and specifying if videos are included, AI generates the entire course structure along with relevant YouTube videos for each chapter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ClerkProvider>
          <GoogleOneTap />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
