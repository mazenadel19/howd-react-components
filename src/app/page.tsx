import Footer from "@/components/Footer";
import StyleGenerator from "@/components/StyleGenerator";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <StyleGenerator />
      <Footer />
    </main>
  );
}
