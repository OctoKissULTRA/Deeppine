export const metadata = {
  title: "Deep Pine — AI-powered SaaS & Product Design",
  description: "Design smarter. Build faster. Scale further. AI design + SaaS engineering for ambitious teams.",
  metadataBase: new URL("https://deeppine.io"),
  icons: { icon: "/app/icon.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased selection:bg-pine-600/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
