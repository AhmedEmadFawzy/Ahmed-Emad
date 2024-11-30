// create item
var siteName = document.getElementById("sitename");
var webUrl = document.getElementById("siteurl");
var create = document.getElementById("creatnewtask");


var bookList = [];
if (localStorage.getItem("bookList") !== null) {
    bookList = JSON.parse(localStorage.getItem("bookList"));

    displaydata()
}




function addbook() {
    if (validationName() && validationUrl()) {
        var book = {
            Name: siteName.value,
            Url: webUrl.value
        }
        alertdanger1.classList.add("d-none")

        // push unshift
        bookList.push(book)
        localStorage.setItem("bookList", JSON.stringify(bookList))

        displaydata()
        console.log(book)
        clearbookinfo()
    }
    else {
        alertdanger1.classList.remove("d-none")

    }

}




// clear book info

function clearbookinfo() {
    siteName.value = null;
    webUrl.value = null;

}

// display data 
function displaydata() {
    var library = "";
    for (var i = 0; i < bookList.length; i++) {
        library += `
               <tr >
                  <td>${i + 1}</td>
                  <td>${bookList[i].Name}</td>

         <td><a  id="visitbutton"  onclick="toLink('${bookList[i].Url}')" class="btn btn-success" ><span><i class="fa-solid fa-eye me-1" ></i></span>Visist</a></td>

                  <td><button onclick="deletebookinf(${i})" class="btn btn-danger" ><span><i class="fa-solid fa-trash-can me-1"></i></span>Delete</button></td>
     </tr>
    `
    }
    document.getElementById("bodydata").innerHTML = library;
}


// delete item pop shift splice  
function deletebookinf(index) {
    bookList.splice(index, 1)
    localStorage.setItem("bookList", JSON.stringify(bookList))
    displaydata()
}




function validationName() {
    var regex = /^[a-z\sA-z]{4,15}$/gm;
    var Text = siteName.value;
    if (regex.test(Text)) {
        siteName.classList.remove("is-invalid")
        siteName.classList.add("is-valid")
        return true;

    } else {
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")

        return false;
    }
}


function validationUrl(){
var term = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})$/  ;
 var urlinput = webUrl.value ;
if(term.test(urlinput)){
    webUrl.classList.remove("is-invalid")
webUrl.classList.add("is-valid")


return true

}else{
    webUrl.classList.add("is-invalid")
    webUrl.classList.remove("is-valid")
    URLsyntax.classList.remove("d-none")
return false ;

}
}





function toLink(url) {
    window.open(url)

}

