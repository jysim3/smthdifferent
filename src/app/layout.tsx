import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "../../public/antd.min.css";
import Container from "./Container";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next Container",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider
            theme={{
              components: {
                Layout: {
                  headerBg: "transparent",
                  headerPadding: "20px 50px",
                  headerHeight: "",
                },
                Menu: {
                  itemBg: "transparent",
                  itemHeight: 64,
                },
              },
            }}
          >
            <Container>{children}</Container>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
