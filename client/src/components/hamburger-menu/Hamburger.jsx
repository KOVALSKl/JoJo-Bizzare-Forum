import { useEffect, useState } from "react";
import "./Hamburger.css"
import Menu from "./Menu";

function Hamburger() {

    const [animate, setAnimate] = useState(false);

    return (

        <div>
            <div className="hamburger" onClick={() => {
                setAnimate(!animate)
            }}>
                <span className="line" style={
                    (animate)
                        ? { opacity: 0, transition: "opacity 200ms" }
                        : { opacity: 1, transition: "opacity 200ms" }
                }></span>
                <span className="line" style={
                    (animate)
                        ? { transform: "rotate(45deg)", top: "12px", transition: "transform 300ms" }
                        : { transform: "rotate(0deg)", transition: "transform 300ms" }
                }></span>
                <span className="line" style={
                    (animate)
                        ? { transform: "rotate(-45deg)", top: "12px", left: "0px", transition: "top 300ms, transform 300ms" }
                        : { transform: "rotate(0deg)", top: "20px", left: "0px", transition: "top 300ms, transform 300ms" }
                }></span>
            </div>
            <Menu active={animate} />
        </div>

    );
}

export default Hamburger;