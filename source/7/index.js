const data = [
    {
        "id": 1,
        "email": "simmy@ureca.im",
        "name": "심소망",
        "description": "웹 프론트엔드 개발자",
    },
    {
        "id": 2,
        "email": "emily@ureca.im",
        "name": "염혜지",
        "description": "리액트 개발자",
    },
    {
        "id": 3,
        "email": "la@ureca.im",
        "name": "라정우",
        "description": "백엔드 개발자",
    },
    {
        "id": 4,
        "email": "andy@ureca.im",
        "name": "한장현",
        "description": "인프라 관리자",
    },
]

const $table = document.getElementById('table')

const handleItemClick = e => {
    const target = +e.target.parentElement.childNodes[0].innerText
    const matchedData = data.find(it => it.id === target).name
    alert(`${matchedData} 회원입니다.`)
}

data.map(item => {
    const tr = document.createElement('tr')
    const tdId = document.createElement('td')
    const tdEmail = document.createElement('td')
    const tdName = document.createElement('td')
    const tdDescription = document.createElement('td')

    tr.appendChild(tdId)
    tr.appendChild(tdEmail)
    tr.appendChild(tdName)
    tr.appendChild(tdDescription)

    tdId.innerText = item.id
    tdEmail.innerText = item.email
    tdName.innerText = item.name
    tdDescription.innerText = item.description

    $table.appendChild(tr)

    tr.addEventListener('click', handleItemClick)
})