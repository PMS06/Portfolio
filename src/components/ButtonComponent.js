import React from 'react';
import './ButtonComponent.css';

function ButtonComponent() {
    return (
        <div className="container">
             <a href="/Resume.pdf" target="_blank" className="button button--pen">
                <div className="button__wrapper">
                    <span className="button__text">Resume</span>
                </div>
                <div className="characterBox">
                    <div className="character wakeup">
                        <div className="character__face"></div>
                        <div className="charactor__face2"></div>
                    </div>
                    <div className="character ">
                        <div className="character__face"></div>
                        <div className="charactor__face2"></div>
                    </div>
                    <div className="character wakeup">
                        <div className="character__face"></div>
                        <div className="charactor__face2"></div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ButtonComponent;
