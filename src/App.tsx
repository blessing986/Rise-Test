import Navbar from "./components/Navbar/Navbar";
import Diversified from "./sections/Diversified/Diversified";
import Hero from "./sections/Hero/Hero";

import Riser from "./sections/Risers/Riser";

const App = () => {
  return (
    <>
      <main className="max-w-[1440px] m-auto">
        <Navbar />
        <Hero />
        <Riser />
        <Diversified />
      </main>
    </>
  );
};

export default App;
