const btnOpenmodal = document.querySelector(".button-addopen-modal")
const idinputADD = document.querySelector(".idinput")
const titleinputADD = document.querySelector(".titleinput")
const genreinputADD = document.querySelector(".genreinput")
const directorinputADD = document.querySelector(".directorinput")
const yearinputADD = document.querySelector(".yearinput")
const btnADD = document.querySelector(".btnADD")
const mobalADD = document.querySelector(".modal-window")
const btnClose = document.querySelector(".btn-close")
const fileaddInp = document.querySelector(".fileaddInp")
console.log(fileaddInp)



btnClose.addEventListener("click", () => {
    mobalADD.classList.add("true")
})

btnOpenmodal.addEventListener("click", () => {
    mobalADD.classList.remove("true")
})

export function addFruit() {
    btnADD.addEventListener("click", () => {
        mobalADD.classList.add("true")
        const newPets = {
            id: idinputADD.value,
            namePets: titleinputADD.value,
            owner: genreinputADD.value,
            director: directorinputADD.value,
            year: yearinputADD.value,
        };
    
    console.log(123)
    
    
    function addMovie(newPets) {
    
            const response =  fetch('http://localhost:3000/petsUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPets),
            });
    
    }
    console.log(321)
    if (idinputADD.value == 0 || titleinputADD.value == 0 || genreinputADD.value == 0 || directorinputADD.value == 0 || yearinputADD.value == 0) {
        alert("Введіть коткне значення або заповніть поля")
        console.log(333)
    } else {
    addMovie(newPets)
    console.log(22)
    }
    })
}

addFruit()

