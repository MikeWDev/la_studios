import HomePage from "@/pages/HomePage";
import BestShotsPage from "@/pages/BestShotsPage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ReviewsPage from "@/pages/ReviewsPage";
import ContactPage from "@/pages/ContactPage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <BestShotsPage />
      <AboutPage />
      <ServicesPage />
      <ReviewsPage />
      <ContactPage />
    </main>
  );
}
