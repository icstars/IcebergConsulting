import Contacts from "../pages/contacts";
import Location from "../pages/location";
import Resources from "../pages/resources";

function BodyContent() {
    if (index == activeIndex) {
        return (
            <div className="body-content" style={{backgroundColor: color}}>
                <h1>I'm div {index}</h1>
            </div>
        )
    }
    else {
        return (
            <></>
        )
    }



}