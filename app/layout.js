// app/layout.js
import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "My Website",
  description: "Website description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
