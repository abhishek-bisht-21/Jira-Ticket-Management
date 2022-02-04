
let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let toolBoxColors = document.querySelectorAll(".color");

let colors = ["lightpink", "lightblue", "lightgreen", "black"]; // Colors array
let modalPriorityColor = colors[colors.length - 1]; // Black Color is fixed as our Default color

let addFlag = false;
let removeFlag = false;

// Lock and Unlock Icons
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

// Listener for modal priority coloring
allPriorityColors.forEach((colorElem, idx) => {
    colorElem.addEventListener("click", (e) => {
        allPriorityColors.forEach((priorityColorElem, idx) => {
            priorityColorElem.classList.remove("border");
        })
        colorElem.classList.add("border");

        modalPriorityColor = colorElem.classList[0];
    })
})


addBtn.addEventListener("click", (e) => {
    // Display Modal
    // Generate ticket

    // AddFlag, true -> Modal Display
    // AddFlag, False -> Modal None
    addFlag = !addFlag;
    if (addFlag) {
        modalCont.style.display = "flex";
    }
    else {
        modalCont.style.display = "none";
    }
})

// Adding Toggling feature to removeFlag variable on clicking remove Button
removeBtn.addEventListener("click", (e) => {
    removeFlag = !removeFlag;
    console.log(removeFlag);
})


modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key === "Shift") {
        createTicket(modalPriorityColor, textareaCont.value);
        addFlag = false;
        setModalToDefault();
    }
})

function createTicket(ticketColor, ticketTask, ticketID) {
    let id = ticketID || shortid();
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">#${id}</div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock">
            <i class="fas fa-lock"></i>
        </div>
    `;
    mainCont.appendChild(ticketCont);

    
    // Handling Ticket Removal inside create ticket
    handleRemoval(ticketCont, id);

 
}

// Handling Ticket Removal
function handleRemoval(ticket, id) {
    // removeFlag -> true -> remove
    ticket.addEventListener("click", (e) => {
        if (!removeFlag) return;

        let idx = getTikcetIdx(id);

        // DB removal
        ticketsArr.splice(idx, 1);
        let strTicketsArr = JSON.stringify(ticketsArr);
        localStorage.setItem("jira_tickets", strTicketsArr);
        
        ticket.remove(); //UI removal
    })
}


function setModalToDefault() {
    modalCont.style.display = "none";
    textareaCont.value = "";
    modalPriorityColor = colors[colors.length - 1];
    allPriorityColors.forEach((priorityColorElem, idx) => {
        priorityColorElem.classList.remove("border");
    })
    allPriorityColors[allPriorityColors.length - 1].classList.add("border");
}