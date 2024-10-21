class DDALine {
  constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
  }

  drawLine(x1, y1, x2, y2, color1, color2) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const steps = Math.max(Math.abs(dx), Math.abs(dy));

      const xIncrement = dx / steps;
      const yIncrement = dy / steps;

      const r1 = parseInt(color1.slice(1, 3), 16);
      const g1 = parseInt(color1.slice(3, 5), 16);
      const b1 = parseInt(color1.slice(5, 7), 16);

      const r2 = parseInt(color2.slice(1, 3), 16);
      const g2 = parseInt(color2.slice(3, 5), 16);
      const b2 = parseInt(color2.slice(5, 7), 16);

      const rIncrement = (r2 - r1) / steps;
      const gIncrement = (g2 - g1) / steps;
      const bIncrement = (b2 - b1) / steps;

      let x = x1;
      let y = y1;
      let r = r1;
      let g = g1;
      let b = b1;

      for (let i = 0; i <= steps; i++) {
          this.ctx.fillStyle = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
          this.ctx.fillRect(Math.round(x), Math.round(y), 1, 1);

          x += xIncrement;
          y += yIncrement;
          r += rIncrement;
          g += gIncrement;
          b += bIncrement;
      }
  }
}

// Пример использования
const canvasId = 'myCanvas';
const ddaLine = new DDALine(canvasId);

// Запрашиваем у пользователя координаты и цвета
const x1 = parseInt(prompt("Введите координату x1:"));
const y1 = parseInt(prompt("Введите координату y1:"));
const x2 = parseInt(prompt("Введите координату x2:"));
const y2 = parseInt(prompt("Введите координату y2:"));
const color1 = prompt("Введите цвет в формате HEX для начала линии (например, #FF0000):");
const color2 = prompt("Введите цвет в формате HEX для конца линии (например, #0000FF):");


ddaLine.drawLine(x1, y1, x2, y2, color1, color2);
