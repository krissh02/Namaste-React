import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
    // Note - the useState hook is never used in the loops or funtions
    const [listOfRes,setOfResList] = useState([]);
    const [filteredRes,setFilteredRes] = useState([]);
    const [searchRes,setSearchRes] = useState("");
    const onlineStatus = useOnlineStatus();

    // if no dependency array then the useeffect is called every component render
    // if the dependency array is there then the useEffect is called in the intial component render
    // if the dependency array contain some vairable then the useEffect will called only when that variable is updated 
    useEffect( ()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1008375&lng=72.8830352&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();
            // optionally chaining
            console.log(json);
            setOfResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(onlineStatus === false) return <h1>Looks like you are offline, Please check your internet connection</h1>

    return listOfRes.length === 0 ? <Shimmer /> :  (
        <div className="body">
            <div className="flex items-center justify-center mb-4 relative">
                <input type="text" placeholder="Search" className="py-3 border pl-7 pr-12 rounded-3xl border-black border-solid" value={searchRes} onChange={(e)=>{
                    setSearchRes(e.target.value);
                }}></input>
                <button className="p-3 absolute top-0 right-100" onClick={()=>{
                    const filteredList = listOfRes.filter((res)=> 
                    res.info.name.toLowerCase().includes(searchRes.toLowerCase()))
                    setFilteredRes(filteredList);
                }}><i class="fa-solid fa-magnifying-glass"></i></button>
                <button 
                className="ml-5 border-solid border-black py-3 px-6 rounded-3xl border" 
                onClick={() => {
                    let filteredList = listOfRes.filter(
                        (res1)=> res1.info.avgRating > 4.3
                        );
                        setFilteredRes(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap pl-8">
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