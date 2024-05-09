# Day 17-GUVI

> **To display Weather of all countries from https://restcountries.com/v3.1/all**  
> [Source Code](./index.html)  
> Explanation:
>
> First, we create an _index.html_ file to which we add our _script.js_ and _style.css_ files using _script_ and _link_ tags respectively.
> The page is styled using raw CSS and BootstrapCSS.
> Now, in our JavaScript code, first we declare the API Key and URL as a **const** variable.
> The row element is selected by using `document.getElementsById()`
> Let's get into the Code flow:
>
> - Fetch API is used to make a GET request to the URL of restcountries.com.
> - The data is received from the API which is parsed to json using `then()` method.
>   Then the data is iterated using `forEach()` method.
> - Necessary elements such as div, button and img tags are created using `document.createElement()`.
> - All necessary bootstrap classes are added to the elements by selecting its classList.
> - An Event is established for the button to fetch the weather of the country on whose card the button is clicked on.
> - Once the button is clicked, an API call is made to the `openweather` API, to retrieve the weather details.
> - The weather details are appended to the body of the Modal.
> - Thus, using the Fetch API, we retrieve the weather details of the countries and are styled using Bootstrap in a responsive fashion.

---
