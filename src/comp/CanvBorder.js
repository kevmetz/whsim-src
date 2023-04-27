import {useEffect, useState, useRef} from 'react'
import {drawBorder_SquareRectGradient, drawBorder_RoundRectGradient} from './anim-bkgnd-lib'

const CanvBorder = ({sizer, type="square-rect", radius=35, thick=15, stops=[0, 0.2, 0.6, 0.9, 1],
                    colors=["#952e2e","#932d2d","#bc946b","#932d2d","#952e2e"]}) => {

  const [mainWidth, setMainWidth] = useState(0);  
  const [mainHeight, setMainHeight] = useState(0);    
  
  const canvRef = useRef(null)

  useEffect(() => {
    function resizeCanvas(){
       let x = document.getElementById(sizer)
       let r = x.getBoundingClientRect()
       setMainWidth(r.width);
       setMainHeight(r.height);   
    }    
    resizeCanvas() 
    window.addEventListener("resize", resizeCanvas)
    return ()=>{window.removeEventListener("resize", resizeCanvas)}
  }, [mainWidth, mainHeight, sizer]);

  useEffect(() => { 
    function drawCanvas(cvs){
      let ctx = cvs.getContext('2d')
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      if(type === "round-rect")
        drawBorder_RoundRectGradient(ctx, cvs.width, cvs.height, thick, radius, colors, stops)
      else if(type === "square-rect")
        drawBorder_SquareRectGradient(ctx, cvs.width, cvs.height, thick, colors, stops)
    }
  
    drawCanvas(canvRef.current) 
  }, [mainWidth, mainHeight, thick, radius, colors, stops, type]);
 
  return (
    <canvas ref={canvRef} width={mainWidth} height={mainHeight} />      
  ) 
}

export default CanvBorder

