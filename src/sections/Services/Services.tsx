import ServicesItem from "../../components/ServicesItem/ServicesItem";
import stock from "../../assets/stock.png";
import estate from "../../assets/estate.png";
import income from "../../assets/income.png";
import goal from "../../assets/goal.png";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>
      <section>
        <ServicesItem
          title="We bring the world’s best companies to you."
          description="The Rise stock portfolio is a selection of stocks of the world’s most profitable companies, curated by experts to deliver great long-term returns."
          buttonText="Create a stock plan now"
          bgColor="#EDFFFF"
          img={stock}
          imgAlt="Stock investment illustration"
        />
      </section>

      <section>
        <ServicesItem
          title="We offer diverse investment options."
          description="Our real estate offering is a portfolio of rental properties in the US that provide steady monthly returns, price appreciation, and capital gains. Your investments are more stable and protect you from market declines."
          buttonText="Create a real estate plan now"
          bgColor="#F5F1FE"
          img={estate}
          imgAlt="Real estate investment illustration"
        />
      </section>

      <section>
        <ServicesItem
          title="There’s something for everyone."
          description="Looking for stable and safe returns? Our fixed-income portfolio delivers consistent returns annually and is perfect for low-risk investors."
          buttonText="Create a fixed-income plan now"
          bgColor="#F6E4F0"
          img={income}
          imgAlt="Fixed income investment illustration"
        />
      </section>

      <section>
        <ServicesItem
          title="Invest toward your goals."
          description="Rise gives you the ability to choose a financial goal, whether tuition, a wedding, travel, or retirement, and put money away regularly toward them."
          buttonText="Explore our goal-based plans"
          bgColor="#FEF3EF"
          img={goal}
          imgAlt="Financial goal planning illustration"
        />
      </section>
    </div>
  );
};

export default Services;
