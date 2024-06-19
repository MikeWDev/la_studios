import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/pages/HomePage";
import BestShotsPage from "@/pages/BestShotsPage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <BestShotsPage />
    </main>
  );
}
