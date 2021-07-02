function main(){
  let images = [
    "face1.jpeg",
    "face2.jpeg",
    "face3.jpeg",
    "face4.jpeg",
    "face5.jpeg",
    "face6.jpeg",
    "face7.jpeg",
    "face8.jpeg",
    "face9.jpeg",
    "faceMustUse.jpeg",
  ];
  
  window.addEventListener("DOMContentLoaded", async () => {
    let row = document.getElementById("row");
    const response = await fetch("https://swapi.dev/api/people")
    const data = await response.json() 
    data.results.forEach((item, index) => {
          let {name,gender, height} = item;
          //console.log(item);
          let div = document.createElement("div");
          div.setAttribute("class", "row-content");
          div.innerHTML = `
            <img src='./images/${images[index]}' alt='Face${index + 1} needs to be here.' class='character-img'>

            <div class='details-container'>
                <h3 class='name-tag' id='name-${index}'>${name}</h3>
                <div class="extra-info hidden" id='extra-info-${index}'>
                <span class='gender-display' id='gender${index}'>Gender: ${gender}</span>
                <span class='height-display'>Height: ${height}</span>
                </div>
            </div>         `;

          row.append(div);
          //set onclick handler for the name tag
          let nameTag = document.getElementById(`name-${index}`);
          let extraInfoContainer = document.getElementById(`extra-info-${index}`);

          nameTag.addEventListener('click', ()=> extraInfoContainer.classList.toggle("hidden") )
        });
      
  });

}
main();
//module.exports = {main}