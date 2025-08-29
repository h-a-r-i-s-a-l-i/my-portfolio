import "./css/Introduction.css";
import Haris from "./assets/Haris.png";


function Introduction() {
    return (
        <div className="intro">
            <div>
                <p className="me">Greetings!</p>
                <p className="me">My name is Haris Ali.</p>
                <p className="me">I'm a Mechatronics Engineer.</p>
                <p className="me">I like building things, apps, robots, circuits, or woodworks.</p>
            </div>
            <div className="picture">
                <img src={Haris} alt="Haris Ali" className="HarisPic" />
            </div>
        </div>
    )
}

export default Introduction;