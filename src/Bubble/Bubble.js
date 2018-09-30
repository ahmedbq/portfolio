import React from 'react';
import './Bubble.css';

const Bubble = (props) => {
    return (
        <span className="bubble">
            <div className="dp">
                {props.name}
                <br />
                {props.linkURL}
            </div>
        </span>
    );
}

export default Bubble;