/* console.log(document.querySelector(".showhere").innerHTML);
console.log(document.querySelector(".showthis").value);
function function1() {
    document.querySelector(".showhere").innerHTML = document.querySelector(".showthis").value ;
}

*/









let arr1 =  JSON.parse(localStorage.getItem('arr1'));

if (arr1 === null) {
    arr1 = [];
}
function1();

function function1() {
    let htmlcontent = '' ;
   


for(let i = 0; i < arr1.length; i++) {
     
       const value = arr1[i];
       const value2 = value.name;
       const value3 = value.duedate;
       const value4 = value.duetime;
       const html = `<div> ${value2} </div>
                     <div>   ${value3} </div>
                     <div> ${value4} </div>
                      
                     <div> 
                      <button onclick=" 
                     arr1.splice(${i},1);
                    
                     function1();
                     saveStorage();
            
                   " class="delete-todo-button"> Delete</button>
                    </div> `
       htmlcontent+= html ;
}





 
document.querySelector(".showhere").innerHTML  = htmlcontent;
}


 
function function2 () {
    const inputElement = document.querySelector(".showthis");
    const dataElement = document.querySelector(".showdate");
    const timeElement = document.querySelector(".showtime");
    const digdate = dataElement.value;
    const name = inputElement.value;
    const digname = timeElement.value;
    arr1.push({
        name: name,
        duedate: digdate,
        duetime: digname
    });
    console.log(arr1);

    inputElement.value = '' ;
    function1();
    saveStorage();
    

}

function saveStorage() {
    localStorage.setItem('arr1',JSON.stringify(arr1));
}

   


 




