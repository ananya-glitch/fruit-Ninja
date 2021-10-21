var sword, swordImage;

//game States
var PLAY = 1;
var END = 0;
var gameState = 1;

var fruitGroup;
var enemyGroup;
var knifeSound;

var monster, monsterImage;

var r, randomFruit;

var gameOverImage;

var appleImage;
var bananaImage;
var orangeImage;
var pineappleImage;
var watermelonImage;
var strawberryImage;
var pearImage;

var appleCut;
var bananaCut;
var orangeCut;
var pineappleCut;
var watermelonCut;
var strawberryCut;
var pearCut;

var appleGroup;
var bananaGroup;
var orangeGroup;
var pineappleGroup;
var watermelonGroup;
var strawberryGroup;
var pearGroup;

function preload() {
  swordImage = loadImage("sword.png");
  monsterImage = loadImage("alien1.png", "alien2.png");
  appleImage = loadImage("images/apple.png");
  appleCut = loadAnimation("images/apple_cut.png");
  bananaImage = loadImage("images/banana.png");
  bananaCut = loadAnimation("images/banana_cut.png");
  orangeImage = loadImage("images/orange.png");
  orangeCut = loadAnimation("images/orange_cut.png");
  pineappleImage = loadImage("images/pineapple2.png");
  pineappleCut = loadAnimation("images/pineapple_cut.png");
  watermelonImage = loadImage("images/watermelon2.png");
  watermelonCut = loadAnimation("images/watermelon_cut.png");
  strawberryImage = loadImage("images/strawberry2.png");
  strawberryCut = loadAnimation("images/strawberry_cut.png");
  pearImage = loadImage("images/pear.png");
  pearCut = loadAnimation("images/pear_cut.png");
  gameOverImage = loadImage("gameover.png");
  knifeSound = loadSound("knifeSwooshSound.mp3");
}

function setup() {
  createCanvas(500, 500);
  sword = createSprite(10, 10, 20, 20);
  sword.addImage(swordImage);
  sword.scale = 0.5;

  score = 0;
  appleGroup = createGroup();
  bananaGroup = createGroup();
  orangeGroup = createGroup();
  pineappleGroup = createGroup();
  watermelonGroup = createGroup();
  strawberryGroup = createGroup();
  pearGroup = createGroup();
  enemyGroup = createGroup();
}

function draw() {
  background("cyan");
  textSize(20);
  text("score : " + score, 10, 20);
  if (gameState === PLAY) {
    sword.y = mouseY;
    sword.x = mouseX;

    if (enemyGroup.isTouching(sword)) {
      enemyGroup.destroyEach();
      score = score - 10;
      gameState = END
    }

  
    for (var i = 0; i < appleGroup.length; i++) {
      if (appleGroup.get(i).isTouching(sword)) {
        appleGroup.get(i).addAnimation("apple_cut", appleCut);
        appleGroup.get(i).changeAnimation("apple_cut");
        score = score + 1;
        knifeSound.play();
      }
    }
    for (var i = 0; i < pearGroup.length; i++){
      if (pearGroup.get(i).isTouching(sword)) {
        pearGroup.get(i).addAnimation("pear_cut", pearCut);
        pearGroup.get(i).changeAnimation("pear_cut");
        pearGroup.get(i).scale = 0.3
        score = score + 1;
        knifeSound.play();
      }
    }
    for (var i = 0; i < pineappleGroup.length; i++){
      if (pineappleGroup.get(i).isTouching(sword)) {
        pineappleGroup.get(i).addAnimation("pineapple_cut", pineappleCut);
        pineappleGroup.get(i).changeAnimation("pineapple_cut");
        score = score + 1;
        knifeSound.play();
      }
    }
    for (var i = 0; i < watermelonGroup.length; i++){
      if (watermelonGroup.get(i).isTouching(sword)) {
        watermelonGroup.get(i).addAnimation("watermelon_cut", watermelonCut);
        watermelonGroup.get(i).changeAnimation("watermelon_cut");
        score = score + 1;
        knifeSound.play();
      }
    }
    for (var i = 0; i < strawberryGroup.length; i++){
      if (strawberryGroup.get(i).isTouching(sword)) {
        strawberryGroup.get(i).addAnimation("strawberry_cut", strawberryCut);
        strawberryGroup.get(i).changeAnimation("strawberry_cut");
        score = score + 1;
        knifeSound.play();
      }
    }
    for (var i = 0; i < bananaGroup.length; i++){
      if (bananaGroup.get(i).isTouching(sword)) {
        bananaGroup.get(i).addAnimation("banana_cut", bananaCut);
        bananaGroup.get(i).changeAnimation("banana_cut");
        score = score + 1;
        knifeSound.play();
      }
    }
    for (var i = 0; i < orangeGroup.length; i++){
      if (orangeGroup.get(i).isTouching(sword)) {
        orangeGroup.get(i).addAnimation("orange_cut", orangeCut);
        orangeGroup.get(i).changeAnimation("orange_cut");
        orangeGroup.get(i).scale = 0.5
        score = score + 1;
        knifeSound.play();
      }
    }
    fruits();
    Enemy();
  }
  if(gameState == END){
    orangeGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
    strawberryGroup.setVelocityXEach(0)
    watermelonGroup.setVelocityXEach(0)
    pineappleGroup.setVelocityXEach(0)
    pearGroup.setVelocityXEach(0)
    appleGroup.setVelocityXEach(0)

  }
 
  drawSprites();
}

function fruits() {
  if (World.frameCount % 50 === 0) {
    fruit = createSprite(400, 200, 20, 20);
    fruit.scale = 0.2;

    //fruit.debug=true;
    r = Math.round(random(1, 7));
    if (r == 1) {
      fruit.addImage(appleImage);
      appleGroup.add(fruit);
    } else if (r == 2) {
      fruit.addImage(bananaImage);
      fruit.scale = 0.5;
      bananaGroup.add(fruit);
    } else if (r == 3) {
      fruit.addImage(pineappleImage);
      fruit.scale = 0.5;
      pineappleGroup.add(fruit);
    } else if (r == 4) {
      fruit.addImage(watermelonImage);
      watermelonGroup.add(fruit);
    } else if (r == 5) {
      fruit.addImage(strawberryImage);
      strawberryGroup.add(fruit);
    } else if (r == 6) {
      fruit.addImage(orangeImage);
      orangeGroup.add(fruit);
    } else if (r == 7) {
      fruit.addImage(pearImage);
      fruit.scale = 0.5;
      pearGroup.add(fruit);
    }
    fruit.y = Math.round(random(50, 340));
    fruit.velocityX = -7;
    fruit.setLifetime = 200;
  }
}

function Enemy() {
  if (World.frameCount % 1000 === 0) {
    monster = createSprite(400, 200, 20, 20);
    monster.addAnimation("moving", monsterImage);
    monster.y = Math.round(random(100, 300));
    monster.velocityX = -8;
    monster.setLifetime = 50;
    enemyGroup.add(monster);
  }
}

function fruit_1() {
  fruit1 = createSprite(0, Math.round(random(20, 500)), 10, 10);
  fruit1.addImage("fruit1", fruit1);
  fruit1.scale = 0.1;
  fruit1.velocityX = 3;
  fruit1.lifetime = 200;
  fruitGroup.add(fruit1);
}

function fruit_2() {
  fruit2 = createSprite(0, Math.round(random(20, 500)), 10, 10);
  fruit2.addImage("fruit2", fruit2);
  fruit2.scale = 0.1;
  fruit2.velocityX = 3;
  fruit2.lifetime = 200;
  fruitGroup.add(fruit2);
}

function fruit_3() {
  fruit3 = createSprite(0, Math.round(random(20, 500)), 10, 10);
  fruit3.addImage("fruit3", fruit3);
  fruit3.scale = 0.1;
  fruit3.velocityX = 3;
  fruit3.lifetime = 200;
  fruitGroup.add(fruit3);
}

function fruit_4() {
  fruit4 = createSprite(0, Math.round(random(20, 500)), 10, 10);
  fruit4.addImage("fruit4", fruit4);
  fruit4.scale = 0.1;
  fruit4.velocityX = 3;
  fruit4.lifetime = 200;
  fruitGroup.add(fruit4);
}
