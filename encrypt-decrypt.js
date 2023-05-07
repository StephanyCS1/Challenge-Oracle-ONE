document.addEventListener("DOMContentLoaded", function() {
  const encryptBtn = document.getElementById("btnEnc");
  const textOutput = document.getElementById("result");
  const decBtn = document.getElementById("btnDec");
  const copyButton = document.querySelector(".copyButton");

  encryptBtn.addEventListener('click', () =>{
    const textInput = document.getElementById("textInput").value;
    const encrypTxt = encrypt(textInput);
    textOutput.innerHTML = encrypTxt
    copyButton.dataset.clipboardText = encrypTxt;

  });
  decBtn.addEventListener('click', () =>{
    const textInput = document.getElementById("textInput").value;
    const decrypTxt = decrypt(textInput);
    textOutput.innerHTML = decrypTxt;
    copyButton.dataset.clipboardText = decrypTxt;
  });

  copyButton.addEventListener('click', () => {
    const clipboardText = copyButton.dataset.clipboardText;
    copy(clipboardText);
    textInput.value = ""; 
    textOutput.innerHTML = "";
  });

function encrypt(sentence) {
  let stringSentence = sentence;
  let encryptWord = "";
  for (let i = 0; i < stringSentence.length; i++) {

    let word = stringSentence[i];
    switch (word) {

      case 'a':
        encryptWord += "ai";
        break;
      case 'e':
        encryptWord += "enter";
        break;
      case 'i':
        encryptWord += "imes";
        break;
      case 'o':
        encryptWord += "ober";
        break;
      case 'u':
        encryptWord += "ufat";
        break;
      default:
        encryptWord += word;
        break;
    }
  }
  return encryptWord;
}


function decrypt(sentence) {
  const sentenceEncrypt = sentence.toString();
  let decryptWord = "";

  const wordMappings = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
  };

  for (let i = 0; i < sentenceEncrypt.length; i++) {
    let wordFound = false;

    for (const encrypt in wordMappings) {
      if (sentenceEncrypt.startsWith(encrypt, i)) {
        decryptWord += wordMappings[encrypt];
        i += encrypt.length - 1;
        wordFound = true;
        break;
      }
    }

    if (!wordFound) {
      decryptWord += sentenceEncrypt[i];
    }
  }

  return decryptWord;
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Texto copiado al portapapeles: " + text);
  } catch (err) {
    console.error("Error al copiar el texto al portapapeles: ", err);
  }
}

});