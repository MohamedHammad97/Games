// CODE USING OOP
import { Games } from "./games.js";
new Games()



// >>>>>>>>>>>>>>>> CODE WITHOUT USING OOP <<<<<<<<<<<<<<<<<<<<<

// let categoryName = document.querySelector("#navbarSupportedContent")

// async function getData(category) {
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '9de5406b11msh268c798e226b426p13e83ejsn443c2b623ebd',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
//     let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
//     let  games = await res.json()
//     display(games)
// }
// getData('mmorpg')

// function display(games) {
//     let cartona = ``
//     for (let i = 0; i < games.length; i++) {
//         cartona += `
//         <div class="col-md-3">
//                     <div class="card h-100" id="cardId">
//                         <figure class="m-3">
//                             <img src="${games[i].thumbnail}" class="card-img-top" alt="...">
//                         </figure>
//                         <div class="card-body">
//                             <div class="d-flex justify-content-between align-items-center mb-2">
//                                 <h5 class="card-title fs-6 mb-0">${games[i].title}</h5>
//                                 <button class="btn badge ">Free</button>
//                             </div>
//                             <p class="card-text text-center opacity-50">
//                               ${games[i].short_description}</p>

//                         </div>
//                         <div class="card-footer d-flex justify-content-between ">
//                             <button class="btn  badge text-white rounded-3">${games[i].genre}</button>
//                             <button class="btn  badge text-white rounded-3">${games[i].platform}</button>
//                         </div>
//                     </div>
//                 </div>
//        `

//     }
//     document.getElementById("demo").innerHTML = cartona
// }

// categoryName.addEventListener("click", function (e) {
//     getData(e.target.dataset.category)
// })

// async function getgameDetails() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '9de5406b11msh268c798e226b426p13e83ejsn443c2b623ebd',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };

//     let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=452`, options)
//     let data = await res.json()
//     displayDetails(data)
// }


// function displayDetails(data) {
//     let cartona2 = `
//         <div class="col-md-4">
//                     <img src="${data.thumbnail}" class="w-100" alt="">
//                 </div>
//                 <div class="col-md-8">
//                     <h3>Title:${data.title}</h3>
//                     <h4>Category: <span><button class="btn badge">${data.genre}</button></span></h4>
//                     <h4>Status: <span><button class="btn badge">${data.platform}</button></span></h4>
//                     <p>${data.description}</p>
//                     <button class="btn btn-outline-warning">show Game</button>
//                 </div>`
//     }
//     document.getElementById("gameDetails").innerHTML = cartona2;
// }