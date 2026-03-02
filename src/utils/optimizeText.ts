
const optimizeText = (text:string, length: number):string => {
  if (!text) return "";

  const words = text.trim().split(/\s+/);

  if (length >= words.length) {
    return text;
  }

  return words.slice(0, length).join(" ") + "...";
};

export default optimizeText;
