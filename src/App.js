import { useState } from "react";

function App() {


  const [inpval, setinpval] = useState("");


  function butclick(eventvalue) {
    if (eventvalue === "=") {
      setinpval(eval(inpval));

    }

    else {
      if (Number.isInteger(parseInt(inpval[inpval.length - 1])) === false && Number.isInteger(parseInt(eventvalue)) === false) {
        alert("Please enter Numbers Here");
      }

      else {
        if (eventvalue === "X") {
          eventvalue = "*";
          setinpval(inpval + eventvalue);
        }
        else {
          setinpval(inpval + eventvalue);
        }

      }

    }
  }

  function backspace() {
    setinpval(inpval.slice(0, -1));
  }

  function clear() {
    setinpval("");
  }

  return (<>
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className=" card col-3 border border-dark " style={{ height: "50vh" }}>

          <div className="inputbox  ">
            <input style={{ height: "10vh" }} value={inpval} onChange={function () { }} className="form-control fs-1 form-control-lg mt-3 border border-dark" type="text" placeholder="" aria-label=".form-control-lg example" />
          </div>

          <div className="rowone d-flex justify-content-between">
            <button onClick={(e) => { butclick(e.target.value) }} value="1" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg ">1</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="2" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">2</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="3" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">3</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="+" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">+</button>
          </div>

          <div className="rowone d-flex justify-content-between mt-3">
            <button onClick={(e) => { butclick(e.target.value) }} value="4" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg">4</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="5" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">5</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="6" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">6</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="-" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">-</button>
          </div>

          <div className="rowone d-flex justify-content-between mt-3">
            <button onClick={(e) => { butclick(e.target.value) }} value="7" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg">7</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="8" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">8</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="9" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">9</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="/" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">/</button>
          </div>

          <div className="rowone d-flex justify-content-between mt-3">
            <button onClick={(e) => { butclick(e.target.value) }} value="0" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg">0</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="." style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">.</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="=" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">=</button>
            <button onClick={(e) => { butclick(e.target.value) }} value="X" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 btn-lg  ms-2">X</button>
          </div>
          <div className="rowone d-flex justify-content-between mt-3">
            <button onClick={(e) => { backspace() }} value="0" style={{ width: "20vw" }} type="button" className="btn btn-dark mt-3 btn-lg">Backspace</button>
            <button onClick={(e) => { clear() }} value="0" style={{ width: "6vw" }} type="button" className="btn btn-dark mt-3 ms-2 btn-lg">Clear</button>

          </div>


        </div>

      </div>
    </div>

  </>)
}

export default App;
