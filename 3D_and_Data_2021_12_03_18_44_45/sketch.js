let detailY;
let cam;
let cammove = 0.004;
let table;
function preload() {
  table = loadTable("table.csv", "csv", "header");
}
function setup() {
  createCanvas(400, 400, WEBGL);
  detailY = createSlider(1, 16, 1);
  detailY.position(10, height + 5);
  detailY.style("width", "80px");
  cam = createCamera();
  cam.pan - 0.8;
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");

  print(table.getColumn("name"));
  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }
}
function draw() {
  background(200);

  ambientLight(20);

  pointLight(100, 250, 250, 100, 100, 50);
  cam.pan(cammove);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, 50);
  if (frameCount % 120 === 0) {
    cammove *= -1;
  }

  specularMaterial(250);
  shininess(50);
  rotateY(millis() / 1000);
  cylinder(20, 250, 20, 10);

  torus(30, 15);
  normalMaterial();
  box(50);
}
