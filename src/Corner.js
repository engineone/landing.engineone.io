import React, { Component } from 'react'


export default class Connector extends Component {
    constructor(props) {
        super(props);
        this.state = { screenWidth: 100, screenHeight: 100, parentWidth:0,parentHeight:0  };
        this.updateDimensions();
    }
    updateDimensions = () => {
        console.log("resized!")
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
    const { x,y,width,height } = this.props;
    const { screenHeight,screenWidth,parentWidth,parentHeight } = this.state;
    const pxwidth = width/100 * parentWidth;
    const pxheight = 130; //height; // /100 * screenHeight;
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


    return (
        <svg ref='child' style={{position:'relative',top:'60px'}}
            width={pxwidth+"px"} height={pxheight+"px"} viewBox={"0 0 "+pxwidth+" "+pxheight} >
            {(this.props.right)?
                <path d={`M${pxwidth-8},8 L18 8 q -10 0 -10 10 L 8 30`} 
            fill="none" stroke="#4A90E2" strokeWidth="3"></path>
            :
                <path d={`M0,8 L${pxwidth-18} 8 q 10 0 10 10 L ${pxwidth-8} 30`}
                fill="none" stroke="#4A90E2" strokeWidth="3"></path>
            }


    <g id="Icosn-upadate" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-dasharray="7" stroke-linecap="square">
        <path d={`M${(this.props.right)?8:pxwidth-8},30 L${(this.props.right)?8:pxwidth-8},${pxheight}`} id="Line-22" stroke="#4A90E2" strokeWidth="3"></path>
    </g>
<circle id="Oval-6" cx={(this.props.right)?8:pxwidth-8} cy={pxheight-8} r="8" fill="#4A90E2"></circle>
              
</svg>
    )
  }
}