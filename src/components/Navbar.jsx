import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const item = useSelector(state=>state.cart);
    // console.log(item)
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>REDUX CART</h1>
        </div>

        <div className="cart">
           <Link to={"/cart"}><ShoppingCart className='icon'/> </Link>
            <p>{item.length}</p>
            
        </div>
    </div>
  )
}

export default Navbar