export default function validBraces(str) {

  if (str.length === 0) return 1
  let openBrace = ''

  for (const symbol of str) {     
    if (symbol === '<' || symbol === '[' || symbol === '(') openBrace = symbol

    if (symbol === '>') {
      if (openBrace === '[' || openBrace === '(') openBrace = ''
      if (openBrace === '<') return 1
    }

    if (symbol === ')') {
      if (openBrace === '<' || openBrace === '[') openBrace = ''
      if (openBrace === '(') return 1
    }

    if (symbol === ']') {
      if (openBrace === '<' || openBrace === '(') openBrace = ''
      if (openBrace === '[') return 1
    }
  }

  return 0;
}