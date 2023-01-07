//selecting drag and drop div
const  dropArea = document.querySelector('.upload-box');
const  dragText = document.querySelector('.drop-drag');
const  button = document.querySelector('.browse');
const  input = document.querySelector('.input')


button.onclick = () =>{
    input.click();
}

input.addEventListener("change", function(){
    file = this.files[0];
})

let file; //this is a global variable to be used with multiple functions


//When user drags a file over dragArea
dropArea.addEventListener("dragover", (event) =>{
    event.preventDefault(); //preventing Default Behaviour
   // console.log("File Over DragArea");
    dropArea.classList.add("active");
})

//When user leaves dragArea
dropArea.addEventListener("dragleave", () =>{
   // console.log("File outside DragArea");
    dropArea.classList.remove("active");
})

//When user drops file on dragArea
dropArea.addEventListener("drop", (event) =>{
    event.preventDefault(); //preventing Default Behaviour
    //console.log("File has dropped on DragArea");
});

file = event.dataTransfer.files[0];
showFile(); // calling function

let fileType = file.type;


// Adding valid media extensions in array
function showFile(){
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 
    if(validExtensions.includes(fileType)){
    let fileReader = new FileReader();
    fileReader.onload = () =>{
        let fileURL = fileReader.result;
        console.log(fileURL)
    }
    fileReader.readAsDataURL();
    }else{
        dropArea.classList.remove("active")
    }
}