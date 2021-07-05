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
  
  const response = await fetch("https://swapi.dev/api/people")
  const data = await response.json()
  renderObjects(data.results);
});

function renderObjects(results) {
  const row = document.getElementById("row");
  results.forEach((item, index) => {
      const {name, gender, height} = item;
      const row_content_div = document.createElement("div");
      row_content_div.setAttribute("class", "row-content");
  
      //create image element
      const character_img = document.createElement("img");
      //style the img
      character_img.setAttribute("src", `./images/${images[index]}`);
      character_img.setAttribute("alt", `An image for ${name}`);
      character_img.classList.add("character-img");
      

      //create details container to house the character's name, height and gender
      const details_container = document.createElement("div");
      //style the container
      details_container.classList.add("details-container");

      //create an h2 element for the name
      const name_tag_h2 = document.createElement("h1");
      //add id and style the name_tag element
      name_tag_h2.setAttribute("id", `name-${index}`);
      name_tag_h2.classList.add( "name-tag");
      //set the name text
      name_tag_h2.textContent = `${name}`;
      
      
      const extra_info_div = document.createElement("div");
      extra_info_div.classList.add("extra-info", "hidden");
      
      const gender_span = document.createElement("span");
      gender_span.classList.add('gender-display')
      gender_span.textContent = `Gender: ${gender}`;

      const height_span = document.createElement("span");
      height_span.classList.add("height-display");
      height_span.textContent = `Height: ${height}`;
      

      //add the img to the row_content_div
      row_content_div.append(character_img);
      row_content_div.append(details_container);
      details_container.append(name_tag_h2);
      details_container.append(extra_info_div);
      extra_info_div.append(gender_span, height_span);


      row.append(row_content_div);

      name_tag_h2.addEventListener("click", ()=> {
          //toggle the string 'name'
          let toggleNameString = ()=>{
              let name_text = name_tag_h2.innerText;
              if( name_text.includes('Name: ')) {
                  name_text = name_text.replace("Name: ","");
              }else{
                  name_text = "Name: "+name_text
              }
              name_tag_h2.innerText = name_text;
          }

          toggleNameString();
          extra_info_div.classList.toggle("hidden")
      
      });
      
  });
}
