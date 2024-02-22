import User from "./User";
import UserClass from "./UserClass";
const About = () =>{
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <User name={"Krishna Sabat (Function)"} location={"Sakinaka"}/>
            <UserClass name={"Krishna Sabat (Class)"} location={"Sakinaka (Class)"}/>
        </div>
    )
}
export default About;