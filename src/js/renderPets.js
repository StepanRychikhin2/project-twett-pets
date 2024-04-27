const listPets = document.querySelector(".listPets")
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
  <img src="${data.webformatURL}" alt="" />
  </div>
  <div class="stats">
    <p class="stats-item">

      ${data.namePets}
    </p>
    <p class="stats-item">

      ${data.owner}
    </p>
    <p class="stats-item">

      ${data.director}
    </p>
    <p class="stats-item">

      ${data.year}
    </p>
  </div>
</div>
      `;
            return listElem;
         
      });
      listPets.innerHTML = listMarkUp;
      })
      .catch((error) => console.error(error));
  }

 renderPets()


 console.log("123")