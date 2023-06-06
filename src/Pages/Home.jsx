
import ProductCard from "./../components/ProductCard";

const Home = () => {
  return (
    <>
      <main className="flex flex-wrap max-h-[calc(100vh-80px-3rem)] gap-5 overflow-scroll overflow-x-hidden  justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
    </>
  );
};

export default Home;
