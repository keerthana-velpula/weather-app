import React from "react"
function TempConverter(){

    const [Ctemp, toC] = React.useState()
      const [Ftemp, toF] = React.useState(null)
    
      return(
        <div id="container">
          <div id="box1">
            <h1>Celsius</h1>
            <input
                type = "number"
                value = { Ctemp }
                onChange = {(event) => toF((event.target.value * 9 / 5) + 32).toFixed(2) } >
              </input>
          </div>
          <div id="box2">
              <h1>Fahrenheit</h1>
              <input
                type = "number" 
                value = { Ftemp } 
                onChange = {(event) => toC((event.target.value - 32) * 5 / 9).toFixed(2) } >
              </input>
              </div>
        </div>
      )
    }
    export default TempConverter;