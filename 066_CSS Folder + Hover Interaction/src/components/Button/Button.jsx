import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', onClick, disabled = false }) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.content}>
        {children}
      </span>
      <div className={styles.glow}></div>
    </button>
  );
};

export default Button;