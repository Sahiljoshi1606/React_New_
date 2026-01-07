import React from "react";
import Child from "./child";

class Parent extends React.Component{
    render(){
        return(
            <div>
                <h1>student details</h1>
           <Child Name = {"sahil"}  age = {20}/>
            </div>
           
        )
    }
}
export default Parent