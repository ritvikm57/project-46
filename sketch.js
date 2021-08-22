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
        Story();
    }
       
    drawSprites();
}

function Story(){
    Start.visible = false;
 
    if(keyWentDown(RIGHT_ARROW)&& A<3){
        A=A+1
    }

    if(A===0 || A<3){
        textSize(10)
        fill("Black")
        text("Press the SpaceBar Button to Skip the Story and Press the right arrow for the next slide",400,780)
    }

    if(A===1){
        BG.addImage(templeIdelImg)
        textSize(30)
        fill("Black")
        text("Finally! After so long, I have found the Temple of the Great Egyptian Pharaoh.",100,760)
    }
    if(A===2){
        BG.addImage(TempleMummyImg)
        textSize(30)
        fill("Black")
        text("Now I need to find the Pharaoh's Tomb where the Diamond Sword lies", 150,760)

    }
    if(A===3){
        BG.addImage(TempleSwordImg)
        textSize(30)
        fill("Black")
        text("The Diamond Sword is believed to be enchanted by the great Wizard of Batan",100,760)
        textSize(10)
        text("Click SpaceBar to Play",550,780)
    }
    if(keyWentDown("Space")){
        gameState = PLAY
        BG.visible = false
    }
}
