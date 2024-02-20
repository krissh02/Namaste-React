import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
    // Note - the useState hook is never used in the loops or funtions
    const [listOfRes,setOfResList] = useState([]);
    const [filteredRes,setFilteredRes] = useState([]);
    const [searchRes,setSearchRes] = useState("");

    // if no dependency array then the useeffect is called every component render
    // if the dependency array is there then the useEffect is called in the intial component render
    // if the dependency array contain some vairable then the useEffect will called only when that variable is updated 
    useEffect( ()=>{
        fetchData();
        // postData("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update",{})
        // .then((data)=>console.log(data))
    },[]);

    const fetchData = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1008375&lng=72.8830352&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();
            // optionally chaining
            console.log(json);
            setOfResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // Example POST method implementation:
    // const postData = async (url = "",data={}) => {
    //     // Default options are marked with *
    //     const response = await fetch(url, {
    //         method: "POST", // *GET, POST, PUT, DELETE, etc.
    //         mode: "cors", // no-cors, *cors, same-origin
    //         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //         credentials: "same-origin", // include, *same-origin, omit
    //         headers: {
    //         "Content-Type": "application/json",
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         redirect: "follow", // manual, *follow, error
    //         referrerPolicy: "strict-origin-when-cross-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //         body: JSON.stringify(data), // body data type must match "Content-Type" header
    //     });
    //     return response.json();
    // } 
    // Conditional Rendering
    // if(listOfRes.length === 0){
    //     return <Shimmer />
    // }
    return listOfRes.length === 0 ? <Shimmer /> :  (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search" className="search-in" value={searchRes} onChange={(e)=>{
                    setSearchRes(e.target.value);
                }}></input>
                <i className="fa-solid fa-magnifying-glass search-icon" onClick={()=>{
                    console.log(searchRes);
                    const filteredCardList = listOfRes.filter((res) =>
                        // console.log(res);
                        res.info.name.toLowerCase().includes(searchRes.toLowerCase())
                )
                
                setFilteredRes(filteredCardList);
                }}></i>
                <button 
                className="top-btn" 
                onClick={() => {
                    let filteredList = listOfRes.filter(
                        (res1)=> res1.info.avgRating > 4.3
                        );
                        setFilteredRes(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {
                  filteredRes.map((res) =>(
                    <Link key={res.info.id} to={"/restaurants/"+res.info.id}><RestaurantCard resData={res}/></Link>
                  ))
                }
            </div>
        </div>
    )
}
export default Body;