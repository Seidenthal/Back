function calcularFatorial(n) {
  if (n === 0) return 1;
  return n * calcularFatorial(n - 1);
}

function repetirMensagem(mensagem, vezes) {
  return mensagem.repeat(vezes);
}

function calcularOperacao(a, b, operacao) {
  switch (operacao) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      throw new Error('Operação inválida');
  }
}

function gerarTabuada(n) {
  let tabuada = [];
  for (let i = 1; i <= 10; i++) {
    tabuada.push(n * i);
  }
  return tabuada;
}

function inverterNumero(numero) {
  return parseInt(numero.toString().split('').reverse().join(''), 10);
}

function contarVogais(str) {
  const vogais = 'aeiouAEIOUáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛãõÃÕäëïöüÄËÏÖÜ';
  let contador = 0;
  for (let char of str) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  return contador;
}

function verificarSequencia(sequencia) {
  const pilha = [];
  const pares = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < sequencia.length; i++) {
    const char = sequencia[i];
    if (pares[char]) {
      pilha.push(char);
    } else {
      const topo = pilha.pop();
      if (pares[topo] !== char) {
        return false;
      }
    }
  }
  return pilha.length === 0;
}

function gerarListaAleatoria(n) {
  const nomes = ['Ana', 'Carlos', 'Mariana', 'Pedro', 'João'];
  let lista = [];

  for (let i = 0; i < n; i++) {
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    lista.push(nomeAleatorio);
  }
  return lista;
}

function calcularMediaIdades(lista) {
  let somaIdades = 0;
  lista.forEach((item) => (somaIdades += item.idade));
  return somaIdades / lista.length;
}

function ordenarPorAtributo(lista, atributo) {
  return lista.sort((a, b) => {
    if (a[atributo] < b[atributo]) return -1;
    if (a[atributo] > b[atributo]) return 1;
    return 0;
  });
}

module.exports = {
  verificarSequencia,
  gerarListaAleatoria,
  calcularMediaIdades,
  ordenarPorAtributo,
  calcularFatorial,
  repetirMensagem,
  calcularOperacao,
  gerarTabuada,
  inverterNumero,
  contarVogais,
};
