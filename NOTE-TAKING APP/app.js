// console.log('WOrking');
const nForm = document.querySelector("#noteTakingForm");
const tDisplay = document.querySelector("table");
const cDiv = document.querySelector('#carrier');


nForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const noteText = document.querySelector("#noteText");

    let noteTextInput = noteText.value;

    let tr = document.createElement('tr');
    tr.setAttribute('style', 'background:white; height:30px;');
    let button = document.createElement('button');
    button.textContent = "View Details";
    button.id = "myBtn";
    button.className = "myBtn";

    button.setAttribute('style', 'background: blue; border-radius:5px; height:12px;')

    tr.innerHTML = `
        <td style='width: 80%'>
           <ul>
              <li>${noteTextInput} </li>
            </ul>
        </td>

    `;
    tr.className = "display";
    let delButton = document.createElement('td');
    delButton.id = 'delButton';
    delButton.innerHTML = `<button style="background:red">&times;</button>`;


    if (noteTextInput !== "") {
        tr.appendChild(button);
        tr.appendChild(delButton);
        tDisplay.appendChild(tr);
        noteText.value = "";
    } else {
        document.querySelector("#submit").disable = true;
    }

    //Individual delete button
    delButton.addEventListener('click', function() {
        tr.remove();
    })

    // //MODAL CODE
    // Get the button that opens the modal

    button.addEventListener('click', function() {
        cDiv.innerHTML = ``
        let div = document.createElement('div');
        div.id = 'myModal';
        div.className = 'modal';
        div.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>${noteTextInput}</p>
        </div>
    `;
        cDiv.appendChild(div);

        // Get the modal
        var modal = document.getElementById("myModal");

        //Open the button when the user clicks on the button
        modal.style.display = "block";

        // var btn = document.querySelector("#myBtn");

        // Get the <span> element that closes the modal
        var close = document.getElementsByClassName("close")[0]; //Index 0

        // When the user clicks on <span> (x), close the modal
        close.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })

    const delAll = document.getElementById("clearAll");

    delAll.addEventListener('click', function(ev) {
        ev.preventDefault();
        let remAll = document.querySelector('.display');
        remAll.remove()
    })
})