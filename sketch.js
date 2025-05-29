function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let produtos = ['Milho', 'Soja', 'Trigo'];
let cultivoAtual = null;
let pontos = 0;
let tempo = 0;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(18);
}

function draw() {
  background(200);

  // Exibe informações sobre o cultivo e pontuação
  fill(0);
  text('Pontos: ' + pontos, width / 2, 30);
  
  text('Escolha um cultivo:', width / 2, height / 2 - 50);
  
  for (let i = 0; i < produtos.length; i++) {
    let x = width / 2 - 100 + (i * 200);
    rect(x - 50, height / 2, 100, 40);
    fill(0);
    text(produtos[i], x, height / 2 + 20);
  }
  
  if (cultivoAtual != null) {
    fill(0);
    text('Você escolheu ' + produtos[cultivoAtual], width / 2, height / 2 + 100);
    text('Tempo: ' + tempo, width / 2, height / 2 + 150);
    tempo++;
  //jogo sobre o agrinho da cidade ao campo;  
    // Simula a colheita
    if (tempo > 100) {
      pontos += 10;
      tempo = 0;
      cultivoAtual = null;
    }
  }
}

function mousePressed() {
  // Verifica qual botão foi pressionado para escolher o cultivo
  if (mouseY > height / 2 && mouseY < height / 2 + 40) {
    for (let i = 0; i < produtos.length; i++) {
      let x = width / 2 - 100 + (i * 200);
      if (mouseX > x - 50 && mouseX < x + 50) {
        cultivoAtual = i;
        tempo = 0;
      }
    }
  }
}
