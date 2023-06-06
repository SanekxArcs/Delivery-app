

const AsideNavigation = () => {
  return (
    <aside className="flex flex-col max-w-sm gap-5 p-5 w-96 ring-2 rounded-xl ring-slate-700 bg-slate-200">
      <h1 className="text-3xl font-black text-center uppercase border-b-2 text-slate-800 border-slate-700">
        Shops
      </h1>
      <div className="flex flex-col gap-5">
        <button className="px-4 py-2 font-bold uppercase transition-all duration-300 hover:bg-slate-600 bg-slate-700 rounded-xl ring-2 ring-slate-900 text-slate-50">
          Mc Denny
        </button>
        <button className="px-4 py-2 font-bold uppercase transition-all duration-300 hover:bg-slate-400 text-slate-800 rounded-xl ring-2 ring-slate-500">
          KFD
        </button>
        <button className="px-4 py-2 font-bold uppercase transition-all duration-300 hover:bg-slate-400 text-slate-800 rounded-xl ring-2 ring-slate-500">
          Moonbuks
        </button>
        <button className="px-4 py-2 font-bold uppercase transition-all duration-300 hover:bg-slate-400 text-slate-800 rounded-xl ring-2 ring-slate-500">
          BurnCoffe
        </button>
      </div>
    </aside>
  );
}

export default AsideNavigation