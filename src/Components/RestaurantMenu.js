import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resItem = useRestaurantMenu(resId);
    console.log(resItem);
    const [showIndex,setShowIndex] = useState(0);

    if(resItem === null) return <Shimmer />;
    
    const {name,avgRating, totalRatingsString,costForTwoMessage,cuisines,sla,areaName} = resItem?.cards[2]?.card?.card?.info;
    // const {itemCards} = resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resItem?.cards[2]?.card?.card?.info);
    const categories = resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res)=> 
        res?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);
    
    return (
        <div className="w-3/6 mx-auto mt-4 p-4">
            <div className="flex items-center justify-between border-b-2 border-dotted border-black pb-8">
                <div className="res-info">
                    <h1 className="my-4 text-3xl font-bold">{name}</h1>
                    <h2 className="text-2xl">{name}</h2>
                    <p className="text-lg">{cuisines.join(",")}</p>
                    <p className="text-lg">{areaName}</p>
                </div>
                <div className="border border-black border-solid rounded-lg py-5 mt-10 bg-gray-300 font-bold">
                    <h3 className="pb-3 border-b-2 border-solid border-black text-center">{avgRating}</h3>
                    <p>{totalRatingsString}</p>
                </div>
            </div>
            <h2 className="my-4 text-lg font-medium">{sla.deliveryTime} min , {costForTwoMessage}</h2>
            {categories.map((category,index) => 
            <RestaurantCategory 
            data={category.card.card} 
            showItem={index === showIndex ? true : false}
            setShowIndex= {()=> setShowIndex(index)}
            />)}
        </div>
    )
}
export default RestaurantMenu;