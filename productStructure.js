const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

module.exports = () => {
  const result = {};

  products.forEach(item => {
    const [cor, tamanho] = item.split('-');

    if (result[cor]) {
      result[cor][tamanho] = result[cor][tamanho] ? result[cor][tamanho] + 1 : 1;
    } else {
      result[cor] = { [tamanho]: 1 };
    }
  });

  return result;
};