import React from "react";
import "./Score.css";

const Score = props => (
    <div className="container">
        <div className="desc row">
            <div className="desc col">
                <p>Test your memory and see if you can pick all the characters.  You can only click on each character once.  Game ends when you click on an image more than once.</p>
            </div>
        </div>
        <div className="score row">
            <div className="score col">
                Score: {props.score}
            </div>
            <div className="top-score col">
                Top Score: {props.topScore}
            </div>
        </div>
    </div>
)

export default Score;