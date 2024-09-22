export const maskText = (text: string, pattern: string): string => {
  let result = "";
  let textIndex = 0;

  for (let i = 0; i < pattern.length; i++) {
    if (textIndex >= text.length) break;

    if (pattern[i] === "#") {
      result += text[textIndex];
      textIndex++;
    } else {
      result += pattern[i];
    }
  }

  return result;
};
