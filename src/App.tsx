import Navbar from "./components/Navbar/Navbar";
import Diversified from "./sections/Diversified/Diversified";
import Hero from "./sections/Hero/Hero";
import Numbers from "./sections/Numbers/Numbers";
import Riser from "./sections/Risers/Riser";
import Services from "./sections/Services/Services";
import styles from "./App.module.css";
import Transaction from "./sections/Transaction/Transaction";
import Expert from "./sections/Experts/Expert";
import Blog from "./sections/Blog/Blog";
import Community from "./sections/Community/Community";
import RiseApp from "./sections/RiseApp/RiseApp";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <main>
        <div className={styles.mainContainer}>
          <Navbar />
          <Hero />
          <Riser />
          <Diversified />
          <Numbers />
          <Services />
          <Transaction />
          <Expert />
          <Blog />
          <Community />
          <RiseApp />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default App;
