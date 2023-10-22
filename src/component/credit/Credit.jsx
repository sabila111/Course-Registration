

const Credit = ({ credits, handleClick }) => {

   

    const { name, image, details, price, credit,  } = credits
    return (
        <div className="px-4 py-5 w-80 rounded-lg bg-base-100 shadow-xl mt-5">
  <figure className=" py-5">
    <img src={image} alt="Shoes" className="rounded-lg h-36 w-72" />
  </figure>
  <div className=" items-center text-center">
    <h2 className="card-title py-3">{name}</h2>
    <p className="text-slate-500">{details}</p>
    <div className=" flex justify-between gap-5 py-3">
        <p>Price: {price}</p>
        <p>Credit: {credit}</p>
    </div>
    <div className=" w-full">
      <button onClick={() => handleClick(credits)} className="w-full bg-blue-800 px-4 py-3 rounded-lg text-white font-bold">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Credit;