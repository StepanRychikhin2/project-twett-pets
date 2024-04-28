const btnClosee = document.querySelector(".btn-close2");
const btnDel = document.querySelector(".btnADD2");
const btnOpenmodalDel = document.querySelector(".button-delete");
const inputdel = document.querySelector(".inputdel");
const modalWindow2 = document.querySelector(".modal-window2");

btnClosee.addEventListener("click", () => {
  modalWindow2.classList.add("true");
});




btnOpenmodalDel.addEventListener("click", () => {
  modalWindow2.classList.remove("true");
});

export function removeTweet() {

  btnDel.addEventListener("click", () => {

    modalWindow2.classList.add("true");


    const petsNameToDelete = inputdel.value;
    function deleteMovie(namePets) {
      {
        const response = fetch(`http://localhost:3000/petsUser/${namePets}`, {
          method: "DELETE",
        });
      }
    }
    deleteMovie(petsNameToDelete);
  });
}

removeTweet();
