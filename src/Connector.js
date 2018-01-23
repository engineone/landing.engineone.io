import React, { Component } from 'react'


export default class Connector extends Component {
    updateDimensions = () => {
        console.log("resized!")
        this.setState({resized:Math.random()});
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

  render() {
    const { from, to } = this.props;

    const x = (-from.x+to.x+to.width/2);
    const y = from.height;
    const width = -(to.x + to.width/2) + (from.x + from.width/2);
    const height = to.y - (from.y + from.height);
    // get bounding boxes
    console.log(from);

    return (
        <svg width={width+"px"} height={height+"px"} viewBox={"0 0 "+width+" "+height} style={{position:'absolute',
            top:y+"px",
            left: x+"px"}}>
            <path d={`M${width-3},0 L${width-3} ${height/2-20} q 0 20 -20 20 L 23 ${height/2} q -20 0 -20 20 L 3 ${height}`} fill="none" stroke="#333" strokeWidth="3"></path>
        </svg>
    )
  }
}