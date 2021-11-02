let dogs=[] //creates the dogs array

function saveDog(e){

    let name2=document.getElementById("name").value
    let age2=document.getElementById("age").value
    let breed2=document.getElementById("breed").value

    dogs.push(new Dogs(name2,breed2,age2,""))

     showDogs()
     
     e.preventDefault();
     return false

}



function showDogs() //functions used to create the cards
{
    let dogsPanel=document.getElementById("cardHolder")
    dogsPanel.innerHTML=""
    console.log(dogs)

    for(let i=0;i<dogs.length;i++)   //takes the length of the dogs array which changes depending on how many dogs i have created and then runs the code inside it that many times
    {
        //creates card ------
        let card = document.createElement("div")
        card.classList.add("card")          //gives the variable card a class which can be called in css
        document.getElementById("cardHolder").appendChild(card).style.padding = 50 + "px"; //adds padding to the div

        //creates dog name
        let dogName=document.createElement("h1")
        card.appendChild(dogName)
        dogName.innerHTML=dogs[i].name

        //create dog breed
        let dogBreed=document.createElement("h2")
        card.appendChild(dogBreed)
        dogBreed.innerHTML=dogs[i].breed

        //create dog age
        let dogAge=document.createElement("h3")
        card.appendChild(dogAge)
        dogAge.innerHTML=dogs[i].age

        //create dog image
        let dogPic=document.createElement("img")
        card.appendChild(dogPic)
        dogPic.src=dogs[i].picture
        dogPic.classList.add("dogpic")

        //create adopt button
        let adopt=document.createElement("button")
        adopt.innerHTML = "Adopt Now"
        card.appendChild(adopt)
        adopt.classList.add("adoptbutton")
        adopt.onclick = function clicked()
        {
            alert("sorry this dog has been adopted already")
        }

        let deleteButton=document.createElement("button")
        deleteButton.innerHTML = "delete"
        card.appendChild(deleteButton)
        deleteButton.classList.add("adoptbutton")
        deleteButton.onclick = function clicked()
        {
            card.parentNode.removeChild(card)
        }
    }
}

function setupDogs() //fucntion to setup the dog instances and info
{
    //dogs.push(new Dogs(this.name, this.breed,this.age))
    dogs.push(new Dogs("Winnie", "Staffy", "9" , "/IMG/winnie.jpg"))             
    dogs.push(new Dogs("Otto", "Dachshund/Terrier", "10" , "/IMG/otto.jpg"))       
    dogs.push(new Dogs("Otis", "Husky", "4" , "/IMG/husky.jpg"))                   
    dogs.push(new Dogs("Cheyenne", "German Shepherd", "6" , "/IMG/Cheyenne.jpg"))   
    dogs.push(new Dogs("Bianca", "Golden Retriever", "8" , "/IMG/golden.jpg"))          
    dogs.push(new Dogs("Hana", "Shiba Inu", "3" , "/IMG/Shiba.jpg"))
    
}

class Dogs{ //class for all the dog instances
   
   //properties
    name
    breed
    age 
    picture

    constructor(name,breed,age,picture,)
    {
        this.name=name
        this.breed=breed
        this.age=age
        this.picture=picture
    }

    
}

function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter a name";
const AGE_REQUIRED = "Please enter an age";
const BREED_REQUIRED = "please enter a breed";

form.addEventListener("submit", function (event) {
	event.preventDefault();

	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let ageValid = hasValue(form.elements["age"], AGE_REQUIRED);
    let breedValid = hasValue(form.elements["breed"], BREED_REQUIRED);

	if (nameValid && ageValid && breedValid) {
        alert("works")
        saveDog()
	}
});

setupDogs() 
showDogs() 
