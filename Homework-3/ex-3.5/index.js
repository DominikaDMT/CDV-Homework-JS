const dotColorStroke = document.getElementById('dot-color-stroke');
const dotColorFill = document.getElementById('dot-color-fill');
const dotX = document.getElementById('dot-x');
const dotY = document.getElementById('dot-y');
const dotR = document.getElementById('dot-r');

const rectColorStroke = document.getElementById('rect-color-stroke');
const rectColorFill = document.getElementById('rect-color-fill');
const rectStartX = document.getElementById('rect-x-start');
const rectStartY = document.getElementById('rect-y-start');
const rectH = document.getElementById('rect-height');
const rectW = document.getElementById('rect-width');

const lineColor = document.getElementById('line-color');
const lineStartX = document.getElementById('line-x-start');
const lineStartY = document.getElementById('line-y-start');
const lineEndX = document.getElementById('line-x-end');
const lineEndY = document.getElementById('line-y-end');

const dotBtn = document.getElementById('dot-button');
const rectBtn = document.getElementById('rect-button');
const lineBtn = document.getElementById('line-button');

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const draw = (e) => {
  e.preventDefault();
  const type = e.target.id.split('-')[0];
  console.log(type);

  if (type === 'dot') {
    drawSomething(
      type,
      dotColorFill.value,
      dotColorStroke.value,
      dotX.value,
      dotY.value,
      0,
      0,
      dotR.value
    );
  } else if (type === 'rect') {
    drawSomething(
      type,
      rectColorFill.value,
      rectColorStroke.value,
      rectStartX.value,
      rectStartY.value,
      rectW.value,
      rectH.value
    );
  } else if (type === 'line') {
    drawSomething(
      type,
      0,
      lineColor.value,
      lineStartX.value,
      lineStartY.value,
      lineEndX.value,
      lineEndY.value
    );
  }
};

const drawSomething = (
  type,
  colorFill,
  colorStroke,
  startX,
  startY,
  endX,
  endY,
  r = 0
) => {
  console.log(type, colorFill, colorStroke, startX, startY, endX, endY);

  ctx.lineWidth = 3;
  ctx.fillStyle = colorFill;
  ctx.strokeStyle = colorStroke;

  ctx.beginPath();
  ctx.moveTo(startX, startY);

  if (type === 'dot') {
    ctx.arc(startX, startY, r, 0, 2 * Math.PI);
    if (colorFill !== '#FFFFFF') {
      ctx.fill();
    }
    if (colorStroke !== '#FFFFFF') {
      ctx.stroke();
    }
  } else if (type === 'rect') {
    console.log(type, colorFill, colorStroke, startX, startY, endX, endY);
    if (colorFill !== '#FFFFFF') {
      ctx.fillRect(startX, startY, endX, endY);
    }
    if (colorStroke !== '#FFFFFF') {
      ctx.strokeRect(startX, startY, endX, endY);
    }
  } else if (type === 'line') {
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }

  ctx.closePath();
};

dotBtn.addEventListener('click', draw);
rectBtn.addEventListener('click', draw);
lineBtn.addEventListener('click', draw);