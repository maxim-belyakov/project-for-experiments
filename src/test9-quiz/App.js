import React from "react"
import "./App.css"

import validBraces from "./quiz1"
import validStrings from "./quiz2"

export default function App() {

// quiz1

  console.log(validBraces("---(++++)----"))
  console.log(validBraces(""))
  console.log(validBraces("before ( middle []) after "))
  console.log(validBraces(") ("))
  console.log(validBraces("<(   >)"))
  console.log(validBraces("(  [  <>  ()  ]  <>  )"))
  console.log(validBraces("   (      [)"))

// quiz2

  console.log(validStrings('maks', 's', 'y')) // 3
  console.log(validStrings('ukri', 's', 'k')) // 1
  console.log(validStrings('dddd', 'a', 'v')) // -1

  return (
    <div className="App">
      In the console
    </div>
  );
}