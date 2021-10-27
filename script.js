let dogs=[]

dogs.push({name:"Winnie", breed:"Staffy", age:"age " +9, picture:"/IMG/winnie.jpg"})
dogs.push({name:"Otto", breed:"Dachshund/Terrier", age:"age " +10, picture:"/IMG/otto.jpg"})
dogs.push({name:"Otis", breed:"Husky", age:"age " + 4, picture:"/IMG/husky.jpg"})
dogs.push({name:"Cheyenne", breed:"German Shepherd", age:"age " +6, picture:"/IMG/Cheyenne.jpg"})
dogs.push({name:"Bianca", breed:"Golden Retriever", age:"age " +8, picture:"/IMG/golden.jpg"})
dogs.push({name:"Hana", breed:"Shiba Inu", age:"age " +3, picture:"/IMG/Shiba.jpg"})

for(let i=0;i<dogs.length;i++)
{
    //creates card ------
    let card = document.createElement("div")
    card.classList.add("card")
    document.getElementById("cardHolder").appendChild(card).style.padding = 50 + "px";

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
}