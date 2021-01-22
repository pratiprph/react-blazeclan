import React,{ useRef, useState,useEffect } from 'react';

function Canvas(){

  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const color_gen = ()=>{
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }

  let color = color_gen();
  console.log(color)

  const [bgcolor, setBgColor ] = useState(color)

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = `${bgcolor}`;
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    setBgColor(color)
    console.log(color)
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <div>
      <p>On mouse drag we can draw some this</p>
    <canvas
    onMouseDown={startDrawing}
    onMouseUp={finishDrawing}
    onMouseMove={draw}
    ref={canvasRef}
  />
  </div>
  )
}

// class Canvas extends Component {

       
//        color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
       
//        drawImage = (event)=>{
//            console.log(this.color)
//         const canvas = this.refs.canvas
//         const ctx = canvas.getContext("2d")
//          ctx.beginPath();
//          ctx.fillStyle = 'red'
//          ctx.rect(event.pageX, event.pageY,50,50);
//          console.log(event.pageX)
//          //ctx.stroke();
//       }

//   render(){
//     return (
//         <div>
          
//           <canvas ref="canvas" style={{width:600,height:500,border:"1px solid red"}} onClick={this.drawImage.bind(this)}/>
          
//         </div>
//       );
//   }
// }

export default Canvas;
