import styles from "./ExpertsItem.module.css";

interface ExpertsItemType {
  img: string;
  name: string;
  role: string;
  alt: string;
}

const ExpertsItem = ({ img, name, role,alt }: ExpertsItemType) => {
  return (
    <article className={styles.container}>
      <img src={img} alt={alt} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.role}>{role}</span>
      </div>
    </article>
  );
};

export default ExpertsItem;
