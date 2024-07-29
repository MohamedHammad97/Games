import { Details } from "./details.js";
import { Ui } from "./ui.js";
export class Games {
    constructor() {
        this.getGames("mmorpg");
        document.querySelectorAll("#navbarSupportedContent").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
                
            });
        });
        this.ui = new Ui();
    }

    async getGames(category) {
        const loading = document.querySelector("#loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '9de5406b11msh268c798e226b426p13e83ejsn443c2b623ebd',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        let games = await res.json()
        this.ui.display(games)
        this.getId();
        loading.classList.add("d-none");
    }

    getId() {
        document.querySelectorAll(".card").forEach((ele) => {
            ele.addEventListener("click", () => {
                const id = ele.dataset.id;
                console.log(id);
                this.showDetails(id);
            });
        });
    }

    showDetails(idGame) {
        const details = new Details(idGame);
        console.log(details);

        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
        document.querySelector(".navbar").classList.add("d-none");
        document.querySelector("header").classList.add("d-none");       
    }
}