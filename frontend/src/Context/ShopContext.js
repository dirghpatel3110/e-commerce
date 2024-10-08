import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

let cart={}
const getDefaultCart = () => {
    for (let index = 0; index < 300 +1 ; index++) {
        cart[index] = 0;     
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const[all_product,setAll_Product] = useState([]);
    const [cartItem,setCartItem] = useState(getDefaultCart);

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-Data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:""
            })
            .then((response)=>response.json())  
            .then((data)=>setCartItem(data));
        }
    },[])
    
    const addToCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-Data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            }) 
            .then((response)=>response.json())  
            .then((data)=>console.log(data))    
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-Data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            }) 
            .then((response)=>response.json())  
            .then((data)=>console.log(data))    
        }
    }
    

    const getTotalAmount = () => {
        let totalAmout = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmout += itemInfo.new_price * cartItem[item];
            }    
        }
        return totalAmout;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItem += cartItem[item];
            }
        }
       return totalItem; 
    }

    const contextValue = {getTotalAmount,all_product,cartItem,addToCart,removeFromCart,getTotalCartItems};
  
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}   
   
export default ShopContextProvider; 