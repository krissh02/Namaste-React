import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import { MENU_IMG_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () =>{

    const [resItem,setResItem] = useState(null);
    // console.log(resItem?.cards[0]?.card?.card?.info.name);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json.data);
        setResItem(json?.data)
    }
    if(resItem === null) return <Shimmer />;
    const {name,avgRating, totalRatingsString,costForTwoMessage,cuisines,sla,areaName} = resItem?.cards[0]?.card?.card?.info;
    const {itemCards} = resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="res-menu">
            <div className="res-info-cont">
                <div className="res-info">
                    <h1>{name}</h1>
                    <p>{cuisines.join(",")}</p>
                    <p>{areaName}</p>
                </div>
                <div className="res-rating">
                    <h3>{avgRating}</h3>
                    <p>{totalRatingsString}</p>
                </div>
            </div>

            <h2 className="res-distance">{sla.deliveryTime} min , {costForTwoMessage}</h2>
            <h1 className="menu-recommended">Recommended</h1>
            <div className="res-menu-items">
                <div className="menu-details">
                    {itemCards.map((res)=> [
                        <h1>{res?.card?.info?.name}</h1>, 
                        <p>Rs. {res?.card?.info?.price/100}</p>, 
                        <p className="menu-content">{res?.card?.info?.description}</p>, 
                        // <img className="menu-img" src={MENU_IMG_URL+res?.card?.info?.imageId}></img>
                    ] 
                    ) }
                </div>
            </div>
        </div>
    )
}
export default RestaurantMenu;