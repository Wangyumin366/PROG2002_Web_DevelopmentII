function appendOptions() {

  fetch("http://localhost:8080/categories")
    .then(response => response.json())
    .then(categories => {
      const categoryDom = document.getElementById("category")

      for (let category of categories) {
        categoryDom.innerHTML += `
         <option value="${category.CATEGORY_ID}">${category.NAME}</option>
      `
      }
    })

  const searchBtn = document.getElementById("search_btn")
  const clearBtn = document.getElementById("clear_btn")
  const organizer = document.getElementById("organizer")
  const city = document.getElementById("city")
  const category = document.getElementById("category")

  searchBtn.addEventListener("click", function() {
    const organizerName = organizer.value
    const cityName = city.value
    const categoryID = category.value

    console.log(organizerName, cityName, categoryID)

    if (organizerName==""&&cityName==""&&categoryID=="") {
      alert("You must enter one of organizer/city/category")
      return
    }

    fetch(`http://localhost:8080/fundraisers/search?ORGANIZER=${organizerName}&CITY=${cityName}&CATEGORY_ID=${categoryID}`)
      .then(response => response.json())
      .then(fundraisers => {
        const cardList = document.getElementById("card_list")
        cardList.innerHTML = ""

        if (fundraisers.length > 0) {
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
        }else {
          cardList.innerHTML = "<p style='color: #dc1010;font-weight: bolder'>no fundraisers are found!</p>"
        }

      })
  })

  clearBtn.addEventListener("click", function clearChechboxes() {
    const cardList = document.getElementById("card_list")
    cardList.innerHTML = ""
    organizer.value = ""
    city.value = ""
    category.value = ""
  })
}
