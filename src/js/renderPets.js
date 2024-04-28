const listPets = document.querySelector(".listPets");
// const fileaddInp = document.querySelector(".fileaddInp")

export function renderPets() {
  let myURL = `http://localhost:3000/petsUser`;
  console.log(myURL);
  fetch(myURL)
    .then((data) => data.json())
    .then((data) => {
      const listMarkUp = data.map((data) => {
        console.log(data);

        const listElem = `
  <div class="photo-card">
  <div class="photo-card2">
 
  <div class="stats">
    <p class="stats-item">
    імя тваринки:<br />   
      ${data.namePets}   
    </p>
    <p class="stats-item">
    власник тваринки:  <br />  
      ${data.owner} 
    </p>
    <p class="stats-item">
    опис тваринки:<br />
      ${data.director} 
    </p>
    <p class="stats-item">
    домашньому улюбленцю:<br />
      ${2024 - data.year} роки
    </p>
  </div>
  </div>
</div>
      `;
        return listElem;
      });
      listPets.innerHTML = listMarkUp;
    })
    .catch((error) => console.error(error));
}

renderPets();


console.log("123");
