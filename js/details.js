import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();

    document.getElementById("btnClose").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".navbar").classList.remove("d-none");
      document.querySelector("header").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });

    this.getDetails(id);
  }

  async getDetails(idGames) {
    const loading = document.querySelector("#loading");
    loading.classList.remove("d-none");
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '9de5406b11msh268c798e226b426p13e83ejsn443c2b623ebd',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    }

    let res2 = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
    let data = await res2.json()
    console.log(data);
    this.ui.displayDetails(data)
    loading.classList.add("d-none")
  }
}
