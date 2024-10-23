import PropTypes from "prop-types";

const Phone = ({ Ph,handleAddToCart }) => {
  console.log(Ph)
  const {img,id,price,title}=Ph
  return (
    <div>
    
      <div className="mb-10">
        <div className="w-52 ">
          <img className="rounded-lg w-full " src={img} alt="" />
        </div>
        <h2 className="font-bold text-center  ">{title}</h2>
        <p className="text-center font-semibold">${ price}</p>
        <div className="text-center">
          <button className="px-6 py-4 bg-slate-400 text-white font-bold rounded-lg "
        onClick={()=>handleAddToCart(Ph)}
        >Add to cart</button></div>
      </div>
     
    </div>
  );
};
Phone.propTypes = {
  Ph: PropTypes.object.isRequired
}
export default Phone;