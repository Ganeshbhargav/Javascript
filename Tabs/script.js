let about = document.getElementById('aboutTab');
let timeToVisit = document.getElementById('timeToVisitTab');
let attractions = document.getElementById('attractionsTab')

let aboutButton1 = document.getElementById("aboutButton");
let timeToVisitButton1 = document.getElementById("timeToVisitButton");
let attractionsButton1 = document.getElementById("attractionsButton");

function aboutButton() {
    about.classList.remove("d-none");
    timeToVisit.classList.add("d-none");
    attractions.classList.add("d-none");

    aboutButton1.classList.add("selected-button");
    timeToVisitButton1.classList.remove('selected-button');
    attractionsButton1.classList.remove('selected-button');
}
aboutButton()

function timeToVisitButton() {
    timeToVisit.classList.remove("d-none");
    about.classList.add("d-none");
    attractions.classList.add("d-none");

    timeToVisitButton1.classList.add('selected-button');
    aboutButton1.classList.remove("selected-button");
    attractionsButton1.classList.remove('selected-button');
}

function attractionsButton() {
    attractions.classList.remove("d-none")
    timeToVisit.classList.add("d-none");
    about.classList.add("d-none");

    attractionsButton1.classList.add('selected-button');
    aboutButton1.classList.remove("selected-button");
    timeToVisitButton1.classList.remove('selected-button');

}