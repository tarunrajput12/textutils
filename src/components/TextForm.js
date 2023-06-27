import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
      // console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{
      let newText = '';
      setText(newText)
      props.showAlert("Clear Text!", "success");

    }

    const handleOnChange = (event)=>{
      // console.log("On change");
      setText(event.target.value);
    }

    const handleCopy = ()=> {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy to Clipboard!", "success");

    }

    const[text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === `dark`?`white`:`black`}}>
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === `light`?`dark`:`light`}} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container mb-1" style={{color: props.mode === `dark`?`white`:`black`}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
