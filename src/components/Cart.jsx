import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem} from "../redux/slices/cartSlice";
import toast from "react-hot-toast";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  // console.log(items)
  let dispatch = useDispatch()
  // console.log(items.map((ele)=> ele.id))

  let total = items.reduce((acc,curr)=> acc + curr.price,0);
  // console.log(total)   
  const handleClick =(id)=>{
    dispatch(removeItem({id}));
    toast.success("Item deleted successfully")
  }
  return (
    <>
      <section className="cart-container">
        <div className="cart-items">
          <h2>Cart - Items</h2>
          <div className="items">
            {items.map((ele) => {
              return (
                <div className="incart" key={ele.id}>
                  <div className="image">
                    <img src={ele.thumbnail} />
                  </div>
                  <div className="data">
                    <h4>{ele.title}</h4>
                    {/* <p>{ele.description}</p> */}
                    <p>$ {ele.price}</p>
                  </div>
                  {/* <div className="quantity">
                    <button
                      disabled={quant === 1}
                      onClick={() => setQuant((pre) => pre - 1)}
                      className="decre"
                    >
                      -
                    </button>
                    <p>{quant}</p>

                    <button onClick={() => setQuant((pre) => pre + 1)} 
                    className="incre">
                      +
                    </button>
                  </div> */}
                  <div className="remove">
                    <button onClick={()=> handleClick(ele.id)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="total">
            <h2>Total = $ {total}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
