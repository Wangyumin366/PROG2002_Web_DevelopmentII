function donate(fundraiserId) {
  alert("This feature is under contruction")
}

function displayFundraiser() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const id = urlParams.get("id")

  if (id) {
    fetch(`http://localhost:8080/fundraisers/${id}`)
      .then(response => response.json())
      .then(fundraiser => {
        const cardList = document.getElementById("card_list")
        cardList.innerHTML = ""

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
            <button style="width: 200px" onclick="donate(${fundraiser.FUNDRAISER_ID})">Donate</button>
        </div>
      `
      })
  }


}
