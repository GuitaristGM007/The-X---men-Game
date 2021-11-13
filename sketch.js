//declare contants from matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declare variables for objects, images, sounds, gameStates, etc.
var token1, token2, token3, token4;
var token5, token6, token7, token8;
var token9, token10, token11, token12;
var token13, token14, token15, token16;
var blueTokenImage, greenTokenImage, redTokenImage, yellowTokenImage;
var bToken, gToken, rToken, yToken;
var mansion, mansionImage;
var road1, road2, road3, road4, road5;
var road6, road7, road8, road9;
var road10, road11, road12, road13;
var road14, road15, road16, road17;
var dice1, dice1Image1, dice1Image2, dice1Image3, dice1Image4, dice1Image5, dice1Image6;
var sum1, sum2, sum3, sum4, sum5, sum6, sumTotal, rollButton;
var blue1, blue2, blue3, blue4;
var blue1Image, blue2Image, blue3Image, blue4Image;
var green1, green2, green3, green4;
var green1Image, green2Image, green3Image, green4Image;
var red1, red2, red3, red4;
var red1Image, red2Image, red3Image, red4Image;
var yellow1, yellow2, yellow3, yellow4;
var yellow1Image, yellow2Image, yellow3Image, yellow4Image;
var blueStart, greenStart, redStart, yellowStart;
var blueStartImage, greenStartImage, redStartImage, yellowStartImage;
var magneto1, magneto2, magneto3, magneto4;
var magneto1Image, magneto2Image, magneto3Image, magneto4Image;
var apocalypse1, apocalypse2;
var apoc1Image, apoc2Image;
var sentinel1, sentinel2;
var sentinel1Image, sentinel2Image;
var jugg1, jugg2, jugg3, jugg4;
var jugg5, jugg6, jugg7, jugg8;
var juggImage1, juggImage2, juggImage3, juggImage4;
var juggImage5, juggImage6, juggImage7, juggImage8;
var empty1, empty2, empty3, empty4;
var place1, place2, place3, place4, place5, place6;
var place7, place8, place9, place10, place11, place12;
var place13, place14, place15, place16, place17, place18;
var place19, place20, place21, place22, place23, place24;
var towerImage1, towerImage2, towerImage3, towerImage4;
var emptyTowerImage1, emptyTowerImage2, emptyTowerImage3, emptyTowerImage4;
var block1, block2, block3, block4, block5, block6;
var block7, block8, block9, block10, block11, block12;
var block13, block14, block15, block16, block17, block18;
var block19, block20, block21, block22, block23, block24;
var block25, block26, block27, block28, block29, block30;
var block31, block32, block33, block34, block35, block36;
var blueBlock, greenBlock, redBlock, yellowBlock;
var blueSection, greenSection, redSection, yellowSection;
var gameState = "playerState";

//function to preload the images, sounds and other media
function preload(){
//preload the image for mansion
mansionImage = loadImage("./media/mansion.png");
//preload the image for tower1
towerImage1 = loadImage("./media/tower.png");
//peload the image for tower2
towerImage2 = loadImage("./media/tower2.png");
//preload the image for tower3
towerImage3 = loadImage("./media/thinTower.png");
//preload the image for tower4
towerImage4 = loadImage("./media/thinTower2.png");
//preload the image for emptyTower1
emptyTowerImage1 = loadImage("./media/empty.png");
//preload the image for emptyTower2
emptyTowerImage2 = loadImage("./media/empty2.png");
//preload the image for emptyTower3
emptyTowerImage3 = loadImage("./media/thinEmpty.png");
//preload the image for emptyTower4
emptyTowerImage4 = loadImage("./media/thinEmpty2.png");
//preload the image for blueStartImage
blueStartImage = loadImage("./media/blueCircle.png");
//preload the image for greenStartImage
greenStartImage = loadImage("./media/greenCircle.png");
//preload the image for redStartImage
redStartImage = loadImage("./media/redCircle.png");
//preload the image for yellowStartImage
yellowStartImage = loadImage("./media/yellowCircle.png");
//preload the image for blue1Image
blue1Image = loadImage("./media/jeanGrey.png");
//preload the image for blue2Image
blue2Image = loadImage("./media/iceman.png");
//preload the image for blue3Image
blue3Image = loadImage("./media/beast.png");
//preload the image for blue4Image
blue4Image = loadImage("./media/colossus.png");
//preload the image for green1Image
green1Image = loadImage("./media/nightcrawler.png");
//preload the image for green2Image
green2Image = loadImage("./media/archangel.png");
//preload the image for green3Image
green3Image = loadImage("./media/havoc.png");
//preload the image for green4Image
green4Image = loadImage("./media/storm.png");
//preload the image for red1Image
red1Image = loadImage("./media/jubilee.png");
//preload the image for red2Image
red2Image = loadImage("./media/wolverine.png");
//preload the image for red3Image
red3Image = loadImage("./media/bishop.png");
//preload the image for red4Image
red4Image = loadImage("./media/psylocke.png");
//preload the image for yellow1Image
yellow1Image = loadImage("./media/polaris.png");
//preload the image for yellow2Image
yellow2Image = loadImage("./media/gambit.png");
//preload the image for yellow3Image
yellow3Image = loadImage("./media/cyclops.png");
//preload the image for yellow4Image
yellow4Image = loadImage("./media/rogue.png");
//preload the image for jugg1
juggImage1 = loadImage("./media/jugg1.png");
//preload the image for jugg2
juggImage2 = loadImage("./media/jugg2.png");
//preload the image for jugg3
juggImage3 = loadImage("./media/jugg3.png");
//preload the image for jugg4
juggImage4 = loadImage("./media/jugg4.png");
//preload the image for jugg5
juggImage5 = loadImage("./media/jugg5.png");
//preload the image for jugg6
juggImage6 = loadImage("./media/jugg22.png");
//preload the image for jugg7
juggImage7 = loadImage("./media/jugg23.png");
//preload the image for jugg8
juggImage8 = loadImage("./media/jugg24.png");
//preload the image for apocalypse1
apoc1Image = loadImage("./media/apocalypse1.png");
//preload the image for apocalyse2
apoc2Image = loadImage("./media/apocalypse2.png");
//preload the image for sentinel1
sentinel1Image = loadImage("./media/sentinel1.png");
//preload the image for sentinel2
sentinel2Image = loadImage("./media/sentinel2.png");
//preload the image for 1_dice
dice1Image1 = loadImage("./media/dice1.jpg");
//preload the image for 2_dice
dice1Image2 = loadImage("./media/dice2.jpg");
//preload the image for 3_dice
dice1Image3 = loadImage("./media/dice3.jpg");
//preload the image for 4_dice
dice1Image4 = loadImage("./media/dice4.jpg");
//preload the image for 5_dice
dice1Image5 = loadImage("./media/dice5.jpg");
//preload the image for 6_dice
dice1Image6 = loadImage("./media/dice6.jpg");
//preload the image for blueBlock
blueBlock = loadImage("./media/blueRing.png");
//preload the image for greenBlock
greenBlock = loadImage("./media/greenRing.png");
//preload the image for redBlock
redBlock = loadImage("./media/redRing.png");
//preload the image for yellowBlock
yellowBlock = loadImage("./media/yellowRing.png");
//preload the image for magneto1Image
magneto1Image = loadImage("./media/magneto1.png");
//preload the image for magneto2Image
magneto2Image = loadImage("./media/magneto2.png");
//preload the image for magneto3Image
magneto3Image = loadImage("./media/magneto3.png");
//preload the image for magneto4Image
magneto4Image = loadImage("./media/magneto4.png");
//preload the image for blueToken
blueTokenImage = loadImage("./media/blueCube.png");
//preload the image for greenToken
greenTokenImage = loadImage("./media/greenCube.png");
//preload the image for redToken
redTokenImage = loadImage("./media/redCube.png");
//preload the image for yellowToken
yellowTokenImage = loadImage("./media/yellowCube.png");
}

//function to setup the game
function setup(){
//create canvas of required size
createCanvas(windowWidth - 25, windowHeight - 22.5);

//create mansion
mansion = createSprite(windowWidth / 2, windowHeight / 2, 100, 100);
//add image to mansion
mansion.addImage("base", mansionImage);
//change image of mansion
mansion.changeImage("base");
//scale mansion
mansion.scale = 0.25;

//create blueSection
blueSection = createSprite(150, 460, 150, 320);
//set a suitable color for blueSection
blueSection.shapeColor = "blue";
//create greenSection
greenSection = createSprite(1216, 160, 150, 320);//windowWidth - 150
//set a suitable color for greenSection
greenSection.shapeColor = "green";
//create redSection
redSection = createSprite(1216, 460, 150, 320);
//set a suitable color to redSection
redSection.shapeColor = "red";
//create yellowSection
yellowSection = createSprite(150, 150, 150, 300);
//set a suitable color for yellowSection
yellowSection.shapeColor = "yellow";

//create blueStart
blueStart = createSprite(275, 562.5, 75, 75);
//add image to blueStart
blueStart.addImage("blueCircle", blueStartImage);
//change image of blueStart
blueStart.changeImage("blueCircle");
//scale blueStart
blueStart.scale = 0.1;
//create greenStart
greenStart = createSprite(1091, 45, 75, 75);
//add image to greenStart
greenStart.addImage("greenCircle", greenStartImage);
//change image of greenStart
greenStart.changeImage("greenCircle");
//scale greenStart
greenStart.scale = 0.15;
//create redStart
redStart = createSprite(1091, 562.5, 75, 75);
//add image to redStart
redStart.addImage("redCircle", redStartImage);
//change image of redStart
redStart.changeImage("redCircle");
//scale redStart
redStart.scale = 0.16;
//create yellowStart
yellowStart = createSprite(275, 46, 75, 75);
//add image to yellowStart
yellowStart.addImage("yellowCircle", yellowStartImage);
//change image of yellowStart
yellowStart.changeImage("yellowCircle");
//scale yellowStart
yellowStart.scale = 0.38;

//create blue1
blue1 = createSprite(129, 580, 100, 62.5);
//add image to blue1
blue1.addImage("jeanGrey", blue1Image);
//change image of blue1
blue1.changeImage("jeanGrey");
//scale blue1
blue1.scale = 0.09;
//create blue2
blue2 = createSprite(129, 500, 100, 62.5);
//add image to blue2
blue2.addImage("iceman", blue2Image);
//change image of blue2
blue2.changeImage("iceman");
//scale blue2
blue2.scale = 0.4;
//create blue3
blue3 = createSprite(129, 420, 100, 62.5);
//add image to blue3
blue3.addImage("beast", blue3Image);
//change image of blue3
blue3.changeImage("beast");
//scale blue3
blue3.scale = 0.125;
//create blue4
blue4 = createSprite(129, 340, 100, 62.5);
//add image to blue4
blue4.addImage("colossus", blue4Image);
//change image of blue4
blue4.changeImage("colossus");
//scale blue4
blue4.scale = 0.2;
//create green1
green1 = createSprite(1237, 257.5, 100, 62.5);
//add image to green1
green1.addImage("nightcrawler", green1Image);
//change image of green1
green1.changeImage("nightcrawler");
//scale green1
green1.scale = 0.06;
//create green2
green2 = createSprite(1237, 167.5, 100, 62.5);
//add image to green2
green2.addImage("archangel", green2Image);
//change image of green2
green2.changeImage("archangel");
//scale green2
green2.scale = 0.09;
//create green3
green3 = createSprite(1237, 100, 100, 62.5);
//add image to green3
green3.addImage("havoc", green3Image);
//change image of green3
green3.changeImage("havoc");
//scale green3
green3.scale = 0.2;
//create green4
green4 = createSprite(1237, 32.5, 100, 62.5);
//add image to green4
green4.addImage("storm", green4Image);
//change image of green4
green4.changeImage("storm");
//scale green4
green4.scale = 0.07;
//create red1
red1 = createSprite(1237, 580, 100, 62.5);
//add image to red1
red1.addImage("jubilee", red1Image);
//change image of red1
red1.changeImage("jubilee");
//scale red1
red1.scale = 0.125;
//create red2
red2 = createSprite(1237, 500, 100, 62.5);
//add image to red2
red2.addImage("wolverine", red2Image);
//change image of red2
red2.changeImage("wolverine");
//scale red2
red2.scale = 0.09;
//create red3
red3 = createSprite(1237, 420, 100, 62.5);
//add image to red3
red3.addImage("bishop", red3Image);
//change image of red3
red3.changeImage("bishop");
//scale red3
red3.scale = 0.2;
//create red4
red4 = createSprite(1237, 340, 100, 62.5);
//add image to red4
red4.addImage("psylocke", red4Image);
//change image of red4
red4.changeImage("psylocke");
//scale red4
red4.scale = 0.06;
//create yellow1
yellow1 = createSprite(129, 255, 100, 62.5);
//add image to yellow1
yellow1.addImage("polaris", yellow1Image);
//change image of yellow1
yellow1.changeImage("polaris");
//scale yellow1
yellow1.scale = 0.065;
//create yellow2
yellow2 = createSprite(129, 160, 100, 62.5);
//add image to yellow2
yellow2.addImage("gambit", yellow2Image);
//change image of yellow2
yellow2.changeImage("gambit");
//scale yellow2
yellow2.scale = 0.06;
//create yellow3
yellow3 = createSprite(129, 100, 100, 62.5);
//add image to yellow3
yellow3.addImage("cyclops", yellow3Image);
//change image of yellow3 
yellow3.changeImage("cyclops");
//scale yellow3
yellow3.scale = 0.065;
//create yellow4
yellow4 = createSprite(129, 30, 100, 62.5);
//add image to yellow4
yellow4.addImage("rogue", yellow4Image);
//change image of yellow4
yellow4.changeImage("rogue");
//scale yellow4
yellow4.scale = 0.06;

//create place1
place1 = createSprite(375, 565, 100, 100); 
//add image to place1
place1.addImage("tower", towerImage1);
//create place2
place2 = createSprite(475, 565, 100, 100);
//add image to place2
place2.addImage("tower", towerImage1);
//create place3
place3 = createSprite(575, 565, 100, 100);
//add image to place3
place3.addImage("tower", towerImage1)
//create place4
place4 = createSprite(675, 565, 100, 100);
//add image to place4
place4.addImage("tower", towerImage1);
//create place5
place5 = createSprite(775, 565, 100, 100);
//add image to place5
place5.addImage("tower", towerImage1);
//create place6
place6 = createSprite(875, 565, 100, 100);
//add image to place6
place6.addImage("tower", towerImage1);
//create place7
place7 = createSprite(1090, 485, 100, 60);
//add image to place7
place7.addImage("thinTower", towerImage3);
//create place8
place8 = createSprite(1090, 425, 100, 60);
//add image to place8
place8.addImage("thinTower", towerImage3);
//create place9
place9 = createSprite(1090, 365, 100, 60);
//add image to place9
place9.addImage("thinTower", towerImage3);
//create place10
place10 = createSprite(1090, 305, 100, 60);
//add image to place10
place10.addImage("thinTower", towerImage3);
//create place11
place11 = createSprite(1090, 245, 100, 60);
//add image to place11
place11.addImage("thinTower", towerImage3);
//create place12
place12 = createSprite(1090, 185, 100, 60);
//add image to place12
place12.addImage("thinTower", towerImage3);
//create place13
place13 = createSprite(987.5, 42.5, 100, 100);
//add image to place13
place13.addImage("tower", towerImage2);
//create place14
place14 = createSprite(887.5, 42.5, 100, 100);
//add image to place14
place14.addImage("tower", towerImage2);
//create place15
place15 = createSprite(787.5, 42.5, 100, 100);
//add image to place15
place15.addImage("tower", towerImage2);
//create place16
place16 = createSprite(687.5, 42.5, 100, 100);
//add image to place16
place16.addImage("tower", towerImage2);
//create place17
place17 = createSprite(587.5, 42.5, 100, 100);
//add image to place17
place17.addImage("tower", towerImage2);
//create place18
place18 = createSprite(487.5, 42.5, 100, 100);
//add image to place18
place18.addImage("tower", towerImage2);
//create place19
place19 = createSprite(275, 122, 100, 60);
//add image to place19
place19.addImage("thin2", towerImage4);
//create place20
place20 = createSprite(275, 181, 100, 60);
//add image to place20
place20.addImage("thin2", towerImage4);
//create place21
place21 = createSprite(275, 240, 100, 60);
//add image to place21
place21.addImage("thin2", towerImage4);
//create place22
place22 = createSprite(275, 299, 100, 60);
//add image to place22
place22.addImage("thin2", towerImage4);
//create place23
place23 = createSprite(275, 358, 100, 60);
//add image to place23
place23.addImage("thin2", towerImage4);
//create place24
place24 = createSprite(275, 417, 100, 60);
//add image to place24
place24.addImage("thin2", towerImage4);
 
//create empty1
empty1 = createSprite(980, 565, 100, 125); 
//add image to empty1
empty1.addImage("empty", emptyTowerImage1);
//create empty2
empty2 = createSprite(1090, 125, 100, 60);
//add image to empty2
empty2.addImage("empty2", emptyTowerImage3);
//create empty3
empty3 = createSprite(382, 42.5, 125, 100);
//add image to empty3
empty3.addImage("empty3", emptyTowerImage2);
//create empty4
empty4 = createSprite(275, 480, 100, 60);
//add image to empty4
empty4.addImage("empty4", emptyTowerImage4);

//create rollButton
rollButton = createImg("./media/go.png");
//set a specific position of rollButton
rollButton.position(625, 437.5);
//set a specific size of rollButton
rollButton.size(90, 67.5);
//call a specific function at mouseClicked condition : rollButton
rollButton.mouseClicked(randomDie);

//create road1
road1 = createSprite(450, 479, 250, 50);
//set a suitable color of road1
road1.shapeColor = "lightBlue";
//create road2
road2 = createSprite(575, 461.5, 50, 85);
//set a suitable color of road2
road2.shapeColor = "lightBlue";
//create road3
road3 = createSprite(525, 412.5, 150, 50);
//set a suitable color of road3
road3.shapeColor = "lightBlue";
//create road4
road4 = createSprite(427, 392.5, 50, 90);
//set a suitable color of road4
road4.shapeColor = "lightBlue";
//create road5
road5 = createSprite(508, 350, 212, 50);
//set a suitable color of road5
road5.shapeColor = "lightBlue";
//create road6
road6 = createSprite(915, 125, 250, 50);
//set a suitable color of road6
road6.shapeColor = "lightGreen";
//create road7
road7 = createSprite(765, 150, 50, 100);
//set a suitable color of road7
road7.shapeColor = "lightGreen";
//create road8
road8 = createSprite(715, 175, 55, 50);
//set a suitable color of road8
road8.shapeColor = "lightGreen";
//create road9 
road9 = createSprite(712.5, 230, 50, 60);
//set a suitable color of road9
road9.shapeColor = "lightGreen";
//create road10
road10 = createSprite(980, 472.5, 50, 85);
//set a suitable color of road10
road10.shapeColor = "magenta";
//create road11
road11 = createSprite(905, 405, 200, 50);
//set a suitable color of road11
road11.shapeColor = "magenta";
//create road12
road12 = createSprite(830, 340, 50, 80);
//set a suitable color of road12
road12.shapeColor = "magenta";
//create road13
road13 = createSprite(778, 325, 55, 50);
//set a suitable color of road13
road13.shapeColor = "magenta";
//create road14
road14 = createSprite(382, 137, 50, 88);
//set a suitable color of road14
road14.shapeColor = "orange";
//create road15
road15 = createSprite(457, 203, 200, 52);
//set a suitable color of road15
road15.shapeColor = "orange";
//create road16
road16 = createSprite(532, 267.35, 50, 92.4);
//set a suitable color of road16
road16.shapeColor = "orange";
//create road17
road17 = createSprite(583, 288.65, 65, 50);//green 9 spots on road
//set a suitable color of road17
road17.shapeColor = "orange";

//create block1
block1 = createSprite(350, 479, 40, 40);
//add image to block1
block1.addImage("blueRing", blueBlock);
//scale block1
block1.scale = 0.1;
//create block2
block2 = createSprite(425, 479, 40, 40);
//add image to block2
block2.addImage("blueRing", blueBlock);
//scale block2
block2.scale = 0.1;
//create block3
block3 = createSprite(500, 479, 40, 40);
//add image to block3
block3.addImage("blueRing", blueBlock);
//scale block3
block3.scale = 0.1;
//create block4
block4 = createSprite(575, 445, 40, 40);
//add image to block4
block4.addImage("blueRing", blueBlock);
//scale block4
block4.scale = 0.1;
//create block5
block5 = createSprite(510, 412.5, 40, 40);
//add image to block5
block5.addImage("blueRing", blueBlock);
//scale block5
block5.scale = 0.1;
//create block6
block6 = createSprite(430, 412.5, 40, 40);
//add image to block6
block6.addImage("blueRing", blueBlock);
//scale block6
block6.scale = 0.1;
//create block7
block7 = createSprite(430, 350, 40, 40);
//add image to block7
block7.addImage("blueRing", blueBlock);
//scale block7
block7.scale = 0.1;
//create block8
block8 = createSprite(510, 350, 40, 40);
//add image to block8
block8.addImage("blueRing", blueBlock);
//scale block8
block8.scale = 0.1;
//create block9
block9 = createSprite(587.5, 350, 40, 40);
//add image to block9
block9.addImage("blueRing", blueBlock);
//scale block9
block9.scale = 0.1;
//create block10
block10 = createSprite(1015, 125, 40, 40);
//add image to block10
block10.addImage("greenRing", greenBlock);
//scale block10
block10.scale = 0.04;
//create block11
block11 = createSprite(966.5, 125, 40, 40);
//add image to block11
block11.addImage("greenRing", greenBlock);
//scale block11
block11.scale = 0.04;
//create block12
block12 = createSprite(917.5, 125, 40, 40);
//add image to block12
block12.addImage("greenRing", greenBlock);
//scale block12
block12.scale = 0.04;
//create block13
block13 = createSprite(867.5, 125, 40, 40);
//add image to block13
block13.addImage("greenRing", greenBlock);
//scale block13
block13.scale = 0.04;
//create block14
block14 = createSprite(817.5, 125, 40, 40);
//add image to block14
block14.addImage("greenRing", greenBlock);
//scale block14
block14.scale = 0.04;
//create block15
block15 = createSprite(767.5, 125, 40, 40);
//add image to block15
block15.addImage("greenRing", greenBlock);
//scale block15
block15.scale = 0.04;
//create block16
block16 = createSprite(767.5, 175, 40, 40);
//add image to block16
block16.addImage("greenRing", greenBlock);
//scale block16
block16.scale = 0.04;
//create block17
block17 = createSprite(712.5, 175, 40, 40);
//add image to block17
block17.addImage("greenRing", greenBlock);
//scale block17
block17.scale = 0.04;
//create block18
block18 = createSprite(712.5, 235, 40, 40);
//add image to block9
block18.addImage("greenRing", greenBlock);
//scale block9
block18.scale = 0.04;
//create block19
block19 = createSprite(980, 492.5, 40, 40);
//add image to block 19
block19.addImage("redRing", redBlock);
//scale block19
block19.scale = 0.08;
//create block20
block20 = createSprite(980, 450, 40, 40);
//add image to block20
block20.addImage("redRing", redBlock);
//scale block20
block20.scale = 0.08;
//create block21
block21 = createSprite(977.5, 410, 40, 40);
//add image to block21
block21.addImage("redRing", redBlock);
//scale block21
block21.scale = 0.08;
//create block22
block22 = createSprite(927.5, 410, 40, 40);
//add image to block22
block22.addImage("redRing", redBlock);
//scale block22
block22.scale = 0.08;
//create block23
block23 = createSprite(877.5, 410, 40, 40);
//add image to block23
block23.addImage("redRing", redBlock);
//scale block23
block23.scale = 0.08;
//create block24
block24 = createSprite(827.5, 410, 40, 40);
//add image to block24
block24.addImage("redRing", redBlock);
//scale block24
block24.scale = 0.08;
//create block25
block25 = createSprite(827.5, 367.5, 40, 40);
//add image to block25
block25.addImage("redRing", redBlock);
//scale block25
block25.scale = 0.08;
//create block26
block26 = createSprite(825, 325, 40, 40);
//add image to block26
block26.addImage("redRing", redBlock);
//scale block26
block26.scale = 0.08;
//create block27
block27 = createSprite(775, 325, 40, 40);
//add image to block27
block27.addImage("redRing", redBlock);
//scale block27
block27.scale = 0.08;
//create block28
block28 = createSprite(382.5, 115, 40, 40);
//add image to block28
block28.addImage("yellowRing", yellowBlock);
//scale block28
block28.scale = 0.14;
//create block29
block29 = createSprite(382.5, 160, 40, 40);
//add image to block29
block29.addImage("yellowRing", yellowBlock);
//scale block29
block29.scale = 0.14;
//create block30
block30 = createSprite(382.5, 205, 40, 40);
//add image to block30
block30.addImage("yellowRing", yellowBlock);
//scale block30
block30.scale = 0.14;
//create block31
block31 = createSprite(427.5, 205, 40, 40);
//add image to block28
block31.addImage("yellowRing", yellowBlock);
//scale block28
block31.scale = 0.14;
//create block32
block32 = createSprite(472.5, 205, 40, 40);
//add image to block32
block32.addImage("yellowRing", yellowBlock);
//scale block32
block32.scale = 0.14;
//create block33
block33 = createSprite(517.5, 205, 40, 40);
//add image to block28
block33.addImage("yellowRing", yellowBlock);
//scale block28
block33.scale = 0.14;
//create block34
block34 = createSprite(535, 245, 40, 40);
//add image to block34
block34.addImage("yellowRing", yellowBlock);
//scale block34
block34.scale = 0.14;
//create block35
block35 = createSprite(550, 290, 40, 40);
//add image to block35
block35.addImage("yellowRing", yellowBlock);
//scale block35
block35.scale = 0.14;
//create block36
block36 = createSprite(595, 290, 40, 40);
//add image to block28
block36.addImage("yellowRing", yellowBlock);
//scale block28
block36.scale = 0.14;
//create magneto1
magneto1 = createSprite(775, 565, 75, 75);
//add image to magneto1
magneto1.addImage("magneto1", magneto1Image);
//scale magneto1
magneto1.scale = 0.04;
//create magneto2
magneto2 = createSprite(1090, 250, 75, 55);
//add image to magneto2
magneto2.addImage("magneto2", magneto2Image);
//scale magneto2
magneto2.scale = 0.08;
//create magneto3
magneto3 = createSprite(382, 42, 75, 75);
//add image to magneto3
magneto3.addImage("magneto3", magneto3Image);
//scale magneto3
magneto3.scale = 0.11;
//create magneto4
magneto4 = createSprite(275, 417, 75, 55);
//add image to magneto4
magneto4.addImage("magneto4", magneto4Image);
//scale magneto4
magneto4.scale = 0.09;

//create apocalypse1
apocalypse1 = createSprite(575, 565, 75, 75);
//add image to apocalypse1
apocalypse1.addImage("apoc1", apoc1Image);
//scale apocalypse1
apocalypse1.scale = 0.09;
//create apocalypse2
apocalypse2 = createSprite(1090, 485, 75, 40);
//add image to apocalypse2
apocalypse2.addImage("apoc2", apoc2Image);
//scale apocalypse2
apocalypse2.scale = 0.125;

//create sentinel1
sentinel1 = createSprite(787.5, 42.5, 75, 75);
//add image to sentinel1
sentinel1.addImage("sentinel1", sentinel1Image);
//scale sentinel1
sentinel1.scale = 0.1;
//create sentinel2
sentinel2 = createSprite(275, 240, 75, 55);
//add image to sentinel2
sentinel2.addImage("sentinel2", sentinel2Image);
//scale sentinel2
sentinel2.scale = 0.15;

//create jugg1
jugg1 = createSprite(350, 440, 50, 50);
//add image to jugg1
jugg1.addImage("jugg1", juggImage1);
//scale jugg1
jugg1.scale = 0.05;
//create jugg2
jugg2 = createSprite(510, 412.5, 50, 50);
//add image to jugg1
jugg2.addImage("jugg2", juggImage2);
//scale jugg2
jugg2.scale = 0.15;
//create jugg3
jugg3 = createSprite(1015, 160, 50, 50);
//add image to jugg3
jugg3.addImage("jugg3", juggImage3);
//scale jugg3
jugg3.scale = 0.05;
//create jugg4
jugg4 = createSprite(867.5, 125, 50, 50);
//add image to jugg4
jugg4.addImage("jugg4", juggImage6);
//scale jugg4
jugg4.scale = 0.15;
//create jugg5
jugg5 = createSprite(945, 492.5, 50, 50);
//add image to jugg5
jugg5.addImage("jugg5", juggImage4);
//scale jugg5
jugg5.scale = 0.05;
//create jugg6
jugg6 = createSprite(877.5, 410, 50, 50);
//add image to jugg5
jugg6.addImage("jugg6", juggImage7);
//scale jugg5
jugg6.scale = 0.15;
//create jugg7
jugg7 = createSprite(422.5, 115, 50, 50);
//add image to jugg5
jugg7.addImage("jugg7", juggImage5);
//scale jugg5
jugg7.scale = 0.05;
//create jugg8
jugg8 = createSprite(427.5, 205, 50, 50);
//add image to jugg8
jugg8.addImage("jugg7", juggImage8);
//scale jugg8
jugg8.scale = 0.15;

//create token1(blue1)
token1 = createSprite(35, 580, 50, 50);
//add image to token1
token1.addImage("blueToken1", blueTokenImage);
//scale token1
token1.scale = 0.09;
//define isPlayed property of token1
token1.isPlayed = false;
//create token2(blue2)
token2 = createSprite(35, 500, 50, 50);
//add image to token2
token2.addImage("blueToken2", blueTokenImage);
//scale token2
token2.scale = 0.09;
//define isPlayed property of token2
token2.isPlayed = false;
//create token3(blue3)
token3 = createSprite(35, 420, 50, 50);
//add image to token3
token3.addImage("blueToken3", blueTokenImage);
//scale token3
token3.scale = 0.09;
//define isPlayed property of token3
token3.isPlayed = false;
//create token4(blue4)
token4 = createSprite(35, 340, 50, 50);
//add image to token4
token4.addImage("blueToken4", blueTokenImage);
//scale token4
token4.scale = 0.09;
//define isPlayed property of token4
token4.isPlayed = false;
//create token5(green1)
token5 = createSprite(1315, 265, 40, 40);
//add image to token5
token5.addImage("greenToken1", greenTokenImage);
//scale token5
token5.scale = 0.06;
//define isPlayed property of token5
token5.isPlayed = false;
//create token6(green2)
token6 = createSprite(1315, 185, 40, 40);
//add image to token6
token6.addImage("greenToken2", greenTokenImage);
//scale token6
token6.scale = 0.06;
//define isPlayed property of token6
token6.isPlayed = false;
//create token7(green3)
token7 = createSprite(1315, 105, 40, 40);
//add image to token7
token7.addImage("greenToken3", greenTokenImage);
//scale token7
token7.scale = 0.06;
//define isPlayed property of token7
token7.isPlayed = false;
//create token8(green4)
token8 = createSprite(1315, 25, 40, 40);
//add image to token8
token8.addImage("greenToken4", greenTokenImage);
//scale token8
token8.scale = 0.06;
//define isPlayed property of token8
token8.isPlayed = false;
//create token9(red1)
token9 = createSprite(1315, 585, 40, 40);
//add image to token9
token9.addImage("redToken1", redTokenImage);
//scale token9
token9.scale = 0.2;
//define isPlayed property of token9
token9.isPlayed = false;
//create token10(red2)
token10 = createSprite(1315, 505, 40, 40);
//add image to token10
token10.addImage("redToken2", redTokenImage);
//scale token10
token10.scale = 0.2;
//define isPlayed property of token10
token10.isPlayed = false;
//create token11(red3)
token11 = createSprite(1315, 425, 40, 40);
//add image to token11
token11.addImage("redToken3", redTokenImage);
//scale token11
token11.scale = 0.2;
//define isPlayed property of token11
token11.isPlayed = false;
//create token12(red4)
token12 = createSprite(1315, 345, 40, 40);
//add image to token12
token12.addImage("redToken4", redTokenImage);
//scale token12
token12.scale = 0.2;
//define isPlayed property of token12
token12.isPlayed = false;
//create token13(yellow1)
token13 = createSprite(35, 265, 50, 50);
//add image to token13
token13.addImage("yellowToken1", yellowTokenImage);
//scale token13
token13.scale = 0.09;
//define isPlayed property of token13
token13.isPlayed = false;
//create token14(yellow2)
token14 = createSprite(35, 185, 50, 50);
//add image to token14
token14.addImage("yellowToken2", yellowTokenImage);
//scale token14
token14.scale = 0.09;
//define isPlayed property of token14
token14.isPlayed = false;
//create token15(yellow3)
token15 = createSprite(35, 105, 50, 50);
//add image to token15
token15.addImage("yellowToken3", yellowTokenImage);
//scale token15
token15.scale = 0.09;
//define isPlayed property of token15
token15.isPlayed = false;
//create token16(yellow4)
token16 = createSprite(35, 25, 50, 50);
//add image to token16
token16.addImage("yellowToken4", yellowTokenImage);
//scale token16
token16.scale = 0.09;
//define isPlayed property of token16
token16.isPlayed = false;
}

//function to draw the objects
function draw(){
//set a suitable color of background
background("black");

//condition to start the token
if (sum4 && token1.isPlayed === false){
//condition to move the token
if (sum1 && mousePressedOver(token1)){
//set the xPosition of token
token1.x = 350;
//set the yPosition of token
token1.y = 535;
//set the isPlayed property of token
token1.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token1.isPlayed === false){
//condition to move the token
if (sum2 && mousePressedOver(token1)){
//set the xPosition of token
token1.x = 450;
//set the yPosition of token
token1.y = 535;
//set the isPlayed property of token
token1.isPlayed = true;
}     
}

//condition to start the token
if (sum4 && token1.isPlayed === false){
//condition to move the token
if (sum3 && mousePressedOver(token1)){
//set the xPosition of token
token1.x = 550;
//set the yPosition of token
token1.y = 535;
//set the isPlayed property of token
token1.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token1.isPlayed === false){
//condition to move the token
while (sum4 && mousePressedOver(token1)){
//set the xPosition of token
token1.x = 650;
//set the yPosition of token
token1.y = 535;
//set the isPlayed property of token
token1.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token1.isPlayed === false){
//condition to move the token
if (sum5 && mousePressedOver(token1)){
//set the xPosition of token
token1.x = 750;
//set the yPosition of token
token1.y = 535;
//set the isPlayed property of token
token1.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token1.isPlayed === false){
//condition to move the token
if (sum6 && mousePressedOver(token1)){
//set the xPosition of token
token1.x = 850;
//set the yPosition of token
token1.y = 535;
//set the isPlayed property of token
token1.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token2.isPlayed === false){
//condition to move the token
if (sum1 && mousePressedOver(token2)){
//set the xPosition of token
token2.x = 350;
//set the yPosition of token
token2.y = 535;
//set the isPlayed property of token
token2.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token2.isPlayed === false){
//condition to move the token
if (sum2 && mousePressedOver(token2)){
//set the xPosition of token
token2.x = 450;
//set the yPosition of token
token2.y = 535;
//set the isPlayed property of token
token2.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token2.isPlayed === false){
//condition to move the token
if (sum3 && mousePressedOver(token2)){
//set the xPosition of token
token2.x = 550;
//set the yPosition of token
token2.y = 535;
//set the isPlayed property of token
token2.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token2.isPlayed === false){
//condition to move the token
if (sum4 && mousePressedOver(token2)){
//set the xPosition of token
token2.x = 650;
//set the yPosition of token
token2.y = 535;
//set the isPlayed property of token
token2.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token2.isPlayed === false){
//condition to move the token
if (sum5 && mousePressedOver(token2)){
//set the xPosition of token
token2.x = 750;
//set the yPosition of token
token2.y = 535;
//set the isPlayed property of token
token2.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token2.isPlayed === false){
//condition to move the token
if (sum6 && mousePressedOver(token2)){
//set the xPosition of token
token2.x = 850;
//set the yPosition of token
token2.y = 535;
//set the isPlayed property of token
token2.isPlayed = true;
}
}

//condition to start the token
if (sum4 && token3.isPlayed === false){
//condition to move the token
if (sum1 && mousePressedOver(token3)){
//set the xPosition of token
token3.x = 350;
//set the yPosition of token
token3.y = 535;
//set the isPlayed property of token
token3.isPlayed = true;
}
}
    
//condition to start the token
if (sum4 && token3.isPlayed === false){
//condition to move the token
if (sum2 && mousePressedOver(token3)){
//set the xPosition of token
token3.x = 450;
//set the yPosition of token
token3.y = 535;
//set the isPlayed property of token
token3.isPlayed = true;
}
}
    
//condition to start the token
if (sum4 && token3.isPlayed === false){
//condition to move the token
if (sum3 && mousePressedOver(token3)){
//set the xPosition of token
token3.x = 550;
//set the yPosition of token
token3.y = 535;
//set the isPlayed property of token
token3.isPlayed = true;
}
}
    
//condition to start the token
if (sum4 && token3.isPlayed === false){
//condition to move the token
if (sum4 && mousePressedOver(token3)){
//set the xPosition of token
token3.x = 650;
//set the yPosition of token
token3.y = 535;
//set the isPlayed property of token
token3.isPlayed = true;
}
}
    
//condition to start the token
if (sum4 && token3.isPlayed === false){
//condition to move the token
if (sum5 && mousePressedOver(token3)){
//set the xPosition of token
token3.x = 750;
//set the yPosition of token
token3.y = 535;
//set the isPlayed property of token
token3.isPlayed = true;
}
}
    
//condition to start the token
if (sum4 && token3.isPlayed === false){
//condition to move the token
if (sum6 && mousePressedOver(token3)){
//set the xPosition of token
token3.x = 850;
//set the yPosition of token
token3.y = 535;
//set the isPlayed property of token
token3.isPlayed = true;
}
}

//command to draw the sprites
drawSprites();
//set a specific size of text
textSize(15);
//set a suitable color of the outline of the text
stroke("yellow");
//set a specific weight of outline of the text
strokeWeight(textSize / 10);
//set a suitable color to fill the text
fill("white");
//actual text
text("Jean", 180, 537.5);
//actual text
text("Grey", 180, 555);
//actual text
text("Iceman", 165, 500);
//actual text
text("Beast", 177.5, 450);
//actual text
text("Colossus", 150, 390);
//set a suitable color of the outline of the text
stroke("red");
//actual text
text("Nightcrawler", 1145, 290);
//actual text
text("Archangel", 1140, 185);
//actual text
text("Havoc", 1145, 110);
//actual text
text("Storm", 1145, 45);
//set a suitable color of the outline of the text
stroke("green");
//actual text
text("Jubilee", 1145, 575);
//actual text
text("Wolverine", 1145, 475);
//actual text
text("Bishop", 1145, 425);
//actual text
text("Psylocke", 1145, 350);
//set a suitable color of the outline of the text
stroke("blue");
//set a suitable color to fill the text
fill("blue");
//actual text
text("Polaris", 175, 245);
//actual text
text("Gambit", 175, 185);
//actual text
text("Cyclops", 170, 85);
//actual text
text("Rogue", 175, 20);
//set a suitable color of the outline of the text
stroke("white");
//set a suitable color to fill the text
fill("white");
//actual text
text("1", token1.x - 10, token1.y + 6);
//actual text
text("2", token2.x - 10, token2.y + 6);
//actual text
text("3", token3.x - 10, token3.y + 6);
//actual text
text("4", token4.x - 10, token4.y + 6);
//set a suitable color of the outline of the text
stroke("black");
//set a suitable color to fill the text
fill("black");
//actual text
text("1", token5.x, token5.y + 6);
//actual text
text("2", token6.x, token6.y + 6);
//actual text
text("3", token7.x, token7.y + 6);
//actual text
text("4", token8.x, token8.y + 6);
//set a suitable color of the outline of the text
stroke("white");
//set a suitable color to fill the text
fill("white");
//actual text
text("1", token9.x + 2, token9.y + 9);
//actual text
text("2", token10.x + 2, token10.y + 9);
//actual text
text("3", token11.x + 2, token11.y + 9);
//actual text
text("4", token12.x + 2, token12.y + 9);
//set a suitable color of the outline of the text
stroke("black");
//set a suitable color to fill the text
fill("black");
//actual text
text("1", token13.x - 12, token13.y + 5);
//actual text
text("2", token14.x - 12, token14.y + 5);
//actual text
text("3", token15.x - 12, token15.y + 5);
//actual text
text("4", token16.x - 12, token16.y + 5);
//set a suitable color of the outline of the text
stroke("black");
//set a suitable color to fill the text
fill("white");
//actual text
text("M", 820, 530);
//actual text
text("a", 821.5, 542.5);
//actual text
text("g", 821.5, 553.5);
//actual text
text("n", 821.5, 570.5);
//actual text
text("e", 821.5, 583);
//actual text
text("t", 823, 598);
//actual text
text("o", 821.5, 610);
//actual text
text("Magneto", 247.5, 445);
//actual text
text("Magneto", 1062.5, 217.5)
//actual text
text("S", 727.5, 15);
//actual text
text("e", 729, 25);
//actual text
text("n", 729, 35);
//actual text
text("t", 730, 48);
//actual text
text("i", 730, 58);
//actual text
text("n", 729, 68);
//actual text
text("e", 729, 78);
//actual text
text("l", 731, 90);
//actual text
text("Sentinel", 247, 275);
//actual text
text("Apocalypse", 1052.5, 460);
//set a specific size of text
textSize(12.5);
//actual text
text("A", 622.5, 526);
//actual text
text("p", 624, 534.5);
//actual text
text("o", 624, 546);
//actual text
text("c", 624, 554.5);
//actual text
text("a", 624, 563);
//actual text
text("l", 625, 574.5);
//actual text
text("y", 624, 584);
//actual text
text("p", 624, 595);
//actual text
text("s", 624, 606);
//actual text
text("e", 624, 616);
//actual text
text("Juggernaut", 475, 450);
//actual text
text("Juggernaut", 325, 512.5);
//actual text
text("Juggernaut", 857.5, 375);
//actual text
text("Juggernaut", 395, 240);
//actual text
text("Juggernaut", 835, 162.5);
//actual text
text("Juggernaut", 975, 200);
//set a specific size of text
textSize(10);
//actual text
text("J", 908.5, 440);
//actual text
text("u", 909, 447.5);
//actual text
text("g", 909, 455);
//actual text
text("g", 909, 465);
//actual text
text("e", 909, 475);
//actual text
text("r", 910, 482.5);
//actual text
text("n", 909, 490);
//actual text
text("a", 909, 496.5);
//actual text
text("u", 909, 503.5);
//actual text
text("t", 910, 512.5);
//actual text
text("J", 462.5, 101);
//actual text
text("u", 463, 108.5);
//actual text
text("g", 463, 116);
//actual text
text("g", 463, 125);
//actual text
text("e", 463, 132.5);
//actual text
text("r", 464, 140);
//actual text
text("n", 463, 147.5);
//actual text
text("a", 463, 155);
//actual text
text("u", 463, 162.5);
//actual text
text("t", 464.5, 171.5);
//set a specific size of text
textSize(12.5);
//set a suitable color of the outline of the text
stroke("white");
//set a suitable color to fill the text
fill("black");
//actual text
text("M", 335, 15);
//actual text
text("a", 336.5, 26);
//actual text
text("g", 336.5, 37);
//actual text
text("n", 336.5, 50);
//actual text
text("e", 336.5, 62.5);
//actual text
text("t", 337.5, 77);
//actual text
text("o", 336.5, 87.5);
//set a suitable color of the outline of the text
stroke("black");
//set a suitable color to fill the text
fill("black");
//set a specific size of text
textSize(20);
//actual text
text("START", 242.5, 570);
//actual text
text("START", 1060, 50);
//actual text
text("START", 1060, 570);
//actual text
text("START", 242.5, 50);
}

//function to display random die numbers
function randomDie(){
//create dice1
var dice1 = createSprite(762.5, 462.5, 50, 50);
//add image to dice1
dice1.addImage("face1_1", dice1Image1);
//change image of dice1
dice1.changeImage("face1_1");
//scale dice1
dice1.scale = 0.09;
//declare a sample variale
var rand = Math.round(random(1, 6));
//switch the sample sprite
switch (rand){
//define case 1
case 1 : dice1.addImage("face1_1", dice1Image1);
dice1.changeImage("face1_1");
dice1.scale = 0.09;
//change value of sum1
sum1 = 1;
//break statement
break;
//define case 2
case 2 : dice1.addImage("face1_2", dice1Image2);
dice1.changeImage("face1_2");
dice1.scale = 0.09;
//change value of sum2
sum2 = 2;
//break statement
break;
//define case 3
case 3 : dice1.addImage("face1_3", dice1Image3);
dice1.changeImage("face1_3");
dice1.scale = 0.09;
//change value of sum3
sum3 = 3;
//break statement
break;
//define case 4
case 4 : dice1.addImage("face1_4", dice1Image4);
dice1.changeImage("face1_4");
dice1.scale = 0.09;
//change value of sum4
sum4 = 4;
//break statement
break;
//define case 5
case 5 : dice1.addImage("face1_5", dice1Image5);
dice1.changeImage("face1_5");
dice1.scale = 0.09;
//change value of sum5
sum5 = 5;
//break statement
break;
//define case 6
case 6 : dice1.addImage("face1_6", dice1Image6);
dice1.changeImage("face1_6");
dice1.scale = 0.09;
//change value of sum6
sum6 = 6;
//break statement
break;
//default statement
default : break;
}
}