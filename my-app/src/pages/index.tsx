import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Do it Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Do it Next</h1>
        </header>

        {/* Conteúdo Central - Combinando as classes 'intro' original e a nova 'contentWrapper' */}
        <div className={`${styles.intro} ${styles.contentWrapper}`}>
          <h1>Benefícios do TypeScript e Next.js</h1>
          <p>
            A combinação do <strong>TypeScript</strong> com o <strong>Next.js</strong> oferece uma base robusta para o desenvolvimento web moderno. 
            O TypeScript adiciona tipagem estática ao JavaScript, permitindo detectar erros durante o desenvolvimento 
            e melhorar a manutenção do código.
          </p>
          <p>
            Já o Next.js potencializa o React com recursos como renderização no lado do servidor (SSR), resultando em aplicações 
            extremamente rápidas e otimizadas para SEO.
          </p>
          
          {/* CTAs */}
          <div className={styles.ctas}>
            <a className={styles.primary}>Get Started</a>
            <a className={styles.secondary}>Learn More</a>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>Lelia Salles &copy; 2026</p>
        </footer>
      </main>
    </div>
  );
}