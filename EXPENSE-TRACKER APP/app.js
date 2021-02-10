// alert("WORKING");
const expForm = document.getElementById("expTrackerForm");
const tDisplay = document.getElementById("tbody");

expForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const expName = document.getElementById("text");
    const expDate = document.getElementById("date");
    const expAmount = document.getElementById("amount");

    let expNameInput = expName.value;
    let expDateInput = expDate.value;
    let expAmountInput = expAmount.value;

    let tr = document.createElement('tr');
    tr.className = 'expTr';
    var button = document.createElement('button');
    button.innerHTML = " &times; ";
    button.setAttribute('style', 'margin:10px; background-color:red; width:30px ');

    tr.innerHTML = `
        <td>${expNameInput}</td>
        <td>${expDateInput}</td>
        <td> &#8358;${expAmountInput}</td>

    `;

    button.addEventListener('click', () => {
        tr.remove();
    })

    if (expNameInput !== "" && expDateInput !== "" && expAmountInput !== "") {
        tr.appendChild(button);
        tDisplay.appendChild(tr);
        expName.value = "", expDate.value = "", expAmount.value = "";

    } else {
        // // DIDN'T GET MY ERROR DIV LOGIC... 
        // let div = document.createElement('div');
        // div.innerText = "Fill in All Inputs!";
        // expName.value = "", expDate.value = "", expAmount.value = "";
        // div.className = "errorCatch";

        // let but = document.querySelector('form');
        // but.insertAdjacentElement('afterend', div);

        // //If a user clicks on the error pop-up the page reloads OR the pop-up is deleted
        // div.addEventListener('click', () => {
        //     div.remove(); //Removes the error pop-up
        // })

        document.querySelector('#submit').disabled;

    }

    // Delete All Code Logic
    const del = document.getElementById("delete");
    del.addEventListener('click', function(evt) {
        evt.preventDefault();
        let delAll = document.getElementById("tbody");
        if (!delAll || expNameInput === "" || expDateInput === "" || expAmountInput === "") {
            del.disable = 'true';
        } else {
            delAll.remove();
            window.location.reload();

        }

    })

})