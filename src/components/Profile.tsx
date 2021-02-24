import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/rickson-simoes.png" alt="Rickson Simoes" />

      <div>
        <strong> Rickson Simões </strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}