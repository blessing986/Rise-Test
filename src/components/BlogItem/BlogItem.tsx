import styles from "./BlogItem.module.css";

interface BlogItemType {
  img: string;
  label: string;
  description: string;
}

const BlogItem = ({ img, label, description }: BlogItemType) => {
  return (
    <div className={styles.blogItem}>
      <img src={img} alt={label} className={styles.image} />

      <div className={styles.textContainer}>
        <h6 className={styles.label}>{label}</h6>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default BlogItem;
