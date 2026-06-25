import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Story from "./components/home/Story";
import Products from "./components/home/Products";
import OrderSection from "./components/home/OrderSection";
import WhatsAppButton from "./components/ui/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Products />
      <OrderSection />
      <WhatsAppButton />
    </>
  );
}

export default App;