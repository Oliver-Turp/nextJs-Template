import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import setup from "@/components/maintenance/setup.json";
import Maintenance from "@/components/maintenance/Maintenance";

import "./globals.css";

const isMaintenance = setup.maintenanceMode;

export const metadata = {
  title: "Page Title Here",
  description: "Page description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {isMaintenance ? <Maintenance /> : children}
        <Footer />
      </body>
    </html>
  );
}
