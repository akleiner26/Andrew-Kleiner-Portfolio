import React from "react"
import "./home.css"

function Home () {
    return(
        <main className="container aboutCard mt-8">
        <section className="card mb-8 aboutMe">
            <section className="row no-gutters aboutMe">
                <section className="col-sm-12 col-md-4">
                    <img className="img-fluid bioPic align-middle col-sm-2 img-fluid height: auto d-block mx-auto"
                        src="images/home/Andrew Kleiner.JPG" alt="Andrew Kleiner"/>
                </section>
                <section className="col-md-8">
                    <section className="col-sm-12 align-middle card-body mainBio">
                        <h5 className="homeCard-title bio textShadowLight">About Me</h5>
                        <p className="homeCard-text bio"> Andrew Kleiner is a professional lighting designer and web developer
                            living in the
                            greater
                            Philadelphia area. With almost a decade of experience, he has worked for bands
                            such as The Head and the Heart, Ani Difranco, and San Fermin. Outside of touring, he has
                            done
                            large scale events such as the NBA All Star Game, and the NHL All Star Game. Andrew's web
                            development skills include experience in React, HTML, CSS, JavaScript, Web Based APIs, jQuery, MYSQL, NodeJS, MongoDB, and Express.
                            Andrew has
                            a Bachelor's Degree in Communications with a minor in music composition from
                            Tulane University.</p>
                    </section>
                </section>
            </section>
        </section>
    </main>
    )
}

export default Home;
