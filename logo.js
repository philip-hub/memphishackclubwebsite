let isSpinning = true;


const model = new Zdog.Illustration({
  element: "#model",
  dragRotate: true,
  onDragStart: function() {
	    isSpinning = false;
	  },
  
})

new Zdog.Box({
  addTo: model,
  width: 100,
  height: 100,
  color: '#ec3750',
  stroke:20,
  translate: { z: -18 },
  

})


new Zdog.Box({
  addTo: model,
  depth:20,
  width: 20,
  height:80,
  stroke:5,
  color: '#fff',
  translate: { z: 18, x:-20},
})

new Zdog.Box({
  addTo: model,
  width: 20,
  depth: 20,
  height: 40,
  stroke:5,
  color: '#fff',
  translate: { z: 18, y:20,x:20,},
})

 new Zdog.Box({
  addTo: model,
  width: 40,
  depth: 20,
  height: 20,
  stroke:5,
  color: '#fff',
  translate: { z: 18, x:10},
 })



 new Zdog.Box({
  addTo: model,
  depth:20,
  width: 20,
  height:80,
  stroke:5,
  color: '#fff',
  translate: { z: -54, x:10},
})

new Zdog.Box({
  addTo: model,
  width: 20,
  depth: 20,
  height: 40,
  stroke:5,
  color: '#fff',
  translate: { z: -54, y:20,x:-30,},
})

 new Zdog.Box({
  addTo: model,
  width: 40,
  depth: 20,
  height: 20,
  stroke:5,
  color: '#fff',
  translate: { z: -54, x:-20},
 })



  


  

 function animation() {
   


      
      model.rotate.y += isSpinning ? 0.03 : 0;

      model.updateRenderGraph();
      requestAnimationFrame(animation);


  
    
}





 animation()