import styles from "./BlogItem.module.css";

interface BlogItemType {
  img: string;
  label: string;
  description: string;
}

const BlogItem = ({ img, label, description }: BlogItemType) => {
  return (
    <article className={styles.blogItem}>
      <img src={img} alt={label} className={styles.image} />

      <div className={styles.textContainer}>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default BlogItem;
