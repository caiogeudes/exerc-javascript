// 1 . Soma de dois números: Escreva um programa que receba dois números como entrada e exiba a soma deles.
let num1 = 6
let num2 = 5

let soma = num1 + num2

console.log("(Questão 1) A soma dos dois números é: " + soma)

// 2 . Verificar número par ou ímpar: Crie uma função que determine se um número é par ou ímpar.
function verificacao() {
    if (num1 % 2 == 0) {
        console.log("(Questão 2) É par")
    } else {
        console.log("(Questão 2) É ímpar")
    }
    return num1
}
verificacao(num1)

// 3 . Calcular área de um retângulo: Implemente uma função que calcule a área de um retângulo com base na largura e altura fornecidas.
function areaRetangulo(altura, largura) {
    let area = altura * largura
    return area
}

area = areaRetangulo(3, 2)
console.log("(Questão 3) A área do retângulo é: " + area)

// 4 . Verificar se um número é positivo, negativo ou zero: Escreva um programa que determine se um número é positivo, negativo ou zero.
if (num1 > 0) {
    console.log("(Questão 4) É positivo")
} else if (num1 < 0) {
    console.log("(Questão 4) É negativo")
} else {
    console.log("(Questão 4) É zero")
}

// 5 . Converter Celsius para Fahrenheit: Crie uma função que converta uma temperatura em graus Celsius para Fahrenheit.
function conversorTemperatura(fahrenheit) {
    let temperaturaCelsius = (fahrenheit - 32) / 1.8
    return temperaturaCelsius
}

temperaturaCelsius = conversorTemperatura(224)
console.log("(Questão 5) A temperatura em Celsius é: " + temperaturaCelsius)

// 6 . Contar ocorrências de um caractere em uma string: Implemente uma função que conte o número de ocorrências de um determinado caractere em uma string.
let contador = 0
function contadorCaracteres(string, caractere) {

    for (i = 0; i < string.length; i++) {
        if (string[i] === caractere) {
            contador++
        }
    }
    return contador
}
contadorCaracteres("Bobiça", "o")
console.log("(Questão 6) O número de vezes que 'o' repete é: " + contador)

// 7 . Gerar números aleatórios: Escreva um programa que gere um número aleatório entre 1 e 10.
let numeroAleatorio = Math.floor(Math.random() * 10) + 1
console.log("(Questão 7) O número aleatório é: " + numeroAleatorio)

// 8 . Calcular o máximo entre dois números: Implemente uma função que retorne o maior valor entre dois números fornecidos.
function maiorNumero(num1, num2) {
    let maiorNumero2 = Math.max(num1, num2)
    return maiorNumero2
}
maiorNumero2 = maiorNumero(2, 5)

console.log("(Questão 8) O maior número é: " + maiorNumero2)

// 9 . Verificar se um número é múltiplo de outro: Escreva um programa que verifique se um número é múltiplo de outro.
function multiplo(numero1, numero2) {
    let éMultiplo = numero1 % numero2 == 0
    if (éMultiplo) {
        console.log("(Questão 9) É multiplo")
    } else {
        console.log("(Questão 9) Não é multiplo")
    }
    return éMultiplo
}
éMultiplo = multiplo(5, 2)

// 10 . Converter Polegadas para Centímetros: Escreva uma função que receba um valor em polegadas como parâmetro e retorne o equivalente em centímetros.
function conversorPolegadasCentimentros(polegadas) {
    let centimetros = polegadas * 2.54
    return centimetros
}
centimetros = conversorPolegadasCentimentros(5.8)

console.log("(Questão 10) O número que corresponde em centimetros é: " + centimetros)

