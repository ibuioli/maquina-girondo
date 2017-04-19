//GRAFICAS//
public void startApp() {
  pushStyle();
  noStroke();
  fill(10, 8, 0, map(posxEl, width, map(height, 480, 1280, 100, 220), 120, 0) );
  ellipse(posxEl-map(height, 480, 1280, 50, 110), height-map(height, 480, 1280, 80, 160), map(height, 480, 1280, 50, 110), map(height, 480, 1280, 50, 110));
  popStyle();

  posxEl = lerp(posxEl, map(height, 480, 1280, 100, 220), map(height, 480, 1280, 0.05, 0.1));
  if (posxEl < map(height, 480, 1280, 100, 220)+2) {
    posxEl = width;
  }
}

public void loader() {
  pushStyle();
  int r = (int)map(height, 480, 1280, 50, 100);
  fill(10, 8, 0, 200);
  textAlign(CENTER, CENTER);
  textSize(map(height, 480, 1280, 22, 36));
  textLeading(map(height, 480, 1280, 22, 36));
  text("Máquina\nGirondo", width/2, height/2+r/2);
  noFill();
  strokeWeight(map(height, 480, 1280, 3, 8));
  strokeCap(SQUARE);
  stroke(10, 8, 0, 70);
  arc(width/2, height/2-r/2, r, r, 0, TWO_PI);
  stroke(10, 8, 0, 250);
  arc(width/2, height/2-r/2, r, r, 0, frameCount/TWO_PI % 10);
  popStyle();
}