import { useState } from "react";
const User = (props) =>{
    const [count,setCount] = useState(0);
    const {name,location} = props;
    return (
        <div className="user">
            <h2>Count: {count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>Count Increase</button>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: 8928447816</h2>
        </div>
    )
}

export default User;