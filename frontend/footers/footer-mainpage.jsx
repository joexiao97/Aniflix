import React from "react";

const Footer = () => {

    return(
        <footer className="footer-mainpage">
            <div className="footer-link-icons">
                <div></div>
            </div>

            <a href="mailto:joexiao97@gmail.com" className="contact">Questions? Contact Us.</a>
            <ul>
                <li key="github">
                    <a target="_blank" href="https://github.com/joexiao97/Aniflix">GitHub</a>
                </li>
                <li key="linkedin">
                    <a target="_blank" href="https://www.linkedin.com/in/shaohua-xiao-8a5669109/">LinkedIn</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer