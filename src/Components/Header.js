import { CART_LOGO, LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () =>{
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedin} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    return (
        <div className="flex justify-between px-9 items-center h-20 bg-gray-200 mb-4 shadow-xl fixed w-full top-0 left-0 z-20">
            <div className="logo">
                <img src={LOGO_URL} className="w-22 h-20"></img>
            </div>
            <div className="nav-items">
                <ul className="flex text-lg font-serif items-center">
                    <li className="mx-4 font-bold">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="mx-4 font-bold hover:text-green-600"><Link to="/">Home</Link></li>
                    {/* <li className="mx-4"><Link to="/about">About Us</Link></li>
                    <li className="mx-4"><Link to="/contact">Contact Us</Link></li> */}
                    <div className="flex items-center relative">
                        <li className="ml-4 mr-2 font-bold hover:text-green-600"><Link to="/cart">Cart<p className="absolute top-2 right-4 font-bold text-xl text-orange-700">{cartItems.length}</p></Link></li>
                        <img src={CART_LOGO} className="w-[54px] h-[54px]"></img>
                    </div>
                    {/* <li className="mx-4"><Link to="/cart">Cart ({cartItems.length} items)</Link></li> */}
                    <button className="mx-4 font-bold" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                    {/* <li className="font-xl text-bold">{loggedin}</li> */}
                </ul>
            </div>
        </div>
    )
}
export default Header;