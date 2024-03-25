import styles from "./Button.module.css";

interface Props {
  text: string;
  handleClick: () => void;
}

export const Button: React.FC<Props> = ({ text, handleClick }) => {
  return (
    <button className={styles.button} onClick={() => handleClick}>
      {text}
    </button>
  );
};
