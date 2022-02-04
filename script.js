
let addbtn = document.querySelector(".add-btn");
let addFlag = false;
let modalCont = document.querySelector(".modal-cont");



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