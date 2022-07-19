const requestOrigin = 'http://localhost:8080/estoque';


function updateList1() {
    
    fetch(requestOrigin, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            let htmlCode = '';

            for (p of data) {
                htmlCode += '<tr>';
                htmlCode += '<td>' + p["id"] + '</td>';
                htmlCode += '<td>' + p["nome"] + '</td>';
                htmlCode += '<td>' + p["quantidade"] + '</td>';
                htmlCode += '<td>' + p["valor"] + '</td>';
                
                htmlCode += '</tr>';

            }
            document.getElementById("tableBody").innerHTML = htmlCode;
            const ValorRecebido = document.getElementById("InputID");
            
        })
}

function clearForm() {
    document.getElementById("inputCodigo").value = null;
    document.getElementById("inputNome").value = null;
    document.getElementById("inputQuantidade").value = null;
    document.getElementById("inputValor").value = null;
}


function insert() {
    fetch(requestOrigin, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(getInputValues()),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Informar se houve um erro ou atualizar a lista caso ocorra tudo certo
        if(data['success'] == true) {
            updateList();
        }
        else {
            console.log(data['error']);
        }
    })
}

function update() {
    fetch(requestOrigin, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(getInputValues()),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Informar se houve um erro ou atualizar a lista caso ocorra tudo certo
        if(data['success'] == true) {
            updateList();
        }
        else {
            console.log(data['error']);
        }
    })
}

function remove() {
    fetch(requestOrigin, {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(getInputValues()),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Informar se houve um erro ou atualizar a lista caso ocorra tudo certo
        if(data['success'] == true) {
            updateList();
        }
        else {
            console.log(data['error']);
        }
    })
}

function confirm() {
    switch (checkFormType()) {
        case 'insert':
            insert();
            break;
        case 'update':
            update();
            break;
        case 'remove':
            remove();
    }
}

function checkFormType() {
    radioInputs = document.querySelectorAll('input[name="radioInput"');

    for (const r of radioInputs) {
        if (r.checked) {
            return r.value;
        }
    }

    return '';
}

function getInputValues() {
    return obj = {
        id: document.getElementById("inputCodigo").value,
        nome: document.getElementById("inputNome").value,
        quantidade: document.getElementById("inputQuantidade").value,
        valor: document.getElementById("inputValor").value,
    }
}

function init() {

}

init();