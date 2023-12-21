const extendHex = (shortHex) => {
  // write your code here
	
  shortHex = shortHex.replace(/^#/, '');

  // Split the short hex code into color components
  const r = shortHex[0];
  const g = shortHex[1];
  const b = shortHex[2];

  // Extend each color component to get the full hex code
  const fullHex = `#${r}${r}${g}${g}${b}${b}`;

  return fullHex.toUpperCase(); // Convert to uppercase for consistency
}


	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
