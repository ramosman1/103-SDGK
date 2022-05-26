//global vars
let newTask = document.getElementById("txtTask);//trval the DOM once
let count= 0;

function registerTask(){
    //display on console ---> in a html element
    console.log(nrewTask.value);
    let tmp='<li id="${count}" class="task">${newTask.value}<button onclick="deleteTask(${count})
    ">insert trash can</button></li>';
    clearForm();
    count++;
    }

    function deleteTask(x){
        document>document.getElementById(x)removeEventListener();
}
function clearForm(){
    newTask.value="";
    }