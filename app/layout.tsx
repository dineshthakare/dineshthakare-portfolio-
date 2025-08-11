import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
    metadataBase: new URL("https://www.example.com/"),
    title: "Dinesh Thakare - MERN Stack Developer",
    description:
    "Explore Dinesh Thakare's portfolio showcasing expertise in full-stack web development, RESTful APIs, and scalable solutions using the MERN stack.",
    generator: "Next.js",
    applicationName: "Dinesh Thakare's MERN Stack Developer Portfolio",
    keywords: [
        "Dinesh Thakare",
        "MERN Stack Developer",
        "Full Stack Developer",
        "React Developer",
        "Node.js Developer",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "Web Development",
        "REST APIs",
        "AWS",
        "PostgreSQL",
        "MySQL",
        "Software Engineer"
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Dinesh Thakare - MERN Stack Developer Portfolio",
        description:
      "Explore Dinesh Thakare's portfolio showcasing expertise in full-stack web development, RESTful APIs, and scalable solutions using the MERN stack.",
        url: "https://www.example.com/dinesh-thakare",
        siteName: "Dinesh Thakare's Portfolio",
        images: [
            {
                url: "./public/dineshthakare.png",
                width: 1200,
                height: 630,
                alt: "Dinesh Thakare - MERN Stack Developer",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dinesh Thakare - MERN Stack Developer Portfolio",
        description:
      "Explore Dinesh Thakare's portfolio showcasing expertise in full-stack web development, RESTful APIs, and scalable solutions using the MERN stack.",
        creator: "@dineshthakare",
        creatorId: "0000000000",
        images: ["./public/dineshthakare.jpeg"],
    },
    robots: {
        index: true,    
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "web-development",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
