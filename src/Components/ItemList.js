import {addItem} from "../reduxStore/cartSlice"; 
import { useDispatch } from "react-redux";

const ItemList = ({items}) =>{
    // console.log(items);
    const dispatch = useDispatch();
    
    const handleCartItem = (res) =>{
        dispatch(addItem(res));
    }
    return (
        <div>
            {
                items.map((res) => 
                <div className="border-b-2 border-gray-300 border-dotted text-lg flex justify-between items-center">
                    <div className="mt-8">
                        <h1 className="pl-1 font-bold inline">{res?.card?.info.name}</h1>
                        <h1 className="text-sm inline ml-2">{res?.card?.info.isVeg ? "🟢" : "🔴"}</h1>
                        <p className="pl-1 mb-4">{res?.card?.info.price/100 || res?.card?.info.defaultPrice/100}</p>
                        <p className="pl-1 mb-6 text-gray-400 text-base">{res?.card?.info.description}</p>
                    </div>
                    <div className="relative">
                        <img className="w-[118] h-[96] rounded-lg object-cover object-center" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${res?.card?.info.imageId}`}></img>
                        <button className="px-6 py-1 rounded-lg text-green-500 bg-white border-none absolute top-[75px] left-3 shadow-lg font-bold cursor-pointer hover:bg-green-600 hover:text-white" onClick={() => handleCartItem(res)}>Add+</button>
                    </div>
                </div>
            )
            }
        </div>
    )
}
export default ItemList;