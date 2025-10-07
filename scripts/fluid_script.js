const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const Nx = 2 * 400,
  Ny = 4 * 120;
const scale = 1; // pixels per grid cell
canvas.width = Nx * scale;
canvas.height = Ny * scale;
