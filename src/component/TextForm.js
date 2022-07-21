import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was cliked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was cliked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    return (
    <div>
        <div className="container">
            <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h1>
            <div className="form-group">
            <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode==='dark'?'danger':'primary'} mx-2`} onClick={handleUpClick}>convert to uppercase</button>
            <button className={`btn btn-${props.mode==='dark'?'danger':'primary'} mx-2`} onClick={handleLoClick}>convert to lowercase</button>
        </div>
        <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
            <h1>Your Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
    </div>
  )
}
