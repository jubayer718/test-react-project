
import './App.css'
import Phones from './componets/component/Phones/phones'
import BookMarks from './componets/BookMark/BookMarks'
import { useState } from 'react'



function App() {
  const [cart, setCart] = useState([])
 
  const handleAddToCart = (ph) => {
    const isExist = cart.find(item => item.id === ph.id);
    if (isExist) {
      return alert('already exist')
    }
    const newCart = [...cart, ph]
    setCart(newCart)
  }
  const handleDelete = (id) => {
    const deleteCart= cart.filter((p) => p.id !== id);
    setCart(deleteCart)
  }

  return (
    <> 
      <div className='w-11/12 mx-auto flex justify-around '>
      <Phones handleAddToCart={handleAddToCart}></Phones>
      <BookMarks cart={cart} handleDelete={handleDelete}></BookMarks>
     </div>
      
    </>
  )
}

export default App
