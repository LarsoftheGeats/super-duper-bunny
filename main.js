//get the buttton we're working on
const buttonPush = document.querySelector("button");
const baseUrl= "https://swapi.dev/api/planets/?search=Alderaan"

function buttonClick(evt){
    //console.log("you pushed the button")
    axios.get(baseUrl).then( (res) => 
    {
        //console.log(res)
        for (let i=0; i< res.data.results[0].residents.length; i++){
            let person=res.data.results[0].residents[i]
            axios.get(person).then( (res1) => {
                //console.log(res1)
                //
                //let {name} =res1.data;
                let aldResident = res1.data.name;
                let residentHTML = document.createElement("h2")
                residentHTML.textContent=aldResident;
                document.body.appendChild(residentHTML)
            })
        }    
    })
}

buttonPush.addEventListener("click",buttonClick)