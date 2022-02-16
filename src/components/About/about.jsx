import React from "react";
import "./about.css";
function About() {
    return (
        <section className="sec" id="about">
            <div className={'left-box'}>
                <div className={'small'}>
                    <img id={'left1'} src="https://i.ibb.co/tpVFNc9/left-image1.jpg" alt="1"/>
                    <img id={'left2'} src="https://i.ibb.co/jMx8Mgx/left-image2.jpg" alt="2"/>
                </div>
                <div className={'large'}>
                    <img id={'left3'}src="https://i.ibb.co/qYWgY3j/home-13-560x564-1.jpg" alt="left3"/>
                    <img id ={'left4'} src="https://www.we-heart.com/upload-images/interiordesignsecrets1.jpg" alt=""/>
                   
                </div>

            </div>
            <div className={'right-box'}>
<h2>Why Choose Us</h2>
                <p className={'sub'}>
                    Besides great interior design, there are lots of <br></br>reasons to choose Interia. Here are some of the most <br></br>popular ones.
                </p>
                <div className={'list'}>
                    <img src="https://i.ibb.co/PrkN7HZ/team.png" alt="logo"/>
                    <div className={'titles'}>
                        <div className={'head'}>Professional Team</div>
                        <div className={'sub-head'}>Our team includes only the best <br></br>decorators and interior designers in the <br></br> industry</div>
                    </div>
  </div>
                <div className={'list'}>
                    <img src="https://i.ibb.co/nk9tMWH/unusualsvg.png" alt="logo"/>
                    <div className={'titles'}>
                        <div className={'head'}>Unusual Ideas</div>
                        <div className={'sub-head'}>Our designers generate various yet <br></br>always original ideas that will surely fit<br></br> your needs.</div>
                    </div>
                </div>
                <div className={'list'}>
                    <img src="../../design/team.svg" alt="logo"/>
                    <div className={'titles'}>
                        <div className={'head'}>Made with Respect</div>
                        <div className={'sub-head'}>All our work is built around respect to <br></br>our clients, great service, and creativity.</div>
                    </div>
                </div>
                <img id ={'right-img'}src="https://i.ibb.co/B4bS4Pr/about-bg.png" alt=""/>
            </div>
        </section>
    )
}
export default About;