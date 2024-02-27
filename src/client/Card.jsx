import React from 'react';

function Card({ st, title, cardText, linkto }) {
    return (
        <div className={`container zoom-effect cardback`}>
            <div className={`card ${st}`}>
                <div className="card-body">
                    <h4 className="card-title" style={{ backgroundImage: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{title}</h4>
                    <p className="card-text">{cardText}</p>
                    <a href={`${linkto}`} className="btn btn-primary">Demo</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
