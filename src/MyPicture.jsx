import "./css/Introduction.css";
import Haris from "./assets/Haris.png";

function MyPicture() {
    return (
        <div className="picture">
            <img src={Haris} alt="Haris Ali" className="HarisPic" />
        </div>
    )
}

export default MyPicture;