const ms = require('milsymbol');

// Grab arguments from the process
const sidc = process.argv[2];
const customSize = process.argv[3]; // Capture the next argument

if (!sidc) {
  console.error('Error: Please provide a valid SIDC string.');
  console.error('Usage: milsymbol-cli <SIDC> [size]');
  process.exit(1);
}

// Check if a custom size was passed, otherwise default to 48
let finalSize = 48;
if (customSize) {
  const parsedSize = parseInt(customSize, 10);
  if (!isNaN(parsedSize) && parsedSize > 0) {
    finalSize = parsedSize;
  } else {
    console.error(`Warning: "${customSize}" is not a valid size. Using default size (48).`);
  }
}

let options = {
  size: finalSize
};

try {
  const symbol = new ms.Symbol(sidc, options);
  const svgString = symbol.asSVG();
  process.stdout.write(svgString);
} catch (error) {
  console.error('Generation Error:', error.message);
  process.exit(1);
}