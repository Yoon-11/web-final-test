const name = prompt("이름을 입력하세요.", "input your name");
alert(`환영합니다. ${name}님`);

let level = prompt("당신의 운동 수행 능력을 알려주세요.(초심자 or 중급자 or 상급자)");

switch (level) {
    case '초심자':
        console.log('소중한 정보 감사합니다.'); break;
    case '중급자':
        console.log('소중한 정보 감사합니다.'); break;
    case '상급자':
        console.log('소중한 정보 감사합니다.'); break;
    default:
        console.log('다음에 입력해주세요.'); break;
}

function addInf() {
    const result = document.getElementById('list');
    const newAddr = document.getElementsByName("name")[0].value + ' , ' + document.getElementsByName('tel')[0].value;
    const item = document.createElement('li');
    const txt = document.createTextNode(newAddr);
    item.appendChild(txt);
    result.appendChild(item);
}


function resetInf() {
    document.getElementById('list').innerHTML = "";
}


