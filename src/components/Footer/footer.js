import React from "react";
import "./footer.css"



function Footer() {
    return (
        <footer className="mt-auto fixed-bottom">
            <a target="_blank" href="https://www.linkedin.com/in/andrew-kleiner-0334b994">
                <img className="footerImg text-center" src="images/footer/linkdin.png" alt="Link to Andrew Kleiner's Linkdin" />
            </a>
            <a target="_blank" href="https://github.com/akleiner26">
                <img className="footerImg text-center" src="images/footer/github.png" alt="link to Andrew Kleiner's GitHub"/>
            </a>
            <h6 className="footerText mt-2 mb-1">Email:   
                <a target="_blank" href="mailto:AndrewJKleiner@gmail.com">  AndrewJKleiner@gmail.com</a>
            </h6>
            <h6 className="footerText credit">Background Art by:  
                <a target="_blank" href="https://matthewgreerdesign.squarespace.com/">  Matthew Greer</a>
            </h6>
        </footer>

    )
}

export default Footer