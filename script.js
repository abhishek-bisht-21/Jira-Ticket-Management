
let addbtn = document.querySelector(".add-btn");
let addFlag = false;
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont")



addbtn.addEventListener("click",(e) => {
	// Display Modal

	// Generate Ticket

	//AddFlag = true -> Modal have to be displayed
	//AddFlag = false -> Modal have to be hidden/removed
	addFlag = !addFlag;
	if(addFlag){
		modalCont.style.display = "flex";
	}else{
		modalCont.style.display = "none";
	}
})


// To pressing Shift Ticket will be generated
modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key === "Shift") {
        createTicket(modalPriorityColor, textareaCont.value);
        addFlag = false;
        setModalToDefault();
    }
})

// Repetitive work of creating ticket Handled
function createTicket(){
	let ticketCont = document.createElement("div");
	ticketCont.setAttribute("class", "ticket-cont");
	ticketCont.innerHTML  = `  <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">#${id}</div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock">
            <i class="fas fa-lock"></i>
        </div>`;
	mainCont.appendChild(ticketCont);


}