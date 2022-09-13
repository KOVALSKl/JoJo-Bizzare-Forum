import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open, close } from '../../features/menu/menuSlice'
import "./Hamburger.css"
import Menu from "./Menu";

function Hamburger() {

    const isMenuOpen = useSelector((state) => state.menu.value);
    const dispatch = useDispatch();

    return (

        <div>
            <div className="hamburger" onClick={() => {
                (isMenuOpen) ? dispatch(close()) : dispatch(open());
            }}>
                <span className="line" style={
                    (isMenuOpen)
                        ? { opacity: 0, transition: "opacity 200ms" }
                        : { opacity: 1, transition: "opacity 200ms" }
                }></span>
                <span className="line" style={
                    (isMenuOpen)
                        ? { transform: "rotate(45deg)", top: "12px", transition: "transform 300ms" }
                        : { transform: "rotate(0deg)", transition: "transform 300ms" }
                }></span>
                <span className="line" style={
                    (isMenuOpen)
                        ? { transform: "rotate(-45deg)", top: "12px", left: "0px", transition: "top 300ms, transform 300ms" }
                        : { transform: "rotate(0deg)", top: "20px", left: "0px", transition: "top 300ms, transform 300ms" }
                }></span>
            </div>
            <Menu active={isMenuOpen} />
        </div>

    );
}

export default Hamburger;