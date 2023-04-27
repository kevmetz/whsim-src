import React, {useState, useEffect, useRef} from 'react'
import {makeShapes2, moveShapes2, drawSquare} from './anim-bkgnd-lib'

const AnimBkgndCanvas = ({sizer, trigger, anim, stroke="#444444FF", thick="5", fill="#d5d5d566", bkgnd="#FFFFFF00", count="10"}) => {

  const [drawWidth, setDrawWidth] = useState(-1)
  const [drawHeight, setDrawHeight] = useState(-1)
  const [shapes, setShapes] = useState([])
  const [initIsDone, setInitIsDone] = useState(false)

  const timerRef = useRef(null);
  const canvRef = useRef(null);
  
  useEffect(() => {
    function resizeCanvas(){
       let x = document.getElementById(sizer)
       let r = x.getBoundingClientRect()
       setDrawWidth(r.width);
       setDrawHeight(r.height);   
    }    
    resizeCanvas() 
    window.addEventListener("pageshow", resizeCanvas)
    window.addEventListener("resize", resizeCanvas)
    return ()=>{
      window.removeEventListener("pageshow", resizeCanvas)      
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [drawWidth, drawHeight, sizer, trigger]);

  useEffect(() => {  

    if(!initIsDone){
      let arr = []
      let x = document.getElementById(sizer)
      let r = x.getBoundingClientRect()
      makeShapes2(arr, r.width, r.height, count)
      setShapes([...arr])
      setInitIsDone(true)
    }  
    runShapes()

    //--
    function runShapes() {
      clearTimeout(timerRef.current);
      if(anim) moveShapes2(shapes, drawWidth, drawHeight)                 
      drawCanvas()      
      if(anim) timerRef.current = setTimeout(()=>runShapes(), 33);
    }
    //--
    function drawCanvas(){
      let ctx = canvRef.current.getContext('2d')  
      ctx.clearRect(0, 0, drawWidth, drawHeight);
      ctx.fillStyle=bkgnd
      ctx.fillRect(0, 0, drawWidth, drawHeight); 
      ctx.fillStyle=fill
      ctx.strokeStyle=stroke
      ctx.lineWidth=thick
      ctx.save();
        //shapes.map(c=>drawCircle(ctx, c.x, c.y, c.r))
        shapes.map(c=>drawSquare(ctx, c.x, c.y, c.r))
      ctx.restore();
    }
    //--
    return ()=>{ clearTimeout(timerRef.current) }
  }, [drawWidth, drawHeight, anim, sizer, count, shapes, bkgnd, fill, stroke, thick, initIsDone])
  
 
  /*cant use 100% on the canvas tag it only accepts pixels*/
  /*when no width or height default is 300 x 150*/
  return (   
      <canvas ref={canvRef} width={drawWidth} height={drawHeight}/>    
  )
}

export default AnimBkgndCanvas