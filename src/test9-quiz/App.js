import React from "react"
import "./App.css"

import validBraces from "./quizes/quiz1"
import validStrings from "./quizes/quiz2"
import clerkVasya from "./quizes/quiz3"
import elemsFromArr from "./quizes/quiz4"

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

// quiz3

  console.log(clerkVasya([25, 25, 50])) // YES 
  console.log(clerkVasya([25, 100])) // NO
  console.log(clerkVasya([25, 25, 50, 50, 100])) // NO

// quiz4

  console.log(elemsFromArr([1,2],[1]))
  console.log(elemsFromArr([1,2,2,2,3],[2]))
  console.log(elemsFromArr([9,-5,-8,2,12,-4,3,-15,6,-14,-10,-20,-4,-13,2,-2,-8], [3,2,-5,-20,-14,9,-4,12,-2,-13,6,-15,-8,-10,-8,-4]))

  return (
    <div className="App">
      In the console
    </div>
  );
}