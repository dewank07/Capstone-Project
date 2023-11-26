import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='h-screen m-10'>
        <Layout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
