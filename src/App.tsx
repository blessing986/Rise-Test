import Navbar from "./components/Navbar/Navbar";
import Diversified from "./sections/Diversified/Diversified";
import Hero from "./sections/Hero/Hero";
import Numbers from "./sections/Numbers/Numbers";

import Riser from "./sections/Risers/Riser";
import Services from "./sections/Services";

const App = () => {
  return (
    <>
      <main className="max-w-[1440px] m-auto">
        <Navbar />
        <Hero />
        <Riser />
        <Diversified />
        <Numbers />
        <Services />
      </main>
    </>
  );
};

export default App;
