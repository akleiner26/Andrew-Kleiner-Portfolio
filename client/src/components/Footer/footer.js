import React from "react";
import "./footer.css"



function Footer() {
    return (
        <footer className="mt-auto fixed-bottom">
            <a target="_blank" href="https://www.linkedin.com/in/andrew-kleiner-0334b994">
            <i class="fa fa-linkedin-square fa-2x footIcn" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="https://github.com/akleiner26">
            <i class="fa fa-github-square fa-2x footIcn" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="mailto:AndrewJKleiner@gmail.com">
            <i class="fa fa-envelope fa-2x footIcn" aria-hidden="true"></i>
            </a> 
                <a target="_blank" href="https://matthewgreerdesign.squarespace.com/">
                <i class="fa fa-paint-brush fa-2x footIcn" aria-hidden="true"></i>
                </a>
        </footer>

    )
}

export default Footer