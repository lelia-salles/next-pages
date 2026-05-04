import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Fact } from "@/components"; // Importação do componente

export default function Octopus() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Octopus - Do it Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Octopus</h1>
        </header>

        <div className={`${styles.intro} ${styles.contentWrapper}`}>
          <h1>Projeto Octopus</h1>
          <p>
            Bem-vindo à página Octopus. Assim como um polvo com seus múltiplos tentáculos, 
            esta interface representa a capacidade de gerenciar diversas integrações e tarefas simultaneamente.
          </p>
          
          {/* Adicionando os componentes Fact */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '24px' }}>
            <Fact 
              title="Cérebros Distribuídos" 
              text="Polvos possuem neurônios espalhados por seus tentáculos, lembrando uma arquitetura de microsserviços bem estruturada." 
            />
            <Fact 
              title="Flexibilidade" 
              text="Por não terem ossos, eles se adaptam a qualquer ambiente, assim como um código Next.js perfeitamente responsivo." 
            />
          </div>
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerText}>Lelia Salles &copy; 2026</p>
        </footer>
      </main>
    </div>
  );
}