import styles from './facts.module.css';

interface FactProps {
  title: string;
  text: string;
}

export function Fact({ title, text }: FactProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}