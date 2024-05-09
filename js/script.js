const container = document.getElementById("row");
const API_KEY = "5a842461c8b4647589936be1eaa3cf04";
const URL = "https://restcountries.com/v3.1/all";

// Fetching the country details from restcountries.com API endpoint.
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    data
      .forEach((element) => {
        // Creating required elements to update the DOM.
        const cardContainer = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const title = document.createElement("div");
        const regionText = document.createElement("div");
        const nativeNameText = document.createElement("div");
        const populationText = document.createElement("div");
        const btn = document.createElement("button");

        // Adding classes to the card.
        card.classList.add("card");
        card.classList.add("h-100");
        card.classList.add("shadow");

        // Adding classes to the card container.
        cardContainer.classList.add("col-sm-6");
        cardContainer.classList.add("col-md-4");
        cardContainer.classList.add("col-lg-4");
        cardContainer.classList.add("col-xl-4");
        cardContainer.classList.add("mt-5");

        // Adding classes to the card header.
        title.classList.add("card-header");
        title.classList.add("text-center");
        title.classList.add("fs-4");
        title.classList.add("fw-semibold");

        // Updating value of the card header.
        title.innerHTML = element.name.common;

        // Adding classes to the card body.
        cardBody.classList.add("card-body");
        cardBody.classList.add("d-flex");
        cardBody.classList.add("flex-column");
        cardBody.classList.add("align-items-center");
        cardBody.classList.add("justify-content-between");

        // Adding classes to the image.
        img.classList.add("w-50");
        img.classList.add("card-img-top");
        img.classList.add("shadow");

        // Updating the image tag with source and alt values.
        img.src = element.flags.png;
        img.alt = element.flags.alt;

        // Adding classes and updating values to the card contents.
        regionText.classList.add("card-text");
        regionText.textContent = "Region: " + element.region;

        nativeNameText.classList.add("card-text");
        nativeNameText.textContent = "Native Name: " + element.name.official;

        populationText.classList.add("card-text");
        populationText.textContent = "Population: " + element.population;

        // Adding classes and attributes to the button.
        btn.classList.add("btn");
        btn.classList.add("btn-primary");
        btn.classList.add("m-3");
        btn.setAttribute("data-bs-toggle", "modal");
        btn.setAttribute("data-bs-target", "#exampleModal");
        btn.innerHTML = "Click for Weather";

        //   Adding event to the button
        btn.addEventListener("click", () => {
          const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${element.latlng[0]}&lon=${element.latlng[1]}&appid=${API_KEY}`;
          fetch(WEATHER_API_URL)
            .then((response) => response.json())
            .then((data) => {
              document.getElementById("modalBody").innerHTML = "";
              const modalTitle = document.getElementById("modalTitle");
              const modalBody = document.getElementById("modalBody");
              const humidity = document.createElement("p");
              const pressure = document.createElement("p");
              const temperature = document.createElement("p");
              const windSpeed = document.createElement("p");
              const description = document.createElement("p");

              modalTitle.innerHTML =
                "Weather details of: " + element.name.common;
              description.innerHTML =
                "Description: " + data.weather[0].description;
              temperature.innerHTML = `Temperature: Maximum: ${data.main.temp_max}°, Actual: ${data.main.temp}°, Minimum: ${data.main.temp_max}°`;
              humidity.innerHTML = "Humidity: " + data.main.humidity + " g/m^3";
              pressure.innerHTML = "Pressure: " + data.main.pressure + " atm";
              windSpeed.innerHTML = "WindSpeed: " + data.wind.speed + " m/s";

              description.classList.add("text-capitalize");

              modalBody.appendChild(description);
              modalBody.appendChild(temperature);
              modalBody.appendChild(humidity);
              modalBody.appendChild(pressure);
              modalBody.appendChild(windSpeed);
            });
        });

        // Appending the changes to the DOM.
        cardBody.appendChild(img);
        cardBody.appendChild(regionText);
        cardBody.appendChild(nativeNameText);
        cardBody.appendChild(populationText);
        cardBody.appendChild(btn);

        card.appendChild(title);
        card.appendChild(cardBody);

        cardContainer.appendChild(card);

        container.appendChild(cardContainer);
      })
      .catch((error) => console.warn("Weather API Error:" + error));
  })
  .catch((error) => console.warn("Rest Countries API Error:" + error));
