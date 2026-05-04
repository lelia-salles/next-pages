import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Octopus() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Octopus - Do it Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Octopus</h1>
        </header>

        {/* Conteúdo Central */}
        <div className={`${styles.intro} ${styles.contentWrapper}`}>
          <h1>Projeto Octopus</h1>
          <p>
            Bem-vindo à página Octopus. Assim como um polvo com seus múltiplos tentáculos, 
            esta interface representa a capacidade de gerenciar diversas integrações e tarefas simultaneamente.
          </p>
          <p>
            Aqui você pode adicionar módulos versáteis e flexíveis para expandir o seu ecossistema digital com o Next.js.
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