import './css/DashBoard.css';
import { useState } from 'react';
import sprayinatorImg from './assets/Sprayinator.jpg';
import avoider3000Img from './assets/Avoider3000.jpg';

function ProjHero({ title = "Hello World", date = "01/01/2025", onClick, selected }) {
    return (
        <div className={`proj-select ${selected ? "current" : ""}`} onClick={onClick}>
            <div className='spacer'>
                <div className={`circle-1 ${selected ? "glow" : ""}`} />
                <div className="circle-2" />
                <div className="circle-3" />
            </div>
            <p className="proj-title">{title}</p>
        </div>
    );
}

function Sprayinator({ selected }) {
    return (
        <div className={`proj-2 ${selected ? "expand" : ""}`}>
            <div className="spryinatorimg">
                <img src={sprayinatorImg} alt="Image of Sprayinator" />
            </div>
            <div className="components">
                <h3><u>Components</u></h3>
                <ul>
                    <li>STM32-F429ZI Board</li>
                    <li>3D-Printed Chassis</li>
                    <li>Sound Sensor</li>
                    <li>DC Motor</li>
                    <li>100Ω Resistor</li>
                </ul>
            </div>
            <div className="p2-info">
                <h3><u>Details</u></h3>
                <div>The Spray-i-Nator is an ingenious system to spray water using sound. Applications include perfume diffusion, hand sanitization or a clever prank for friends. It utilizes a 3D printed Chassis, holding a high-torque DC motor, a pressable spray-bottle, and a motor driver connected to a sound detector circuit utilizing a STM32F board for implementing the control algorithm. </div>
            </div>
        </div>
    );
}

function Avoider3000({ selected }) {
    return (
        <div className={`proj-2 ${selected ? "expand" : ""}`}>
            <div className="spryinatorimg">
                <img src={avoider3000Img} alt="Image of Sprayinator" />
            </div>
            <div className="components">
                <h3><u>Components</u></h3>
                <ul>
                    <li>Arduino MEGA2560 Board</li>
                    <li>Hand-Crafted Chassis</li>
                    <li>Ultrasonic Sensor</li>
                    <li>DC Motor</li>
                    <li>Micro-Servo</li>
                    <li>Transistors</li>
                    <li>Jumper Wires</li>
                    <li>9V Battery</li>
                </ul>
            </div>
            <div className="p2-info">
                <h3><u>Details</u></h3>
                <div>
                    <p>Self-defending robot designed to avoid projectiles and navigate dangerous obstacles.</p>
                    <p>The Avoider 3000 was designed to avoid any obstacles or projectiles thrown towards it. Its sleek design uses one ultrasonic sensor, as its 'eyes' attached to a micro-servo as its 'neck'. It uses an Aruduino MEGA2650 as its 'brain'.It can go anywhere without colliding with anything!</p>
                </div>
            </div>
        </div>
    )
}

function DashBoard() {
    const [selected, setSelected] = useState("Hello World")
    return (
        <>
            <h2 className="title">Projects</h2>
            <div className="Total-dashboard">
                <div className="project-buttons">
                    <ProjHero title="Operation: Sprayinator" onClick={() => setSelected("Operation Sprayinator")} selected={selected === "Operation Sprayinator"} />
                    <ProjHero title="The Avoider 3000" onClick={() => setSelected("The Avoider 3000")} selected={selected === "The Avoider 3000"} />
                    <ProjHero title="NutriScan AI" onClick={() => setSelected("NutriScan AI")} selected={selected === "NutriScan AI"} />
                </div>
                <div className="proj-info">
                    <div className="selected-info">
                        {selected === "Operation Sprayinator" && (
                            <Sprayinator selected={selected === "Operation Sprayinator"} />
                        )}
                        {selected === "The Avoider 3000" && (
                            <Avoider3000 selected={selected === "The Avoider 3000"} />
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}

export default DashBoard;