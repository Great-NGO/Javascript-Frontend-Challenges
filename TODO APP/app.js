console.log("A");

const todoForm = document.getElementById("todoForm");
const display = document.getElementById("display");

todoForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    const todoText = document.getElementById("text");
    let tInput = todoText.value;
    let li = document.createElement('li');

    var button = document.createElement('button');
    button.id = 'delX';
    button.innerHTML = "&times;"
    button.setAttribute('style', 'height: 15px; font-size: 12px');
    li.innerHTML = `<span> ${tInput} </span>`;

    button.addEventListener('click', () => {
        li.remove();
    })

    if (tInput && tInput !== "") {
        li.appendChild(button);
        display.appendChild(li);
        todoText.value = '';
    } else {
        document.querySelector('#submit').disabled;

    }

    // Delete All Code Logic
    const del = document.getElementById("delete");
    del.addEventListener('click', function(evt) {
        evt.preventDefault();
        let delAll = document.getElementById("display");

        if (!delAll || tInput === "") {
            del.disabled;
        } else {
            delAll.remove();
            window.location.reload();

        }
    })

})