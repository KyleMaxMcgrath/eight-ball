import React, {useState} from "react";
import "./EightBall.css"

const EightBall = ({answers}) => {
    let [color, setColor] = useState("black");
    let [text, setText] = useState("Think of a Question");
    let [redCount, setRedCount] = useState(0);
    let [greenCount, setGreenCount] = useState(0);
    let [goldenrodCount, setGoldenrodCount] = useState(0);
    const chooseMessage = () => {
        let i = Math.floor(Math.random()*answers.length);
        let c = answers[i].color;
        setText(answers[i].msg);
        setColor(c);
        if(c === "red")
            setRedCount(redCount + 1)
        else if(c === "green")
            setGreenCount(greenCount + 1)
        else if(c === "goldenrod")
            setGoldenrodCount(goldenrodCount + 1)
    };
    const reset = () => {
        setText("Think of a Question");
        setColor("black");
        setRedCount(0)
        setGreenCount(0)
        setGoldenrodCount(0)
    };
    
    return (
        <>
            <div className="EightBall" onClick={chooseMessage}  style={{backgroundColor: color}}>
                <div className="EightBall-text">
                    {text}
                </div>
            </div>
            <button onClick={reset} className="EightBall-reset">
                Reset
            </button>
            <br></br>
            <div className="EightBall-counts">
                Red: {redCount}<nbsp> </nbsp>
                Green: {greenCount}<nbsp> </nbsp>
                Goldenrod: {goldenrodCount}<nbsp> </nbsp>
            </div>
        </>
    );
}

export default EightBall;