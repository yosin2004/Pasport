button = document.querySelector(".submit");

/// Add more user, to your Data 
users = [
    {
        "id" : 1,
        "name" : "Karim Salimov",
        "job" : "Programist",
        "birthDate" : "20.03.2021",
        "address" : "Kulob",
    },
    {
        "id" : 2,
        "name" : "Karim Halimov",
        "job" : "Programist",
        "birthDate" : "25.03.2013",
        "address" : "Hujand",
    },
    {
        "id" : 3,
        "name" : "Muso Halimov",
        "job" : "Duhtut",
        "birthDate" : "25.05.2000",
        "address" : "Hujand",
    }
]

button.addEventListener("click", function() {

    let user = {
        "id" : document.querySelector("#id").value,
        "name" : document.querySelector("#name").value,
        "job" : document.querySelector("#job").value,
        "birthDate" : document.querySelector("#date").value,
        "address" : document.querySelector("#address").value,
    }
    
    /// Write algorithm for cheking user Passport

})