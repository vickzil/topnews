
const API_KEY = '784b2a36b3514da9a742a40b129f28ca';


// GENERATE URL
export const generateUrl =(path, query) => {
  const urlPath = "http://newsapi.org/v2" + path + query + "&apiKey=" + API_KEY;
  return urlPath;
}

// DATE/TIME FORMAT
export const removeTimeZone = (datestring) => {
  let finalDate = "";

  if (datestring.split("+").length > 1) {
    let b = datestring.split("T");
    finalDate = b[0];
  } else {
    let b = datestring.split("T");

    if (b.length > 1) {
      b.pop();
      finalDate = b.join("-");
    }
  }

  return finalDate;
}

// CUT STRING FUNCTION
export const cutString = (text, max) => {
  return text && text.length > max ?
    text.slice(0, max).split(" ").slice(0, -1).join(" ") :
    text;
}

// CUT STRING FUNCTION
export const getFirstWord = (text) => {
  const words = text.split(' ');
  return words[0].toLowerCase();
}
