import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Banana() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Banana - Do it Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Banana</h1>
        </header>

        {/* Conteúdo Central */}
        <div className={`${styles.intro} ${styles.contentWrapper}`}>
          <h1>Projeto Banana</h1>
          <p>
            Bem-vindo à página Banana. Uma seção focada em simplicidade, energia e entrega rápida.
          </p>
          <p>
            Assim como a fruta, este componente foi pensado para ser "descascado" e consumido de forma eficiente, 
            trazendo uma estrutura base sólida e direta ao ponto para o seu front-end.
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