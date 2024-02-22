import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
// import { MENU_IMG_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
    const {resId} = useParams();

    const resItem = useRestaurantMenu(resId);
    console.log(resItem);

    if(resItem === null) return <Shimmer />;
    
    const {name,avgRating, totalRatingsString,costForTwoMessage,cuisines,sla,areaName} = resItem?.cards[2]?.card?.card?.info;
    const {itemCards} = resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    
    return (
        <div className="w-3/6 mx-auto mt-4 p-4">
            <div className="flex items-center justify-between border-b-2 border-dotted border-black pb-8">
                <div className="res-info">
                    <h1 className="my-4 text-3xl">{name}</h1>
                    <h2 className="text-2xl">{name}</h2>
                    <p className="text-lg">{cuisines.join(",")}</p>
                    <p className="text-lg">{areaName}</p>
                </div>
                <div className="border border-black border-solid rounded-lg py-5 mt-10">
                    <h3 className="pb-3 border-b-2 border-solid border-black text-center">{avgRating}</h3>
                    <p>{totalRatingsString}</p>
                </div>
            </div>

            <h2 className="my-4 text-lg font-medium">{sla.deliveryTime} min , {costForTwoMessage}</h2>
            <h1 className="text-3xl mb-8">Recommended</h1>
            <div className="res-menu-items">
                <div className="text-lg">
                    {itemCards.map((res)=> [
                        <h1>{res?.card?.info?.name}</h1>, 
                        <p>Rs. {res?.card?.info?.price/100 || res?.card?.info?.defaultPrice/100}</p>, 
                        <p className="border-dotted border-black border-b-2 pb-7">{res?.card?.info?.description}</p>, 
                        // <img className="menu-img" src={MENU_IMG_URL+res?.card?.info?.imageId}></img>
                    ] 
                    ) }
                </div>
            </div>
        </div>
    )
}
export default RestaurantMenu;