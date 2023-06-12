import Footer from "./components/Footer/Footer";
import MainNavigation from "./components/Header/Navigation/MainNavigation/MainNavigation";

export const metadata = {
  title: "Prestige Cakes",
  description: "Order cakes, desserts and cookies.",
};

export default function LandingLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
