export class Ui {
    display(games) {
        let cartona = ``
        for (let i = 0; i < games.length; i++) {
            cartona += `
        <div class="col-md-3">
                    <div data-id="${games[i].id}" class="card h-100" id="card">
                        <figure class="m-3">
                            <img src="${games[i].thumbnail}" class="card-img-top" alt="...">
                        </figure>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h5 class="card-title fs-6 mb-0">${games[i].title}</h5>
                                <button class="btn badge ">Free</button>
                            </div>
                            <p class="card-text text-center opacity-50">
                              ${games[i].short_description}</p>

                        </div>
                        <div class="card-footer d-flex justify-content-between ">
                            <button class="btn  badge text-white rounded-3">${games[i].genre}</button>
                            <button class="btn  badge text-white rounded-3">${games[i].platform}</button>
                        </div>
                    </div>
                </div>
       `

            document.getElementById("demo").innerHTML = cartona
        }
    }

    displayDetails(data) {
         let cartona2 = `
        <div class="col-md-4">
                    <img src="${data.thumbnail}" class="w-100" alt="">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${data.title}</h3>
                    <p>Category: <span><button class="btn badge">${data.genre}</button></span></p>
                    <p>Platform: <span><button class="btn badge">${data.platform}</button></span></p>
                    <p>Status: <span><button class="btn badge">${data.status}</button></span></p>
                    <p>${data.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">show Game</a>
                </div>`

            document.getElementById("gameDetails").innerHTML = cartona2
        }
    }
