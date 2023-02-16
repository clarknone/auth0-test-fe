"use client";
import "@/config/axios.config";
import { Auth0Provider } from "@auth0/auth0-react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <Auth0Provider
      domain="unit-auth-test.jp.auth0.com"
      clientId="sqsj3bbA5p1ricYYxQqCNBAPNBUZHZzZ"
      authorizationParams={{ redirect_uri: "http://localhost:3000", audience: "https://localhost:8000" }}
    >
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>{children}</body>
      </html>
    </Auth0Provider>
  );
}
