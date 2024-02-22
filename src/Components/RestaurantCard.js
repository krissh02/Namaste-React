import {CDN_URL} from "../utils/constant";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,areaName} = resData?.info;

    return (
        <div className=" border-solid border-black mx-8 p-4 mt-1 w-96 rounded-2xl hover:border h-5/6 text-xl">
            <img className="w-full h-4/6 rounded-2xl" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="ml-1 my-2">{name}</h3>
            <div className="flex items-center ml-1 mb-1">
                <i className="fa-solid fa-star star-icon"></i>
                <h3 className="res-rating">{avgRating}</h3>
                {/* <h3 className="delivery-time">{resData.info.sla.slaString}</h3> */}
            </div>
            <h3 className="ml-1 mb-1">{cuisines.join(", ")}</h3>
            <h3 className="ml-1">{areaName}</h3>
        </div>
    )
}
export default RestaurantCard;