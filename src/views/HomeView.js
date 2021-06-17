import styles from './HomeView.module.css';


const HomeView = () => (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Phonebook App
        <span role="img" aria-label="Иконка приветствия">
          🤘🏼
        </span>
      </h1>
    </div>
  );
  
  export default HomeView;