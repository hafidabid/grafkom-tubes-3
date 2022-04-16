let points = [
     // left column front
     0,   0,  0,
     0, 150,  0,
     30,   0,  0,
     0, 150,  0,
     30, 150,  0,
     30,   0,  0,

     // top rung front
     30,   0,  0,
     30,  30,  0,
     100,   0,  0,
     30,  30,  0,
     100,  30,  0,
     100,   0,  0,

     // middle rung front
     

     // left column back
       0,   0,  30,
      30,   0,  30,
       0, 150,  30,
       0, 150,  30,
      30,   0,  30,
      30, 150,  30,

     // top rung back
      30,   0,  30,
     100,   0,  30,
      30,  30,  30,
      30,  30,  30,
     100,   0,  30,
     100,  30,  30,

     // middle rung back
      30,  60,  30,
      67,  60,  30,
      30,  90,  30,
      30,  90,  30,
      67,  60,  30,
      67,  90,  30,

     // top
       0,   0,   0,
     100,   0,   0,
     100,   0,  30,
       0,   0,   0,
     100,   0,  30,
       0,   0,  30,

     // top rung right
     100,   0,   0,
     100,  30,   0,
     100,  30,  30,
     100,   0,   0,
     100,  30,  30,
     100,   0,  30,

     // under top rung
     30,   30,   0,
     30,   30,  30,
     100,  30,  30,
     30,   30,   0,
     100,  30,  30,
     100,  30,   0,

     // between top rung and middle
     30,   30,   0,
     30,   60,  30,
     30,   30,  30,
     30,   30,   0,
     30,   60,   0,
     30,   60,  30,

     // top of middle rung
     30,   60,   0,
     67,   60,  30,
     30,   60,  30,
     30,   60,   0,
     67,   60,   0,
     67,   60,  30,

     // right of middle rung
     67,   60,   0,
     67,   90,  30,
     67,   60,  30,
     67,   60,   0,
     67,   90,   0,
     67,   90,  30,

     // bottom of middle rung.
     30,   90,   0,
     30,   90,  30,
     67,   90,  30,
     30,   90,   0,
     67,   90,  30,
     67,   90,   0,

     // right of bottom
     30,   90,   0,
     30,  150,  30,
     30,   90,  30,
     30,   90,   0,
     30,  150,   0,
     30,  150,  30,

     // bottom
     0,   150,   0,
     0,   150,  30,
     30,  150,  30,
     0,   150,   0,
     30,  150,  30,
     30,  150,   0,

     // left side
     0,   0,   0,
     0,   0,  30,
     0, 150,  30,
     0,   0,   0,
     0, 150,  30,
     0, 150,   0
]

let colors = [
      // left column front
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,

        // top rung front
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,

        // middle rung front
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,
      200,  70, 120,

        // left column back
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,

        // top rung back
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,

        // middle rung back
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,
      80, 70, 200,

        // top
      70, 200, 210,
      70, 200, 210,
      70, 200, 210,
      70, 200, 210,
      70, 200, 210,
      70, 200, 210,

        // top rung right
      200, 200, 70,
      200, 200, 70,
      200, 200, 70,
      200, 200, 70,
      200, 200, 70,
      200, 200, 70,

        // under top rung
      210, 100, 70,
      210, 100, 70,
      210, 100, 70,
      210, 100, 70,
      210, 100, 70,
      210, 100, 70,

        // between top rung and middle
      210, 160, 70,
      210, 160, 70,
      210, 160, 70,
      210, 160, 70,
      210, 160, 70,
      210, 160, 70,

        // top of middle rung
      70, 180, 210,
      70, 180, 210,
      70, 180, 210,
      70, 180, 210,
      70, 180, 210,
      70, 180, 210,

        // right of middle rung
      100, 70, 210,
      100, 70, 210,
      100, 70, 210,
      100, 70, 210,
      100, 70, 210,
      100, 70, 210,

        // bottom of middle rung.
      76, 210, 100,
      76, 210, 100,
      76, 210, 100,
      76, 210, 100,
      76, 210, 100,
      76, 210, 100,

        // right of bottom
      140, 210, 80,
      140, 210, 80,
      140, 210, 80,
      140, 210, 80,
      140, 210, 80,
      140, 210, 80,

        // bottom
      90, 130, 110,
      90, 130, 110,
      90, 130, 110,
      90, 130, 110,
      90, 130, 110,
      90, 130, 110,

        // left side
      160, 160, 220,
      160, 160, 220,
      160, 160, 220,
      160, 160, 220,
      160, 160, 220,
      160, 160, 220
]

let normals = [
   // left column front
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,

   // top rung front
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,

   // middle rung front
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,
   0, 0, 1,

   // left column back
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,

   // top rung back
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,

   // middle rung back
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,
   0, 0, -1,

   // top
   0, 1, 0,
   0, 1, 0,
   0, 1, 0,
   0, 1, 0,
   0, 1, 0,
   0, 1, 0,

   // top rung right
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,

   // under top rung
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,

   // between top rung and middle
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,

   // top of middle rung
   0, 1, 0,
   0, 1, 0,
   0, 1, 0,
   0, 1, 0,
   0, 1, 0,
   0, 1, 0,

   // right of middle rung
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,

   // bottom of middle rung.
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,

   // right of bottom
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,
   1, 0, 0,

   // bottom
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,
   0, -1, 0,

   // left side
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0,
   -1, 0, 0
]

let uniColor = [0.1, 0.76666, 0.8, 1]


const readfile = ()=> {
  var file = document.getElementById("inputFile").files[0]
  var reader = new FileReader();
  reader.onload = function(e){
      const data = JSON.parse(e.target.result)
      points = data.points
      colors = data.colors
      normals = data.normals
      uniColor = data.unicolor
      cameraValue[0] = 0
      cameraValue[1] = 200
      resetAdapter(angleSlider, 0)
      resetAdapter(radiusSlider, 200)

      translation[0] = 90
      translation[1] = 150
      translation[2] = 0
      resetAdapter(xTranslation, 90)
      resetAdapter(yTranslation, 150)
      resetAdapter(zTranslation, 0)

      rotation[0] = 40
      rotation[1] = 25
      rotation[2] = 325
      resetAdapter(xRotation, 40)
      resetAdapter(yRotation, 25)
      resetAdapter(zRotation, 325)

      scale[0] = 1
      scale[1] = 1
      scale[2] = 1
      resetAdapter(xScaling, 1)
      resetAdapter(yScaling, 1)
      resetAdapter(zScaling, 1)

      projectionMode = "orthograpic"
      projAttr.fov = 60
      projAttr.obangel = 63.4
      selectMode.value = "orthograpic"
      prespectiveDiv[0].style.visibility="hidden"
      obliqueDiv[0].style.visibility="hidden"

      isUsingShader.checked = false
      init()
      //renderEngine()
  }
  
  console.log("file", file)
  reader.readAsText(file);
  if (!file) {
      alert('Cannot proceed empty file')
  }
}