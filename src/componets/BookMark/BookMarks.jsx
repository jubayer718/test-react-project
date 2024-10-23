import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const BookMarks = ({handleDelete, cart}) => {
  console.log(cart)
  return (
    <div>
      <h1>Bookmarks:{cart.length}</h1>

     {cart.map(pr=><Bookmark key={pr.id} cart={pr}handleDelete={handleDelete}></Bookmark>)}
    </div>
  );
};
BookMarks.propTypes = {
  cart: PropTypes.object.isRequired
}
export default BookMarks;