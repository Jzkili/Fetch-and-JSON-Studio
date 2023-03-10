window.addEventListener("load", function() {

    const container = document.getElementById("container");
    const count = document.getElementById("count")

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then
    (function(response) {
               response.json().then(function(data) {
                  console.log(data);
             
                  //count.innerHTML = `There are ${data.length} astronauts!`;
                 
                //   data.sort(function(a, b) {
                //     return a.hoursInSapce < b.hoursInSapce ? 1 : -1 ;
                //   })

                  for(let i = 0;i < data.length ; i++) {
                    let astro = data[i];
                    container.innerHTML += `
                    <div class="astronaut">
   <div class="bio">
      <h3>${astro.firstName} ${astro.lastName}</h3>
      <ul>
         <li>Hours in space: ${astro.hoursInSpace}</li>
         <li class = "${astro.active ? "green" : ""}"> Active: ${astro.active} </li>
         <li>Skills: ${astro.skills.join(", ")}</li>
      </ul>
   </div>
   <img class="avatar" src="${astro.picture}">
</div> `
                  }
                })
                })
}); // TODO: add code here