import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Blog() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Blog - Do it Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Blog</h1>
        </header>

        {/* Conteúdo Central */}
        <div className={`${styles.intro} ${styles.contentWrapper}`}>
          <h1>Últimas Postagens</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <article>
              <h2 style={{ fontSize: '24px', margin: '0 0 8px 0' }}>Por que escolher TypeScript?</h2>
              <p>Descubra como a tipagem estática pode salvar horas de depuração e melhorar a escalabilidade do seu projeto.</p>
              <a href="#" className={styles.primary} style={{ marginTop: '10px' }}>Ler artigo</a>
            </article>

            <article>
              <h2 style={{ fontSize: '24px', margin: '0 0 8px 0' }}>Next.js e SEO</h2>
              <p>Entenda como a renderização no lado do servidor (SSR) coloca sua aplicação no topo das buscas do Google.</p>
              <a href="#" className={styles.secondary} style={{ marginTop: '10px' }}>Ler artigo</a>
            </article>
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