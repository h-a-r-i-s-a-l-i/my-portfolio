import './css/DashBoard.css';
import Project from './Project';
import { useState } from 'react';



function DashBoard({title="Hello World", date="01/01/2025", desc="Log#1"}) {
    const [state, setState] = useState("");
    const [locked, setLocked] = useState(false);

    function myFunction() {
        setState("locked");
        setLocked(!locked);
        console.log("State changed to:", state);
    }
    
    return (
        <>
        <div
          className="project"
          onClick={() => myFunction()}
          {...(!locked
            ? {
                onMouseEnter: () => setState("locked"),
                onMouseLeave: () => setState(""),
              }
            : {})}>
            <div className="dashboard">
                <div className='spacer'>
                    <div className={`circle-1 ${locked ? "glow" : ""}`} />
                    <div className="circle-2"/>
                    <div className="circle-3"/>
                </div>
                <p className="proj-title">{title}</p>
                <p className="proj-date">{date}</p>
            </div>
            <div className={`proj-details ${state}`}>
                <p>{desc}</p>
            </div>
        </div>
        </>
    );
}

export default DashBoard;