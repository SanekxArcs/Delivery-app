

const Header = () => {
  return (
      <header className="flex gap-2 p-2 m-2 text-blue-100 rounded-2xl bg-slate-200 max-h-20">
        <button className="px-4 py-2 font-bold uppercase transition-all duration-300 hover:bg-slate-600 bg-slate-700 rounded-xl ring-2 ring-slate-900 text-slate-50">
          Shop
        </button>
        <button className="px-4 py-2 font-bold uppercase transition-all duration-300 hover:bg-slate-400 text-slate-800 rounded-xl ring-2 ring-slate-500">
          Shoping Cart
        </button>
      </header>
  );
}

export default Header