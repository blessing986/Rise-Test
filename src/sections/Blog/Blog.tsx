import styles from "./Blog.module.css";
import arrowRight from "../../assets/arrowRight.png";
import BlogItem from "../../components/BlogItem/BlogItem";
import portfolio from "../../assets/portfolio.png";
import story from "../../assets/story.png";
import update from "../../assets/update.png";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Get smarter about your money.</h1>
        <p className={styles.description}>
          The latest news, market insight and everything you need to know about
          managing your money.
        </p>

        <div>
          <button className={styles.ctaButton}>
            <span>Read the blog</span>
            <img src={arrowRight} alt="arrowRight" className={styles.icon} />
          </button>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.blogItems}>
        <BlogItem
          img={portfolio}
          label="May Portfolio Report"
          description="Rise has added YouTube to its stocks portfolio growth"
        />

        <BlogItem
          img={story}
          label="User stories"
          description="Rise has added YouTube to its stocks portfolio growth"
        />

        <BlogItem
          img={update}
          label="Update"
          description="Rise has added YouTube to its stocks portfolio growth"
        />
      </div>

      <div>
        <button className={styles.Button}>
          <span>Read the blog</span>
          <img src={arrowRight} alt="arrowRight" className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Blog;
