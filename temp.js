function encodeRLE(text) {
  let encoded = "";
  let count = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      count++;
    } else {
      encoded += count + text[i];
      count = 1;
    }
  }
  return encoded;
}

function decodeRLE(encodedText) {
  let decoded = "";
  let count = "";
  for (let i = 0; i < encodedText.length; i++) {
    if (!isNaN(parseInt(encodedText[i]))) {
      count += encodedText[i];
    } else {
      let num = parseInt(count);
      decoded += encodedText[i].repeat(num);
      count = "";
    }
  }
  return decoded;
}
