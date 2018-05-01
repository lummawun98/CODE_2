// make an empty array to hold our tiles
let tiles = [];
let tileSize = 400;

function preload() {
  // let table = loadTable('https://dl.dropboxusercontent.com/s/cgrl2ekchqrf9hp/Untitled%20form.csv?dl=1&raw=1', 'csv', 'header');
  let table = loadTable('https://dl.dropboxusercontent.com/s/mrq421mkmg31wng/survey.csv?dl=1&raw=1', 'csv', 'header');
  Tile.prototype.table = table;
}

function setup() {
  tiles.push(new JBTile(0, 0, tileSize));

  createCanvas(tileSize * 1, tileSize * 1);

  noLoop();
}

function draw() {
  background(249, 245, 121);
  // for (var i = 0; i < tiles.length; i++) {
  //   tiles[i].update();
  //   tiles[i].display();
  // }

  noStroke();
  fill(255);
  rect(36, 300, 330, 3); // 1 from bottom
  rect(36, 250, 330, 3); // 2 from bottom
  rect(36, 200, 330, 3); // 3 from bottom
  rect(36, 150, 330, 3); // 4 from bottom
  rect(36, 100, 330, 3); // 5 from bottom

  //shoes
  fill(183, 177, 237);
  rect(36, 252, 50, 47);

  //outerwear
  fill(186, 237, 177);
  rect(105, 149, 50, 149);

  //bottoms
  fill(237, 177, 224);
  rect(175, 280, 50, 23);

  //tops
  fill(177, 232, 237);
  rect(245, 280, 50, 23);

  //accessories 
  fill(237, 177, 177);
  rect(316, 183, 50, 117);

  //header
  fill(180, 180, 180);
  textSize(22);
  text('If you could be a clothing item,', 53, 30);
  text(' what would you be?', 100, 57);

  //footer
  
  textSize(22);
  text('Clothing Item', 133, 350);

   //numbers 

  textSize(22);
  text('0', 12, 310);
  text('2', 12, 255);
  text('4', 12, 205);
  text('6', 12, 155);
  text('8', 12, 105);
  

}


