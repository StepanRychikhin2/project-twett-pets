const listPets = document.querySelector(".listPets")
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
  <img class="img-cip" src="" alt="" />
  </div>
  <div class="img-cip"></div>

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

//  var uload_image = ""
//  fileaddInp.addEventListener("change", function() {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     uload_image = reader.result;
// document.querySelector(".img-cip").style.backgroundImage = `url(${uload_image})`

//   })
//  })

 console.log("123")