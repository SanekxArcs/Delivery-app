

const ProductCard = () => {
  return (
    <div className="flex flex-col max-w-xs gap-2 p-5 m-1 shadow-md bg-slate-200 rounded-2xl ring-2 ring-slate-500">
      <img className="w-full h-32 bg-slate-600 rounded-xl" src="" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, enim
        saepe laudantium eligendi voluptate nesciunt distinctio accusamus veniam
        error! Laborum ea veniam ex temporibus vitae sed excepturi vero quisquam
        est.
      </p>
      <button className="px-4 py-2 font-bold uppercase transition-all duration-300 hover:bg-slate-400 text-slate-800 rounded-xl ring-2 ring-slate-500">
        add to Cart
      </button>
    </div>
  );
}

export default ProductCard