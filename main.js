let wrapperRef = document.querySelectorAll('.wrapper')
let oneCentInputRef = document.querySelector('#oneCent')
let oneCentTotalRef = document.querySelector('#oneCentTotal')
let twoCentsInputRef = document.querySelector('#twoCents')
let twoCentsTotalRef = document.querySelector('#twoCentsTotal')
let fiveCentsInputRef = document.querySelector('#fiveCents')
let fiveCentsTotalRef = document.querySelector('#fiveCentsTotal')
let twentyCentsInputRef = document.querySelector('#twentyCents')
let twentyCentsTotalRef = document.querySelector('#twentyCentsTotal')
let fiftyCentsInputRef = document.querySelector('#fiftyCents')
let fiftyCentsTotalRef = document.querySelector('#fiftyCentsTotal')
let oneEuroInputRef = document.querySelector('#oneEuro')
let oneEuroTotalRef = document.querySelector('#oneEuroTotal')
let twoEurosInputRef = document.querySelector('#twoEuros')
let twoEurosTotalRef = document.querySelector('#twoEurosTotal')
let fiveEurosInputRef = document.querySelector('#fiveEuros')
let fiveEurosTotalRef = document.querySelector('#fiveEurosTotal')
let tenEurosInputRef = document.querySelector('#tenEuros')
let tenEurosTotalRef = document.querySelector('#tenEurosTotal')
let fiftyEurosInputRef = document.querySelector('#fiftyEuros')
let fiftyEurosTotalRef = document.querySelector('#tenEufiftyEuros')
let hundredEurosInputRef = document.querySelector('#hundredEuros')
let hundredEurosTotalRef = document.querySelector('#hundredEurosTotal')
let resultRef = document.querySelector('#result')



// console.log(wrapperRef[0])


// for (let item of wrapperRef) {
//   console.log(item.childNodes[8])
// }


//importando o data-money
//importante lembrar que wrapperRef não é um array ele é uma NODELIST o map não vai funcionar

// const wrapperMap = wrapperRef.forEach(function (capture) {
//   console.log(capture.dataset.money)
// })

//5- Soma o total
function sum() {
  let total = 0;

  for (let sumTotal of wrapperRef) {
    let turnNumber = Number(sumTotal.childNodes[7].innerHTML)

    total = total + turnNumber

  }
  resultRef.innerHTML = total.toFixed(2)
}

//4- Imprime na tela o resulatado parcial
function printMutiplication(numberMultiplication, wherePrint) {

  wherePrint.innerHTML = `${numberMultiplication.toFixed(2)}`

}

// 3- multiplica
function multiplication(money, howMany, where) {
  let multiplication = money * howMany
  printMutiplication(multiplication, where)
}

//2- ler os inputs
function readInput() {
  wrapperRef.forEach(function (div) {
    let money = div.dataset.money
    let howMany = div.childNodes[3].value
    let where = div.childNodes[7]

    multiplication(money, howMany, where)
  })
}

//começa aqui: 'escutando' as teclas
wrapperRef.forEach(function (array) {
  array.addEventListener('keyup', readInput)
  array.addEventListener('keyup', sum)
})

//mapeando o wrapper map
