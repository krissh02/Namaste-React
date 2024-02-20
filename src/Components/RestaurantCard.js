import {CDN_URL} from "../utils/constant";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,areaName} = resData?.info;

    return (
        <div className="res-card">
            <img className="food-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="food-name">{name}</h3>
            <div className="res-details">
                <i className="fa-solid fa-star star-icon"></i>
                <h3 className="res-rating">{avgRating}</h3>
                {/* <h3 className="delivery-time">{resData.info.sla.slaString}</h3> */}
            </div>
            <h3 className="res-cusine">{cuisines.join(", ")}</h3>
            <h3 className="res-place">{areaName}</h3>
        </div>
    )
}
export default RestaurantCard;