var PLAY = 1;
var END = 0
var PRELOAD = 2
var LOAD = 3
var gameState = 2;
var IdelImg, M1Img, MazeTitleImg, gameOverImg;
var RestartImg, StartImg, playerImg, walk1Img, walk2Img, walkAnime;
var templeIdelImg, TempleMummyImg, TempleSwordImg,TempleImg;
var gameOver, Restart, Start, player, BG;
var BgSound
var A = 0

function preload() {
    IdelImg = loadImage("Idel.png")

    M1Img = loadImage("Maze1.png")
    MazeTitleImg = loadImage("MazeTitle.png")
    
    gameOverImg = loadImage("gameOver.png")
    
    RestartImg = loadImage("Restart.png")
    StartImg = loadImage("start.png")

    playerImg = loadImage("Player.png")

    TempleMummyImg = loadImage("TempleMummy.png")
    TempleSwordImg = loadImage("TempleSword.png")
    templeIdelImg = loadImage("templeIdel.png")
    TempleImg = loadImage("TempleNone.png")
    
    BgSound = loadSound("bgSound.wav")
    BgSound = loadSound("bgSound.wav")

    walk1Img = loadImage("Walk1.png")
    walk2Img = loadImage("Walk2.png")
    
    walkAnime = loadAnimation(walk1Img,walk2Img)
}

function setup(){
    createCanvas(1200,800)

    BG = createSprite(600,400,1200,800)
    BG.addImage(TempleImg)

    player = createSprite(100,200,20,20)
    player.addImage(playerImg)
    player.scale = 0.25;

    gameOver = createSprite(600,100);
    gameOver.addImage(gameOverImg);

    restart = createSprite(600,140);
    restart.addImage(RestartImg);

    Start = createSprite(600,600);
    Start.addImage(StartImg)

    gameOver.scale = 0.5;
    restart.scale = 0.5;

    gameOver.visible = false;
    restart.visible = false;
    player.visible = false
}

function draw(){
    background("white");
    
    if(mousePressedOver(Start)){
        gameState = LOAD
    }
    if(gameState === LOAD){
        Start.visible = false;
        A=1

        textSize(10)
        fill("Black")
        text("Press the enter Button to Skip the Story and Press the right arrow for the next slide",400,780)
        
        if(keyDown(RIGHT_ARROW)){
            A=A+1
        }

        if(a===1){
        BG.addImage(templeIdelImg)
        Start.visible = false;
        textSize(30)
        fill("Black")
        text("Finally! After so long, I have found the Temple of the Great Egyptian Pharaoh.",100,760)
        }
        if(A===2){

        }
    }
    drawSprites();
}
