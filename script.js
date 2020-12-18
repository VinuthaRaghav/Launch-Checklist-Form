// Write your JavaScript code here!
const pilotNameField = document.getElementById("pilotName")
const coPilotNameField = document.getElementsByName("copilotName")
const fuelLevelField = document.getElementsByName("fuelLevel")
const cargoMassField = document.getElementsByName("cargoMass")


let planetary =[
  {
     "name": "Tatooine",
     "diameter": "10465 km",
     "star": "Tatoo I & Tatoo II",
     "distance": "43000 light years from galactic core",
     "image": "https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg",
     "moons": 3
  },
  {
      "name": "Pern",
      "diameter": "measurement is under dispute",
      "star": "Alpha Sagittarius (a.k.a. Rukbat)",
      "distance": "Varies - find a library",
      "image": "https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg",
      "moons": 2
  },
  {
      "name": "Saturn/Titan",
      "diameter": "5149.5 km",
      "star": "Sol",
      "distance": "1.4 billion km from Earth",
      "image": "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg",
      "moons": 0
  },
  {
      "name": "Mars",
      "diameter": "6779 km",
      "star": "Sol",
      "distance": "225 million km from Earth",
      "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
      "moons": 2
  },
  {
      "name": "K2-18b",
      "diameter": "34500 km",
      "star": "K2-18",
      "distance": "110 light years from Earth",
      "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg",
      "moons": "unknown"
  },
  {
      "name": "Jupiter/Europa",
      "diameter": "3,121.6 km",
      "star": "Sol",
      "distance": "628.3 million km from Earth",
      "image": "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
      "moons": 0
  }
]

let arrayIndex = Math.round(Math.random() *10) % 6
let missionTarget = document.getElementById("missionTarget")

missionTarget.innerHTML = `<h2>Mission Destination</h2>
<ol><li>Name: ${planetary[arrayIndex].name}</li>
<li>Diameter: ${planetary[arrayIndex].diameter}</li>
<li>Star: ${planetary[arrayIndex].star}</li>
<li>Distance from Earth: ${planetary[arrayIndex].distance}</li>
<li>Number of Moons: ${planetary[arrayIndex].moons}</li>
</ol>
<img src="${planetary[arrayIndex].image}">
</img>`



window.addEventListener("load", function(){
     
       let form = document.querySelector("form");
       form.addEventListener("submit",preventDefault) 

})
function preventDefault(){
             
       let pilotName = document.querySelector('[name="pilotName"]').value
       let coPilotName = document.querySelector("[name='copilotName']").value
       let fuelLevel = document.querySelector("[name='fuelLevel']").value
       let cargoMass = document.querySelector("[name='cargoMass']").value


       console.log(`pilot - ${pilotName} , co -pilot:${coPilotName}, fuel level:${fuelLevel}, cargo Mass:${cargoMass}`)

       let fieldsWithBlankVal = "Please enter the data for the below fields :"
       let fieldWithCorrectData = ""
       let isFieldsBlank = true
       let isFieldsWithCorrectData = true

       if(pilotName.trim().length == 0 ){
         isFieldsBlank = false
         fieldsWithBlankVal += "- Pilot Name"
         
       }

       if(isNaN(pilotName) == false){
         isFieldsWithCorrectData = false
         fieldWithCorrectData += "- Pilot Name should be string"
       }

       
       if(coPilotName.trim().length == 0 ){
         isFieldsBlank = false
         fieldsWithBlankVal += "- Co Pilot Name"
       }
       
       if(isNaN(coPilotName) == false){
         isFieldsWithCorrectData = false
         fieldWithCorrectData += "- Co Pilot Name should be string"
       }

       if(fuelLevel.trim().length == 0 ){
         isFieldsBlank = false
         fieldsWithBlankVal += "- Fuel Level"
       }
       
       if(isNaN(fuelLevel) == true){
         isFieldsWithCorrectData = false
         fieldWithCorrectData += "- Fuel Level should be numeric"
       }
       
       if(cargoMass.trim().length == 0 ){
         isFieldsBlank = false
         fieldsWithBlankVal += "- Cargo Mass"
       }
       
       if(isNaN(cargoMass) == true){
         isFieldsWithCorrectData = false
         fieldWithCorrectData += "- Cargo Mass should be numeric"
       }

       if ( isFieldsBlank == false){
              window.alert(fieldsWithBlankVal)
       }
       else{
         let pilotStatus = document.getElementById("pilotStatus")
         let coPilotStatus = document.getElementById("copilotStatus")
         pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`
         coPilotStatus.innerHTML =   `Co-Pilot ${coPilotName} is ready for launch`
       }
       
       if(isFieldsWithCorrectData == false){
            window.alert(fieldWithCorrectData)
       }
       let blnLaunch = true
       
         if(Number(fuelLevel) <= 10000){
           document.getElementById("faultyItems").style.visibility = "visible"
           let fuelStatus = document.getElementById("fuelStatus")
           fuelStatus.innerHTML = "Fuel level too low for launch"
           let launchStatus = document.getElementById("launchStatus")
           launchStatus.innerHTML = "Shuttle not ready for launch"
           launchStatus.style.color = "red"
           blnLaunch = false
         }

         if(Number(cargoMass) > 10000){
          document.getElementById("faultyItems").style.visibility = "visible"
          let fuelStatus = document.getElementById("cargoStatus")
          fuelStatus.innerHTML = "Too much mass for the shuttle to take off"
          let launchStatus = document.getElementById("launchStatus")
          launchStatus.innerHTML = "Shuttle not ready for launch"
          launchStatus.style.color = "red"
          blnLaunch = false
        }
        
         if(blnLaunch = true){
          launchStatus.innerHTML = "Shuttle is ready for launch"
         }
         
         
} 


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
</img>*/
