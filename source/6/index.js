const data = [
    {
        "id": 1,
        "title": "서비스 이용 약관",
        "content": "서비스 이용 약관 동의 내용",
        "description": "",
        "isRequired": true
    },
    {
        "id": 2,
        "title": "개인정보 수집 및 이용 약관",
        "content": "개인정보 수집 및 이용 약관 동의 내용",
        "description": "",
        "isRequired": true
    },
    {
        "id": 3,
        "title": "광고성 정보 수신",
        "content": "광고성 정보 수신 동의 내용",
        "description": "다양한 프로모션 정보를 보내드립니다.",
        "isRequired": false
    }
]

const $table = document.getElementById('table')

data.map(item => {
    const tr = document.createElement('tr')
    const tdId = document.createElement('td')
    const tdTitle = document.createElement('td')
    const tdContent = document.createElement('td')
    const tdDesecription = document.createElement('td')
    const tdIsRequired = document.createElement('td')

    tr.appendChild(tdId)
    tr.appendChild(tdTitle)
    tr.appendChild(tdContent)
    tr.appendChild(tdDesecription)
    tr.appendChild(tdIsRequired)

    tdId.innerText = item.id
    tdTitle.innerText = item.title
    tdContent.innerText = item.content
    tdDesecription.innerText = item.description
    tdIsRequired.innerText = item.isRequired ? "필수" : "선택"

    $table.appendChild(tr)
})