import React from "react";
import "./navBar.css";
function NavBar() {
    return(
        <div className={'nav'}>
            <header id="header">
                <a href="#logo" a className="logo">logo</a>
                <ul>
                    <li><a href="#about" onClick="toggle()">about</a></li>
                    <li><a href="#portfolio" onClick="toggle()">POrtfolio</a></li>
                    <li><a href="#testimonials" onClick="toggle()">testimonials</a></li>
                    <li><a href="#blog" onClick="toggle()">blog</a></li>
                    <li><a href="#contact" onClick="toggle()" className="conta">contact</a></li>
                </ul>
                <div className="toggle" onClick="toggle()"></div>
            </header>
            <section className="banner">
                <h2>Icon<br></br><span>Interiors</span></h2>
            </section>
        </div>
    )
}
export default NavBar;