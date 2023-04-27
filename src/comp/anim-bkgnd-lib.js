/* add helper functions to the Math object*/
Math.deg2rad = function (nDeg) {
  return (nDeg / 180.0) * Math.PI;
};
Math.rad2deg = function (nRad) {
  return (nRad * 180.0) / Math.PI;
};
Math.plotX = function (xVal, nDeg, nDist) {
  return xVal + Math.cos((nDeg / 180.0) * Math.PI) * nDist;
};
Math.plotY = function (yVal, nDeg, nDist) {
  return yVal + Math.sin((nDeg / 180.0) * Math.PI) * nDist;
};
Math.isOdd = function (nVal) {
  return nVal % 2;
};
Math.roundF = function (n, d) {
  return Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
};
Math.ceilF = function (n, d) {
  return Math.ceil(n * Math.pow(10, d)) / Math.pow(10, d);
};
Math.floorF = function (n, d) {
  return Math.floor(n * Math.pow(10, d)) / Math.pow(10, d);
};

//--
export function makeCircles(arr, w, h, cnt){
  let loop = 0
  arr.splice(0, arr.length)

  function addRandomCircle(){
    arr.push({
      x: ((0 | Math.random()*(w-20)) + 10),
      y: ((0 | Math.random()*(h-20)) + 10),
      r: ((0 | Math.random()*25) + 5),
      xo: Math.floorF((Math.random() - 0.5), 2),
      yo: Math.floorF((Math.random() - 0.5), 2),       
      ro: Math.floorF(((Math.random()*0.2) - 0.1), 2)               
    })
  }
  while(loop < cnt) addRandomCircle(loop++);
}

export function moveCircles(circles, w, h){

  let help = 0
  let tol = 0.5

  let edgeL = 0 + help
  let edgeR = w - help
  let edgeT = h - help
  let edgeB = 0 + help

  circles.map(circ=>{

    circ.x += circ.xo
    if(circ.x > (edgeR + circ.r)) circ.x = (edgeL - circ.r + tol)
    else if(circ.x < (edgeL - circ.r)) circ.x = (edgeR + circ.r - tol)
    
    circ.y += circ.yo
    if(circ.y > (edgeT + circ.r)) circ.y = (edgeB - circ.r + tol)
    else if(circ.y < (edgeB - circ.r)) circ.y = (edgeT + circ.r - tol)
    
    circ.r += circ.ro
    if(circ.r > 40 || circ.r < 5) circ.ro *= -1
    return null
  })      
}
  
export function drawCircle(ctx, x=10, y=10, r=20, th=1){
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2.0*Math.PI, false);
  ctx.fill();
  ctx.stroke();    
}

//--
export function makeShapes2(arr, w, h, cnt){
  let _d2, _xo, _yo
  
  let loop = 0
  arr.splice(0, arr.length)

  function addRandomShape2(){
    
    _d2 = (0 | Math.random()*2)
    if(_d2){
      _xo = 0.8
      _yo = 0
    }
    else {
      _xo = 0
      _yo = 0.8
    }

    _d2 = (0 | Math.random()*2)
    if(_d2){
      _xo *= -1.0
      _yo *= -1.0
    }

    arr.push({
      x: ((0 | Math.random()*(w-20)) + 10),
      y: ((0 | Math.random()*(h-20)) + 10),
      r: ((0 | Math.random()*25) + 5),
      xo: _xo,
      yo: _yo,       
      ro: Math.floorF(((Math.random()*0.2) - 0.1), 2)               
    })
  }
  while(loop < cnt) addRandomShape2(loop++);
}

export function moveShapes2(shapes, w, h){

  let help = 0
  let tol = 0.5

  let edgeL = 0 + help
  let edgeR = w - help
  let edgeT = h - help
  let edgeB = 0 + help

  shapes.map(shap=>{

    shap.x += shap.xo
    if(shap.x > (edgeR + shap.r)){
       shap.x = (edgeL - shap.r + tol)
       shap.y += 150
    }
    else if(shap.x < (edgeL - shap.r)){
      shap.x = (edgeR + shap.r - tol)
      shap.y -= 150
    }
    
    shap.y += shap.yo
    if(shap.y > (edgeT + shap.r)){
      shap.y = (edgeB - shap.r + tol)
      shap.x += 150
    }
    else if(shap.y < (edgeB - shap.r)){
      shap.y = (edgeT + shap.r - tol)
      shap.x -= 150      
    }
    
    shap.r += shap.ro
    if(shap.r > 40 || shap.r < 5) shap.ro *= -1
    return null
  })      
}

export function drawSquare(ctx, x=10, y=10, r=20, th=1){
  ctx.beginPath();
  ctx.moveTo(x - 0.5*r, y - 0.5*r)
  ctx.lineTo(x + 0.5*r, y - 0.5*r)
  ctx.lineTo(x + 0.5*r, y + 0.5*r)  
  ctx.lineTo(x - 0.5*r, y + 0.5*r)
  ctx.closePath();
  ctx.fill();
  ctx.stroke();    
}

export function drawRoundRect(ctx, x, y, w, h, r, stroke, fill){
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  if(stroke)ctx.stroke();    
  if(fill)ctx.fill();    
}

export function drawBorder_SquareRectGradient(ctx, w, h, th, colors, stops){

  var grd = ctx.createLinearGradient(0, 0, th, 0);

  grd.addColorStop(stops[0], colors[0]);
  grd.addColorStop(stops[1], colors[1]);
  grd.addColorStop(stops[2], colors[2]);    
  if(stops.length > 3) grd.addColorStop(stops[3], colors[3]);    
  if(stops.length > 4) grd.addColorStop(stops[4], colors[4]);    

  ctx.fillStyle = grd;    

  drawBorderSquareSide1(ctx, th, h)
  ctx.save();
    ctx.translate(w, 0); 
    ctx.rotate(Math.deg2rad(90)); 				
    drawBorderSquareSide1(ctx, th, w)
    ctx.save();
      ctx.translate(h, 0); 
      ctx.rotate(Math.deg2rad(90)); 				
      drawBorderSquareSide1(ctx, th, h)
      ctx.save();
        ctx.translate(w, 0); 
        ctx.rotate(Math.deg2rad(90)); 				
        drawBorderSquareSide1(ctx, th, w)    
      ctx.restore();
    ctx.restore();
  ctx.restore();  
}  

function drawBorderSquareSide1(ctx, th, len){   
  ctx.beginPath();
  ctx.moveTo(0,0)
  ctx.lineTo(th,th)
  ctx.lineTo(th,len-th)    
  ctx.lineTo(0,len)
  ctx.lineTo(0,0)
  ctx.fill();    
}


export function drawBorder_RoundRectGradient(ctx, w, h, th, rad, colors, stops){

  let ratio = (rad - th) / rad

  var grd1 = ctx.createLinearGradient(0, 0, th, 0);
  var grd2 = ctx.createRadialGradient(rad, rad, 0, rad, rad, rad);

  grd1.addColorStop(stops[0], colors[0]);
  grd1.addColorStop(stops[1], colors[1]);
  grd1.addColorStop(stops[2], colors[2]);    
  if(stops.length > 3) grd1.addColorStop(stops[3], colors[3]);    
  if(stops.length > 4) grd1.addColorStop(stops[4], colors[4]);    

  grd2.addColorStop(ratio+((1-ratio)*(1-stops[0])), colors[0]);
  grd2.addColorStop(ratio+((1-ratio)*(1-stops[1])), colors[1]);
  grd2.addColorStop(ratio+((1-ratio)*(1-stops[2])), colors[2]);    
  if(stops.length > 3) grd2.addColorStop(ratio+((1-ratio)*(1-stops[3])), colors[3]);    
  if(stops.length > 4) grd2.addColorStop(ratio+((1-ratio)*(1-stops[4])), colors[4]);
        
  drawBorderSquareSide2(ctx, grd1, th, rad, h)
  drawBorderRoundCorner2(ctx, grd2, th, rad)    

  ctx.save();
    ctx.translate(w, 0); 
    ctx.rotate(Math.deg2rad(90)); 				
    drawBorderSquareSide2(ctx, grd1, th, rad, w)      
    drawBorderRoundCorner2(ctx, grd2, th, rad)          
    ctx.save();
      ctx.translate(h, 0); 
      ctx.rotate(Math.deg2rad(90)); 				
      drawBorderSquareSide2(ctx, grd1, th, rad, h)        
      drawBorderRoundCorner2(ctx, grd2, th, rad)    
      ctx.save();
        ctx.translate(w, 0); 
        ctx.rotate(Math.deg2rad(90)); 				
        drawBorderSquareSide2(ctx, grd1, th, rad, w)          
        drawBorderRoundCorner2(ctx, grd2, th, rad)    
      ctx.restore();
    ctx.restore();
  ctx.restore();  
}  


function drawBorderRoundCorner2(ctx, gr, th, rad){
  ctx.fillStyle = gr;    
  ctx.lineWidth=3;
  ctx.beginPath();
  ctx.moveTo(th, rad);
  ctx.arc(rad, rad, rad, Math.deg2rad(180), Math.deg2rad(270), false);
  ctx.lineTo(rad, th);    
  ctx.arc(rad, rad, rad-th, Math.deg2rad(270), Math.deg2rad(180), true);    
  ctx.closePath(); 
  ctx.fill();    
}

function drawBorderSquareSide2(ctx, gr, th, rad, len){ 
  ctx.fillStyle = gr;    
  ctx.beginPath();
  ctx.moveTo(0,rad)
  ctx.lineTo(th,rad)
  ctx.lineTo(th,len-rad)    
  ctx.lineTo(0,len-rad)
  ctx.lineTo(0,0)
  ctx.fill();      
}
