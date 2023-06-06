import Home from "./Pages/Home";
import AsideNavigation from "./components/AsideNavigation";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <div className="grid grid-rows-[minmax(0, 80px), minmax(0, 1fr)] max-h-screen bg-slate-700 text-slate-950">
        <Header />
        <section className="flex gap-5 p-5 m-2 bg-slate-100 rounded-2xl">
          <AsideNavigation />
          <Home />
        </section>
      </div>
    </>
  );
}
