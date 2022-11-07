var canvas=new fabric.Canvas("myCanvas");
playerX=10;
playerY=10;
blockImageWidth=30;
blockImageHeight=30;
var playerObject="";
 var blockImageObject="";

 function playerUpdate() {
    fabric.Image.fromURL("player.png",function (Img) {
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObject)
    });    
 } 

 function newImage(getImage){
    fabric.Image.fromURL(getImage,function (Img) {
        blockImageObject=Img;
        blockImageObject.scaleToWidth(blockImageWidth);
         blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockImageObject)
    });
 }

 window.addEventListener("keydown",myKeyDown);
 function myKeyDown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=="80") {
    console.log("p e shift clicadas juntas");
    blockImageWidth=blockImageWidth+10;
    blockImageHeight=blockImageHeight+10;
    document.getElementById("currentWidth").innerHTML=blockImageWidth;
    document.getElementById("currentHeight").innerHTML=blockImageHeight;

    }
    if (e.shiftKey && keyPressed=="77") {
        console.log("m e shift clicadas juntas");
        blockImageWidth=blockImageWidth-10;
        blockImageHeight=blockImageHeight-10;
        document.getElementById("currentWidth").innerHTML=blockImageWidth;
        document.getElementById("currentHeight").innerHTML=blockImageHeight;

    }
    if (keyPressed=="38") {
        up();
        console.log("tecla para cima");
        
    }
    if (keyPressed=="40") {
        down();
        console.log("tecla para baixo");
        
    }
    if (keyPressed=="37") {
        left();
        console.log("tecla para esquerda");
        
    }
    if (keyPressed=="39") {
        right();
        console.log("tecla para direita");
        
    }
    if (keyPressed=="87") {
        newImage("wall.jpg")
        console.log("letra w")
        
    }
    if (keyPressed=="71") {
        newImage("ground.png")
        console.log("letra g")
        
    }
    if (keyPressed=="76") {
        newImage("light_green.jpg")
        console.log("letra l")
        
    }
    if (keyPressed=="84") {
        newImage("trunk.jpg")
        console.log("letra t")
        
    }
    if (keyPressed=="82") {
        newImage("roof.jpg")
        console.log("letra r")
        
    }
    if (keyPressed=="89") {
        newImage("yellow_wall.png")
        console.log("letra y")
        
    }
    if (keyPressed=="68") {
        newImage("dark_green.png")
        console.log("letra d")
        
    }
    if (keyPressed=="85") {
        newImage("unique.png")
        console.log("letra u")
        
    }
    if (keyPressed=="67") {
        newImage("cloud.jpg")
        console.log("letra c")
        
    }
    
 }
 function up() {
    if (playerY>=0) {
        playerY=playerY-blockImageHeight;
        console.log("altura da imagem do bloco= "+blockImageHeight);
        console.log("quando a tecla para cima for pressionada,x= "+playerX+"y= "+playerY);
        canvas.remove(playerObject);
        playerUpdate()
    }
    
 }
 function down() {
    if (playerY<=500) {
        playerY=playerY+blockImageHeight;
        console.log("altura da imagem do bloco= "+blockImageHeight);
        console.log("quando a tecla para baixo for pressionada,x= "+playerX+"y= "+playerY);
        canvas.remove(playerObject);
        playerUpdate()
    }
    
 }
 function left() {
    if (playerX>=0) {
        playerX=playerX-blockImageWidth;
        console.log("largura da imagem do bloco= "+blockImageWidth);
        console.log("quando a tecla para esquerda for pressionada,x= "+playerX+"y= "+playerY);
        canvas.remove(playerObject);
        playerUpdate()
    }
 }
 function right() {
    if (playerX<=850) {
        playerX=playerX+blockImageWidth;
        console.log("largura da imagem do bloco= "+blockImageWidth);
        console.log("quando a tecla para direita for pressionada,x= "+playerX+"y= "+playerY);
        canvas.remove(playerObject);
        playerUpdate()
    }
 }
 function clearArea() {
    var c=document.getElementById("myCanvas")
     var ctx=c.getContext("2d")
     ctx.clearRect(0,0,c.width,c.height)
    
 }
