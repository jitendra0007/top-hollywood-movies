fetch('https://api.themoviedb.org/3/list/1?api_key=88f01778ed4d94729102f604707fae68&language=en-US')
.then(response => {
    if (!response.ok) {
        throw new Error('Unexpected Network response');
    }
    return response.json();
})
.then((data) => {
    let count = 0;
    let res=``
    console.log(data.items)
    while (count < data.items.length) {
        res+=`<div class="col-md-4 mt-4">
        <div class="card" style="width: 20rem;" >
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${data.items[count].poster_path}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${data.items[count].original_title}</h5>
              <p><i class="fas fa-star" style="color:DarkViolet"></i>
              <i class="fas fa-star" style="color:DarkViolet"></i>
              <i class="fas fa-star" style="color:DarkViolet"></i>
              <i class="fas fa-star" style="color:lightgrey"></i>
              <i class="fas fa-star" style="color:lightgrey"></i>
               3/5
              </p>
              <p class="card-text">Language: ${data.items[count].original_language}</p>
              <p class="card-text">Release Date: ${data.items[count].release_date}</p>
              <a href="/movie.html?id=${data.items[count].id}" class="btn btn-outline-info">More Details</a>
            </div>
          </div>
    </div>`
    count+=1;
    }
    $('#movielist').html(res);

});
