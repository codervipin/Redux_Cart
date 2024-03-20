import React, { useState } from "react";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const Product = ({ data }) => {
  let { id, title, description, price, thumbnail,rating} = data;
  const dispatch = useDispatch();

  const item = useSelector(state=>state.cart);
    // console.log(item)
     
  let handleClick =(id)=>{
    let match = item.filter((ele)=> ele.id === id)
    // console.log(match)
    if(match.length > 0 ){
        toast.error("Item is already in cart")
    }
    else{
        toast.success("Item Added Successfully")
        dispatch(addItem({id,title,description,price,thumbnail}))
    }
  }
  return (
    <div  className="prod">
      <div className="image">
        <img src={thumbnail} alt="" />
      </div>
      <div className="details">
        <h4>{title}</h4>
        <p>{description}</p>
        <p> Price : {price} $</p>
        <p> Rating : {rating}  ☆</p>
        <button onClick={()=> handleClick(id) }>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
