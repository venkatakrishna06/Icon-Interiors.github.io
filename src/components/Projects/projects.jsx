import React from "react";
import "./projects.css";
function Projects() {
    return(
        <section className="sec work" id="portfolio">
            <div className="content">
                <div className="mxw800p">
                    <h3>Our Portfolio</h3>
                    <p>All our projects are unique and designed to last. Take a look at <br></br>our recent works to find it out for yourself..</p>
                </div>
                <div className="box">
                    <div className="image">
                        <img src="https://i.ibb.co/3dq9HL6/works1.jpg"></img>
                    </div>
                    <div className="image">
                        <img src="https://i.ibb.co/3dq9HL6/works1.jpg"></img>
                    </div>
                    <div className="image">
                        <img src="https://i.ibb.co/3dq9HL6/works1.jpg"></img>
                    </div>

                </div>
                <div className="box">
                    <div className="image">
                        <img src="https://i.ibb.co/CpL0wjN/home-06-494x400.jpg"></img>
                    </div>
                    <div className="image">
                        <img src="https://i.ibb.co/CpL0wjN/home-06-494x400.jpg"></img>
                    </div>
                    <div className="image">
                        <img src="https://i.ibb.co/CpL0wjN/home-06-494x400.jpg"></img>
                    </div>

                </div>
            </div>
        </section>
    )

}
export default Projects;