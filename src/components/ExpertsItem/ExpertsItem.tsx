import styles from "./ExpertsItem.module.css";

interface ExpertsItemType {
  img: string;
  name: string;
  role: string;
}

const ExpertsItem = ({ img, name, role }: ExpertsItemType) => {
  return (
    <div className={styles.container}>
      <img src={img} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.role}>{role}</span>
      </div>
    </div>
  );
};

export default ExpertsItem;
