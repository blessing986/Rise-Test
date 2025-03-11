interface BlogItemType {
  img: string;
  label: string;
  description: string;
}

const BlogItem = ({ img, label, description }: BlogItemType) => {
  return (
    <>
      <div className="flex items-center lg:justify-center gap-[20px] sm:px-10 md:px-0">
        <img src={img} alt={label} className="h-20 w-20" />

        <div className="flex flex-col gap-[5px]">
          <h6 className="text-[#222222] font-normal text-[15px] leading-[20px]">
            {label}
          </h6>
          <p className="text-[#71879C] font-normal text-[16px] sm:text-[18px] leading-[100%]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogItem;

// import styles from "./BlogItem.module.css";

// interface BlogItemType {
//   img: string;
//   label: string;
//   description: string;
// }

// const BlogItem = ({ img, label, description }: BlogItemType) => {
//   return (
//     <div className={styles.blogItem}>
//       <img src={img} alt={label} className={styles.image} />

//       <div className={styles.textContainer}>
//         <h6 className={styles.label}>{label}</h6>
//         <p className={styles.description}>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default BlogItem;
