import React from "react";
import "./Testimonilas.css";
function Testimonials() {
    return(
        <div className="testimonials" id={'testimonials'}>
            <div className="box">
                <div className={'line'}></div>
                <div className="content">
                    <h3>Jane Williams</h3>
                </div>

                <div className="content">
                    <p>I chose Icon Interiors because of their knowledge, experience and attention to detail that has proven invaluable to me in creating a superior finished project, which attracts more clients to my shop..</p>

                </div>
            </div>
            <div className="box">
                <div className={'line'}></div>
                <div className="content">
                    <h3>Peter Smith</h3>
                </div>

                <div className="content">
                    <p>This agency was highly recommended to me. The sensitivity, knowledge, vision and ultimate execution this firm brought to the table was tremendous. They have enormously talented designers..</p>

                </div>
            </div>
            <div className="box">
                <div className={'line'}></div>
                <div className="content">
                    <h3>Ravi Kumar</h3>
                </div>

                <div className="content">
                    <p>Interia designed my home from top to bottom, I still appreciate their work. They designed built-in cabinetry that works perfectly. They are the most reliable designers I’ve ever met.</p>

                </div>
            </div>
        </div>
    )
}
export default Testimonials;