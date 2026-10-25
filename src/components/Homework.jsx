import { useState } from "react"

function Homework(){
    const[text,setText] = useState("Welcome To Our Website")

    const changeText = () => {
        setText("Thanks For Visiting!");
    }

    return(
        <div className="container d-flex justify-content-center align-items-center">
            <div className="text-center my-5">
        <h1 className="text-light"> {text} </h1>
        <button className="btn btn-primary mt-3" onClick={changeText}> Change The Message </button>
            </div>
        </div>
    )
}
export default Homework