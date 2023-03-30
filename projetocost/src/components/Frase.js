import styles from './Frase.module.css'

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Essa é a primeira frase</p>
      <p>Essa é a segunda frase</p>
    </div>
  );
}

export default Frase;
