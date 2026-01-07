import React from "react";

class Child extends React.Component{
    render(){
        return(
            <p>My name is {this.props.Name} and my age is {this.props.age}</p>
        )
    }
}
export default Child