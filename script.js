//    || = ou 

const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
//nome de variavel "nlwsetup" não pode começar com numero e não pode ter espaço. sempre que houver espaço colocar a proxima palavra em letra maiuscula, e não pode ter caracteres ex: ; :
const button = document.querySelector('header button')

button.addEventListener('click', add)
//acima ta dizendo que quando o comando ouvir o click ele vai add 
// mas add o q? 'function add' 
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia já incluso")
        return    //return ele para o codigo e não vai p a proxima linha.

    }

    alert('Adicionado com sucesso 👍')
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
    
}


//const data = {
//  run: ['01-01','01-02','01-06','01-7','01-08'],
//  game: ['01-03'],
 // dev: ['01-02']
//}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()