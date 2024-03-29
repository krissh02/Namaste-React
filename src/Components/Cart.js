import { useSelector,useDispatch } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../reduxStore/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleCartItem = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center relative pt-28">
            <h1 className="text-3xl font-bold text-center">Cart</h1>
            <button className="text-2xl bg-black text-white rounded-lg p-2 cursor-pointer my-2 hover:opacity-80" onClick={handleCartItem}>Clear Cart</button>
            <div className="w-6/12 mx-auto border border-gray border-solid shadow-lg m-4 p-5 text-left mb-48">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;