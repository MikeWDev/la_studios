import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/pages/HomePage";
import BestShotsPage from "@/pages/BestShotsPage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <BestShotsPage />
      <AboutPage />
      <ServicesPage />
    </main>
  );
}
