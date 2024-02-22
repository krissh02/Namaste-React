import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0,
            count1:1
        }
    }

    render(){
        const {name,location} = this.props;
        const {count} = this.state;
        return (
            <div className="user">
                <h2>Count: {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count +1
                    })
                }}>Count Increase</button>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: 8928447816</h2>
            </div>
        )
    }
}
export default UserClass; 