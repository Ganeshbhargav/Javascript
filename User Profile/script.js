let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainerElement = document.getElementById('profileContainer');
profileContainerElement.classList.add('text-center', 'd-flex', 'flex-column', 'justify-content-center');

let imgContainerElement = document.getElementById("imgContainer");

//create userprofile img and append to imgContainerElement

let personImg = document.createElement('img');
personImg.setAttribute("src", profileDetails.imgSrc);
personImg.classList.add("person-img");
imgContainerElement.appendChild(personImg);


// create name and append to profileContainerElement

let headingName = document.createElement("h1");
headingName.textContent = profileDetails.name;
headingName.classList.add("heading");
profileContainerElement.appendChild(headingName)

//create age and append to profileContainerElement
let personAge = document.createElement('p');
personAge.textContent = "Age : " + profileDetails.age;
personAge.classList.add('person-age');
profileContainerElement.appendChild(personAge);