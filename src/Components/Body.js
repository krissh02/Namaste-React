import RestaurantCard, {withPromotedCard} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import WhatOnMind from "./WhatOnMind";
import { IMG_LOGO } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addImage } from "../reduxStore/imgSlice";

const Body = () =>{
    const dispatch = useDispatch();
    // Note - the useState hook is never used in the loops or funtions
    const [listOfRes,setOfResList] = useState([]);
    const [filteredRes,setFilteredRes] = useState([]);
    const [searchRes,setSearchRes] = useState("");
    const [mindRes, setMindRes] = useState([]);
    const onlineStatus = useOnlineStatus();
    const {setUserName} = useContext(UserContext);

    const ResPromotedCard = withPromotedCard(RestaurantCard);

    console.log(listOfRes);

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
            dispatch(addImage(json?.data?.cards[0]?.card?.card?.imageGridCards?.info));
            // setMindRes(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }

    if(onlineStatus === false) return <h1>Looks like you are offline, Please check your internet connection</h1>

    return listOfRes.length === 0 ? <Shimmer /> :  (
        <div className="body pt-28 relative">
            <div className="flex items-center justify-center mb-4 relative">

                <input type="text" placeholder="Search" className="relative w-96 py-3 border pl-4 text-base rounded-l-lg border-black border-solid placeholder:text-lg" value={searchRes} onChange={(e)=>{
                    setSearchRes(e.target.value);
                }}></input>

                <button className="py-[13.6px] px-4 absolute top-[0.35px] right-[45.7%] border bg-gray-300 rounded-r-lg border border-black border-solid" onClick={()=>{
                    const filteredList = listOfRes.filter((res)=> 
                    res.info.name.toLowerCase().includes(searchRes.toLowerCase()))
                    setFilteredRes(filteredList);
                }}><i class="fa-solid fa-magnifying-glass"></i></button>

                <div>
                    <button 
                    className="ml-14 border-solid border-black py-3 px-6 rounded-lg border mr-4 font-bold text-base hover:bg-black hover:text-white" 
                    onClick={() => {
                        let filteredList = listOfRes.filter(
                            (res1)=> res1.info.avgRating > 4.3
                            );
                            setFilteredRes(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                {/* <label>UserName: </label>
                <input className="border border-black border-solid px-2 rounded-3xl py-2 mx-3" onChange={(e)=> setUserName(e.target.value)}></input> */}
            </div>
            <div className="">
                <WhatOnMind />
            </div>
            <h1 className="mx-20 mb-4 text-2xl font-bold">Restaurants with online food delivery in Mumbai</h1>
            <div className="flex flex-wrap pl-8">
                {
                  filteredRes.map((res) =>(
                    <Link key={res.info.id} to={"/restaurants/"+res.info.id}>
                        {res.info.promoted ? <ResPromotedCard resData={res}/> : <RestaurantCard resData={res}/>}
                    </Link>
                  ))
                }
            </div>
        </div>
    )
}
export default Body;