import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <Head>
        <title>About - Do it Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>About Us</h1>
        </header>

        {/* Conteúdo Central */}
        <div className={`${styles.intro} ${styles.contentWrapper}`}>
          <h1>About Our Company</h1>
          <p>
            We are a leading company in our industry, committed to providing high-quality 
            products and exceptional customer service. Our team of dedicated professionals 
            works tirelessly to innovate and improve our offerings.
          </p>
          <p>
            Founded in 2010, we have grown rapidly and established a strong presence in the market. 
            Our mission is to deliver value to our customers while maintaining a sustainable 
            and responsible business model.
          </p>
          <p>
            We believe in fostering a positive work environment and supporting our employees 
            growth and development. Our company culture is built on the principles of 
            integrity, collaboration, and excellence.
          </p>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>Lelia Salles &copy; 2026</p>
        </footer>
      </main>
    </div>
  );
}