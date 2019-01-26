import React from 'react'
const Footer = class extends React.Component {
    render(){
        return(
        <footer className="footer content">
        <div className="container">
            <div className="columns">
                <div className="column is-4">
                    <div id="quicklinks">
                        <h3>
                            Quick Links
                        </h3>
                        <ul>
                            <li>
                                <a href="https://www.ieee.org">IEEE.org</a>
                            </li>
                            <li>
                                <a href="https://ieeexplore.ieee.org">IEEE Xplore Digital Library</a>
                            </li>
                            <li>
                                <a href="https://ieee-collabratec.ieee.org/">IEEE Collabratec</a>
                            </li>
                            <li>
                                <a href="http://spectrum.ieee.org/">IEEE Spectrum Online</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="column is-4">
                    <div id="social">
                        <h3>Follow us</h3>
                        <div>
                            <a href="https://www.facebook.com/ieeesbtkmce" target="_blank" rel="noopener noreferrer">
                                <span className="icon is-medium"><img src="img/icons/facebook-box.svg" alt="facebook" /></span>
                            </a>
                            <a href="https://www.twitter.com/IEEEorg" target="_blank" rel="noopener noreferrer">
                            <span className="icon is-medium"><img src="img/icons/twitter-box.svg" alt="twitter" /></span>
                            </a>
                            <a href="https://www.instagram.com/ieeeorg" target="_blank" rel="noopener noreferrer">
                            <span className="icon is-medium"><img src="img/icons/instagram.svg" alt="instagram" /></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div id="contact">
                        <h4>Address</h4>
                        <address> TKM College of Engineering,
                            <br /> Karicode, Kollam, Kerala
                            <br />pin : 691005
                        </address>
                        <hr className="my-1" />
                        <h5>Chairperson</h5>
                        <p>Harry Paul : +91 9497704887</p>
                        <h5>Counselor</h5>
                        <p> Mrs. Sunitha Beevi.K : +91 9037364538</p>
                        <h5>Webmaster</h5>
                        <p>Amal Jossy : +91 9496863169</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container " id="copy">
            <p className="m-0">©IEEE SB, TKMCE</p>
        </div>
    </footer>
        )
    }
}

export default Footer