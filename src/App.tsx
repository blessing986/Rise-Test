import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <>
      <main className="max-w-[1440px] m-auto">
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default App;
