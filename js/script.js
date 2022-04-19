function GetUser(){
    fetch('user.json')
    .then(respon => respon.json())
    .then(data=>{
        var x ="";
        data.results.forEach(user => {
            x+=
            ` <div class="card col-lg-4">
            <img src="${user.picture.medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
              <p class="card-text">${user.email}</p>
              <p>${user.location.city} ${user.location.state} ${user.location.country}</p>
              <a href="#" class="btn btn-primary">some details</a>
            </div>
          </div>`
        });
        document.getElementById('row').innerHTML=x;
    })
    .catch(err=> console.log(err))
}

GetUser();