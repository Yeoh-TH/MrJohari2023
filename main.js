import './style.css'

function plot() {
  const exp = document.getElementById("smile").value;
  const xValues = [];
  const yValues = [];

  for (let x = 0; x <= 100; x += 0.1) {
    xValues.push(x);
    yValues.push(eval(exp));
}
const data = [{x:xValues, y:yValues, mode:"lines"}];
const layout = {title: "y = " + exp};
Plotly.newPlot("graph", data, layout);
}

