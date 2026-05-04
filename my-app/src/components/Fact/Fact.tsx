import { FC } from 'react';
import styles from "./facts.module.css";

interface FactProps {
    title: string;
    description: string;
}

export const Fact:FC<FactProps> = ({
   title, description 
}) => {
    return (
      <>
        <header>
          <div className="container">
            <span>Facts</span>
          </div>
        </header>
        <main>
          <div className="container">
            <div className={styles.fact}>
              <h1>{title}</h1>
              <p className={styles.description}>{description}</p>
              <hr className={styles.hr} />
            </div>
          </div>
        </main>
        <footer>
        <div className="container">
          <p>
            © My Blog. All rights reserved
          </p>
        </div>
      </footer>
    </>
  )
}

