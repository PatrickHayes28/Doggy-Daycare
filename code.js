// Follow the Instructions on my.kenzie.academy for this assignment.
// Those instructions will give you details on each step.

// STEP ONE - Create your Data Model.
// Assign your data model here, instead of null. This should be an array of "dog" objects.
let dataModel = [
  {
    name: "Rin Tin Tin",
    breed: "German Shepherd",
    age: 2,
    likesTreats: true
  },
  {
    name: "lassie",
    breed: "Rough Collie",
   age: 7,
    likesTreats: false
  },
  {
    name: " Balto",
    breed: "Siberian Husky",
    age: 4,
    likesTreats: true
  }
]
for (i = 0; i < dataModel.length; i += 1) {
  let object = dataModel[i]
  console.log(object)
}

// When this function is run, it is meant to use the user input to build
// a dog object, and add the dog object to the data model array.
function onSubmitDog(event) {
  event.preventDefault();

  // We provide a CSS selector, as a string, to identify which HTML element we want querySelector to find for us.
  let nameInput = document.querySelector("#name_input");
  let breedInput = document.querySelector("#breed_input");
  let ageInput = document.querySelector("#age_input");
  let treatsCheckbox = document.querySelector("#treats_input");

  let name = nameInput.value;
  let breed = breedInput.value; //propertyName.value is how we get the values provided by the user 
  let age = ageInput.value;
  let likesTreats = treatsCheckbox.checked; //this is .checked not .value because its a checkbox and the user doesn't provide a value only that the checkbox is checked or not  

  if (name === "" || breed === "" || age === "") {  // If any of these text boxes are empty...
    alert("Please fill out all of the fields!");
    return;  // Exit the function early if the above condition is true.
  }

  // STEP TWO - Create a "dog" variable. What piece of data will we assign
  // to this variable? A new "dog" object, containing the values from above:
  // name, breed, age, likeTreats. Add this object to your data model array.
  // How can you insert this dog object into the dogs array?

  // YOUR CODE HERE
  let dog = {
    name: name,
    breed: breed,
    age: age,
    likesTreats: likesTreats
  }
  dataModel.push(dog)

  renderDogList(dataModel); // Now that we have added a new dog to the data model,
  // we should render the dog list on the page again.

  // The following lines reset the form, so that it is ready for information
  // on a new dog:
  nameInput.value = "";
  breedInput.value = "";
  ageInput.value = "";
  treatsCheckbox.checked = false;
}


// This function is run, it is meant to keep the dog list which the user
// sees on the page in sync with the data model containing all of our 
// dog objects.
function renderDogList() {
  let list = document.querySelector("#dog_list");
  list.innerHTML = "";  // First, CLEAR the whole list.

  // STEP THREE - Render the dog list from scratch. See "Step Three"
  // instructions.
  // If there are no dogs, then render "No Dogs!" Otherwise, render all 
  // of the dogs in your data model.
  // Remember to copy the "Send Home" button code into your loop. This
  // code is in the instructions.

  // YOUR CODE HERE 
  if (dataModel.length === 0) {
      list.innerHTML = "there are no dogs!";
      }
  for (let i = 0; i < dataModel.length; i += 1) {
    let dog = dataModel[i]
    let dogItem = document.createElement("li");
   if (dog.likesTreats) {
      dogItem.innerHTML = `${dog.name} a ${dog.breed} who is ${dog.age} and likes treats`;
    } else {
      dogItem.innerHTML =`${dog.name} a ${dog.breed} who is ${dog.age} and does not like treats`
    }
    list.append(dogItem)
    let sendHomeButton = document.createElement("button")
    sendHomeButton.innerHTML = "send me home!"
    dogItem.append(sendHomeButton)
    sendHomeButton.addEventListener("click", function () {
      removeDog(dog)
      if (dataModel.length === 0) {
        list.innerHTML = "there are no dogs!"
      }
    })
  }
}

// The function below is already completed for you. It removes a given 
// dog from the data model. It finds the index of the dog, and then uses
// that index to splice (cut) it out of the array. Then it re-renders
// the dog list, so that it no longer displays on the page.
function removeDog(dog) {
  let dogIndex = dataModel.indexOf(dog);
  dataModel.splice(dogIndex, 1);

  renderDogList();
}


// We need to tell the Submit button on the page what to do:
// Run the onSubmitDog function when the button is clicked.
let button = document.querySelector("#submit_button");
button.addEventListener("click", onSubmitDog);

// This function call will take place when the page loads, in order
// to render the dog list for the very first time.
renderDogList();
