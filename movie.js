var uniqueId = new URLSearchParams(window.location.search).get("id");

fetch(`https://api.themoviedb.org/3/movie/${uniqueId}?api_key=88f01778ed4d94729102f604707fae68`)
.then(response => {
    if (!response.ok) {
        throw new Error('Unexpected Network response');
    }
    return response.json();
})
/* .then((data) => {
    let res=``
    console.log(data)
        res+=`<div class="col-md-3 mt-4">
        <div class="card" style="width: 18rem;" >
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${data.original_title}</h5>
              <p><i class="fas fa-star" style="color:yellow"></i>
              <i class="fas fa-star" style="color:yellow"></i>
              <i class="fas fa-star" style="color:yellow"></i>
              <i class="fas fa-star" style="color:yellow"></i>
              <i class="fas fa-star" style="color:lightgrey"></i>
               4/5
              </p>
              <p class="card-text">Language: ${data.original_language}</p>
              <p class="card-text">Release Date: ${data.release_date}</p>
            </div>
          </div>
    </div>`

    $('#movie').html(res);

}); */

.then((data) => {
    let res=``
    console.log(data)
        res+=`<div class="row g-0">
        <div class="col-md-4">
          <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-4 ml-10">
          <div class="card-body ">
          <br><br><br><br><br><br><br><br><br><br><br><br><br>
            <h5 class="card-title">${data.original_title}</h5>
            <p><i class="fas fa-star" style="color:DarkViolet"></i>
              <i class="fas fa-star" style="color:DarkViolet"></i>
              <i class="fas fa-star" style="color:DarkViolet"></i>
              <i class="fas fa-star" style="color:lightgrey"></i>
              <i class="fas fa-star" style="color:lightgrey"></i>
               3/5
              </p>
            <p class="card-text">Language: ${data.original_language}</p>
            <p class="card-text">Release Date: ${data.release_date}</p>
          </div>
        </div>
      </div>
      <div class="row py-3">
        <h1>Overview</h1>
        <p>${data.overview}</p>
      </div>`

    $('#movie').html(res);

});
