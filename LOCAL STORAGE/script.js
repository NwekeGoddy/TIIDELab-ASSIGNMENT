


let internalUsers = JSON.parse(localStorage.getItem("users"))  ? JSON.parse(localStorage.getItem("users")) : [];

display();


function  add(){
   
    let newUser = {
        "name" : document.getElementById('name').value,
        "country" : document.getElementById('country').value,
        "tel" : document.getElementById('number').value, 
    }
    
    if( document.getElementById('name').value && document.getElementById('country').value && document.getElementById('number').value){
       
        internalUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(internalUsers));
        // display();
       

        alert("User Details Saved")
    }else{
        alert("Not saved: Input all parameters");
    }
}

  
function display(){

    if (internalUsers[0]!=null || internalUsers[0]!=undefined){

    JSON.parse(localStorage.getItem("users")).forEach((element,index) => {

        let node1 = 
        `
         <div class="details">
            <div class="username"><i class="bi bi-person-lines-fill"></i>  ${element.name}</div>
            <div class="country"><i class="bi bi-geo-fill"></i> ${element.country}</div>
            <div class="mobile"><i class="bi bi-telephone-fill"></i> ${element.tel}</div>
        </div>
        <div class="buttons">
            <button class="edit" onclick="edit(${index})">Edit</button>
            <button class="del" onclick="del(${index})">Delete</button>
        </div>`

        let eachDisplay = document.createElement("div");
        eachDisplay.classList.add("each-display")
        eachDisplay.innerHTML = node1;
        let display = document.querySelector(".display");
        display.appendChild(eachDisplay);        
  });
}
}
 
function del(index){

    let ans = prompt("Are you sure you want to delete user: (y/n)");

    if(ans === "y"){
        allElements = JSON.parse(localStorage.getItem("users"));
        allElements.splice(index, 1);
       
    
        localStorage.setItem("users", JSON.stringify(allElements));
        display();
    
        window.location.reload();
    }else{
        alert("God save you say I ask o")
    }  
}


function edit(index){

    allElements = JSON.parse(localStorage.getItem("users"));

    allElements[index].name = prompt("Enter new name:");
    allElements[index].country = prompt("Enter new country:");
    allElements[index].number = prompt("Enter new number:");

    localStorage.setItem("users", JSON.stringify(allElements));
    window.location.reload(); 
    
}

function dellAll(){
    localStorage.clear();
    window.location.reload(); 
}

function edit1(){
    alert("You can't edit admin user");
}

function del1(){
    alert("You can't delete admin user");
}