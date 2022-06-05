import React from 'react'
import './team.css'
import aulon from '../../assets/AULON HYSAJ.png'
import fjorin from '../../assets/FJORIN TRAGAJ.png'
import kristi from '../../assets/KRISTI HILA.png'
import bushi from '../../assets/SHYQYRI TRAGAJ.png'
import erion from '../../assets/ERION MEMA.png'

const team = () => {
    return (
        <div className="team-container" id="team">
            <div className="team-title">
                <h3>OUR TEAM</h3>
            </div>
            <div className="team-1">
                <div className="team-1-Aulon">
                    <img src={aulon} alt="AULON HYSAJ" />
                </div>
                <div className="team-1-Fjorin">
                    <img src={fjorin} alt="FJORIN TRAGAJ" />
                </div>
                <div className="team-1-Kristi">
                    <img src={kristi} alt="KRISTI HILA" />
                </div>
            </div>
            <div className="team-2">
                <div className="team-2-Bushi">
                    <img src={bushi} alt="SHYQYRI TRAGAJ" />
                </div>
                <div className="team-2-Erion">
                    <img src={erion} alt="ERION MEMA" />
                </div>
            </div>
        </div>
    )
}

export default team