function monsterData (numMonsters, page) {
    fetch(`http://localhost:3000/monsters/?_limit=${numMonsters}&_page=${page}`).then(res => res.json()).then(json => json.forEach(renderMonster))
}

renderForm();
monsterData(50, 10);
let currentPage = 1;

function renderMonster(monster){
    const li = document.createElement('li')
    const pDesc = document.createElement('p')
    const pAge = document.createElement('p')
    
    li.textContent = monster.name
    pDesc.textContent = monster.description
    pAge.textContent = monster.age

    li.append(pDesc, pAge)
    document.querySelector('#monster-container').append(li)
}

function renderForm() {
    
    let formMonster = document.createElement('form')
    formMonster.setAttribute('name', 'monster')
    formMonster.setAttribute('type', 'input')
    
    let nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('name', 'monsterName')
    nameInput.setAttribute('id', 'monsterNameInput')
    

    let ageInput = document.createElement('input')
    ageInput.setAttribute('type', 'text')
    ageInput.setAttribute('name', 'monsterAge')
    ageInput.setAttribute('id', 'monsterAge')
    

    let descInput = document.createElement('input')
    descInput.setAttribute('type', 'text')
    descInput.setAttribute('name', 'monsterDesc')
    descInput.setAttribute('id', 'monsterDesc')

    let subInput = document.createElement('input')
    subInput.setAttribute('type', 'submit')
    subInput.setAttribute('name', 'monsterSubmit')
    subInput.setAttribute('id', 'monsterSubmit')
    subInput.setAttribute('value', 'Create monster' )

    formMonster.append(nameInput, ageInput, descInput, subInput)
    document.querySelector('#create-monster').append(formMonster)
    
    formMonster.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e)
    const monster = {
        name: e.target.monsterName.value,
        age: e.target.monsterAge.value,
        description: e.target.monsterDesc.value
    }
    renderMonster(monster);
    }
    )

}

document.querySelector('#back').addEventListener('click', () => {
    document.querySelector('#monster-container').innerHTML = '';
    currentPage -= 1
    monsterData(50, currentPage)
}
)

document.querySelector('#forward').addEventListener('click', () => {
    document.querySelector('#monster-container').innerHTML = '';
    currentPage += 1
    monsterData(50, currentPage)
}
)