function callAPI() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}

async function CallApi_async() {
    let api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let apiJson = await api.json();
    console.log(apiJson.parameter);
}