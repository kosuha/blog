const buttonGet = document.querySelector('#buttonGet');
const buttonPost = document.querySelector('#buttonPost');

buttonGet.addEventListener('click', () => {
    get();
});

buttonPost.addEventListener('click', () => {
    post();
});

async function get() {
    let response = await fetch('/get', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });

    let result = await response.json();
    console.log(result, typeof(result));
}

async function post() {
    let user = {
        name: 'John',
        surname: 'Smith'
    };

    let response = await fetch('/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    let result = await response.json();
    console.log(result, typeof(result));
}