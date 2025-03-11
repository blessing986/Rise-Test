import Navbar from "./components/Navbar/Navbar";
import Diversified from "./sections/Diversified/Diversified";
import Hero from "./sections/Hero/Hero";
import Numbers from "./sections/Numbers/Numbers";
import Riser from "./sections/Risers/Riser";
import Services from "./sections/Services/Services";
import styles from "./App.module.css";
import Transaction from "./sections/Transaction/Transaction";
import Expert from "./sections/Experts/Expert";

const App = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <Navbar />
        <Hero />
        <Riser />
        <Diversified />
        <Numbers />
        <Services />
        <Transaction />
        <Expert />
      </main>
    </>
  );
};

export default App;
