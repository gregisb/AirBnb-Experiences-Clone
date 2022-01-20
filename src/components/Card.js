import React from 'react';

import Katie from '../images/katie.png'
import Star from '../images/star.png'

const Card = () => {
    return (
        <div className="card">
            <img 
                src={Katie}
                alt="User"
                className="card--image"
            />

            <div className="card--stats">
                <img 
                    src={Star}
                    alt="Star"
                    className="card--star"
                />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>

            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>

        </div>
    );
}

export default Card;