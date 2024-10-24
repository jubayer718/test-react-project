import PropTypes from "prop-types";



const Bookmark = ({ cart,handleDelete }) => {
  console.log( cart)
  return (
    <div>
      <div className="flex items-center bg-slate-400 m-6 p-4 rounded-lg  gap-2">
        <div>
        <img className="w-24 " src={cart.img} alt="" />
        <p>{cart.title}</p>
          
        </div>
        <button onClick={()=>handleDelete(cart.id)} className="px-6 py-4 bg-black text-white font-bold rounded-lg "
        
        >Delete</button>
      </div>
    </div>
  );
};
Bookmark.propTypes = {
  cart: PropTypes.object,

  handleDelete:PropTypes.object.isRequired
}

export default Bookmark;