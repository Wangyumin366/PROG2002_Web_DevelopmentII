function displayList() {

  fetch("http://localhost:8080/fundraisers")
  .then(response => response.json())
  .then(fundraisers => {
    const cardList = document.getElementById("card_list")
    cardList.innerHTML = ""

    for (let fundraiser of fundraisers) {
      cardList.innerHTML += `
         <div class="card">
            <h3>${fundraiser.CAPTION}</h3>
            <p>ID: ${fundraiser.FUNDRAISER_ID}</p>
            <p>Organiser: ${fundraiser.ORGANIZER}</p>
            <p>Target funding: ${fundraiser.TARGET_FUNDING} AUD</p>
            <p>Current funding: ${fundraiser.CURRENT_FUNDING}</p>
            <p>City: ${fundraiser.CITY}</p>
            <p>Active: ${fundraiser.ACTIVE ? "active" : "not suspended"}</p>
            <p>Category: ${fundraiser.NAME}</p>
            <a href="./fundraiser.html?id=${fundraiser.FUNDRAISER_ID}">More</a>
        </div>
      `
    }
  })
}
