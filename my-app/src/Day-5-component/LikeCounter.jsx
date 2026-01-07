import React from "react";

class LikeCounter extends React.Component{
constructor(props){
    super (props);
    this.state = {counter : 0}
}


increase=()=>{
     this.setState({counter : this.state.counter+=1})
}

    render(){
        return(
            <div>
                <h1> LikeCounter</h1>
                <h4>like : {this.state.counter}</h4>
                <button onClick={this.increase}>Like</button>
            </div>
        )
    }
}
export default LikeCounter