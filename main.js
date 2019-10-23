// console.log('hello world');


var body = document.querySelector('#principal')
var btnSend = document.querySelector('#btnSend')
var inputPelicula = document.querySelector('#inputPelicula')

btnSend.addEventListener('click',(e)=>{
    e.preventDefault()
    peticion(inputPelicula.value)

})

function peticion(search){
    $.ajax({
        //The URL to process the request
        'url' : `http://www.omdbapi.com/?s=${search}&apikey=57eae034`,
        //The type of request, also known as the "method" in HTML forms
        //Can be 'GET' or 'POST'
        'type' : 'GET',
        //The response from the server
        'success' : function(data) {
        //   console.log(data.Search);
            data.Search.forEach((element,id )=> {
                var cardHtml = `<div class="card" style="width: 18rem;" id="movie${id}">
                <img src="${element.Poster}" class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title">${element.Title}</h5>
                    <p class="card-text">${element.Year}</p>
                    <a href="#" class="btn btn-primary">Ver cartelera</a>
                </div>
                </div>`
                body.insertAdjacentHTML('beforeend',cardHtml)
            });
           
        }
    });
}