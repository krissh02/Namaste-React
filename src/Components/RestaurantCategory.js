import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItem,setShowIndex}) =>{
    const handleClick = () =>{
        // setShowItem(!showItem);
        setShowIndex();
        
    }
    return (
        <div className="w-full border my-4 shadow-lg p-3">
            <div className="flex justify-between" onClick={handleClick}>
                <span className="text-2xl font-bold">{data.title} ({data.itemCards.length})</span>
                <span className="text-2xl">⬇️</span>
            </div>
            {showItem && <ItemList items={data?.itemCards}/>}
        </div>
    )

}

export default RestaurantCategory;