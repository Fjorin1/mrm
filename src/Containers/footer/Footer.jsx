import React from 'react'
import './footer.css'
import instagram from '../../assets/Instagram.svg'
import twitter from '../../assets/Twitter.svg'
const footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-1">
                <p>Terms and Conditions</p>
            </div>
            <div className="footer-2">
                <p>© All Rights Reserved RoyalMermaid 2022</p>
            </div>
            <div className="footer-3">
                <div className="footer-31">
                    <p>Find us on</p>
                </div>
                <div className="footer-32">
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                </div>
            </div>
        </div>
    )
}

export default footer