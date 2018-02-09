import React, { Component } from 'react'


export default class Connector extends Component {
    constructor(props) {
        super(props);
        this.state = { screenWidth: 100, screenHeight: 100, parentWidth:0,parentHeight:0  };
        this.updateDimensions();
    }
    updateDimensions = () => {
        this.setState({ 
            screenWidth: window.innerWidth, 
            screenHeight: window.innerHeight,
            parentWidth: this.refs.child && this.refs.child.parentNode.clientWidth || 0, 
            parentHeight: this.refs.child && this.refs.child.parentNode.clientHeight || 0
        });
        
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

  render() {
    //const { from, to } = this.props;
    const { x,y,width,height, white } = this.props;
    const { screenHeight,screenWidth,parentWidth,parentHeight } = this.state;
    const pxwidth = width/100 * parentWidth;
    const pxheight = height; // /100 * screenHeight;
    // const x = (-from.x+to.x+to.width/2);
    // const y = from.height;
    // const width = -(to.x + to.width/2) + (from.x + from.width/2);
    // const height = to.y - (from.y + from.height);
    // get bounding boxes
    // console.log(from);

    // style={{position:'absolute',
    // top: y+"px",
    // left: x+"px"}}

    // style={{width:'100%'}}  preserveAspectRatio="none"
    let strokeColor = white ? "#fff" : "#4A90E2";


    return (
        <svg ref='child' 
            width={pxwidth+"px"} height={pxheight+"px"} viewBox={"0 0 "+pxwidth+" "+pxheight} >
            {(this.props.right)?
                <path d={`M${pxwidth-3},0 L${pxwidth-3} ${pxheight/2-10} q 0 10 -10 10 L 13 ${pxheight/2} q -10 0 -10 10 L 3 ${pxheight}`} 
            fill="none" stroke={strokeColor}  strokeWidth="4"></path>
            :
                <path d={`M3,0 L3 ${pxheight/2-10} q 0 10 10 10 L ${pxwidth-13} ${pxheight/2} q 10 0 10 10 L ${pxwidth-3} ${pxheight}`} 
            fill="none" stroke={strokeColor} strokeWidth="4"></path>
            }
        </svg>
    )
  }
}