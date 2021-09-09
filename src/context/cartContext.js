import { createContext, useState } from "react";

const cartContext = createContext([]);

export const CartProvider = ({ item = [], children}) =>{
    const [ cart, setCart ] = useState(item);
    const [total, setTotal] = useState(0);
    const [isIn, setIsIn] = useState(false);
    const cartDraft = cart;

    async function addItem(item, quantity){
        const i = await isInCart(item.id);
        if (isIn===true){
            alert("no se puede agregar")
        }else{
             const productAdded = {
                 product: item,
                 quantity: quantity
             };
             cartDraft.push(productAdded);
             setCart(cartDraft);
             getTotalQuantity();
             console.log("cart en add", cart);
        }   
    };

    function getTotalQuantity() {
        let total1 = 0;
        cart.map((producto) => {
            total1 += producto.quantity
        });
        setTotal(total1);
    }

    function removeItem(itemId){
        const auxCart = [...cart];
        const cleanCart= auxCart.filter(item => item.product.id !== itemId)
        setCart(cleanCart);
        getTotalQuantity()
        console.log("Remove Item", item)
    };

    function clear(){
        setCart([]);
        setTotal(0);
    };

    async function isInCart(itemId){
       cart.map((product)=>{
        if(itemId === product.product.id){
            setIsIn(true);
        }else{
            setIsIn(false);
            }
       });
    };


    return <cartContext.Provider 
            value={{addItem, removeItem, clear, isInCart, cartSize: total, cart}} >
                {children}
    </cartContext.Provider>
};

export default cartContext;