const titleinputed = document.querySelector(".titleinputed")
const genreinputed = document.querySelector(".genreinputed")
const directorinputed = document.querySelector(".directorinputed")
const yearinputed = document.querySelector(".yearinputed")
const btned = document.querySelector(".btned")
const modaledit = document.querySelector(".mobaladit")


mobalEditOpen.addEventListener("click", () => {
    modaledit.classList.remove("true")
})


btned.addEventListener("click", () => {
    modaledit.classList.add("true")
    const movieIdToUpdate = input.value;
    const updatedMovieData = {
            title: titleinputed.value,
            genre: genreinputed.value,
            director: directorinputed.value,
            year: yearinputed.value,
    };
    function updateMovie(movieId, updatedData) {

        const response =  fetch(`http://localhost:3000/movies/${movieId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

}
updateMovie(movieIdToUpdate, updatedMovieData);
  })