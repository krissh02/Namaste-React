import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between px-9 items-center h-20 bg-gray-100 mb-4 shadow-lg">
            <div className="logo">
                <img src={LOGO_URL} className="w-22 h-20"></img>
            </div>
            <div className="nav-items">
                <ul className="flex text-xl font-serif">
                    <li className="mx-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="mx-4"><Link to="/">Home</Link></li>
                    <li className="mx-4"><Link to="/about">About Us</Link></li>
                    <li className="mx-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="mx-4">Cart</li>
                    <button className="mx-4" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;