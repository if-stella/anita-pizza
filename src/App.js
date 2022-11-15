import { useEffect, useState } from "react";
import CustomPizza from "./components/CustomPizza/CustomPizza";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader/Loader";
import Pizzacontainer from "./components/Pizzacontainer";
import Slimbanner from "./components/Slimbanner";
import Staff from "./components/Staff/Staff";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4100);
  }, []);
  return (
    <>
    {loading ? (
    <Loader />
    ) : (
    <div className="main-content">
      <Hero />
      <Pizzacontainer />
      <Slimbanner />
      <Staff />
      <CustomPizza />
      <Footer />
    </div>
    )}
    </>
  );
}

export default App;
