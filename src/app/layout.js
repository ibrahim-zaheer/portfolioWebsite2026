import "./globals.css";

export const metadata = {
  title: "Ibrahim Zaheer | Offline-First Mobile Apps for Field Service Teams",
  description: "I build offline-first mobile apps for logistics and construction companies — apps that keep field crews working even without signal, syncing automatically once back online.",
  openGraph: {
    title: "Ibrahim Zaheer | Offline-First Mobile Apps for Field Teams",
    description: "I build offline-first mobile apps for logistics and construction companies — apps that keep field crews working even without signal, syncing automatically once back online.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background min-h-screen text-gray-300 font-sans selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
