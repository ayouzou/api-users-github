    const api="https://api.github.com/users";
async function get(){
        const response =await fetch(api);
        const data = await response.json();
        printdata(data);
        // document.querySelector("#content").innerHTML +=`<img src=${data[0].avatar_url}/>`
        getcard(data);
        
}
function printdata(data){
    document.querySelector("#select").innerHTML +=
    ` 
    <select class='form-control'>
    <option>Please select name </option> 
    ${
        data.map(actor => `<option>${actor.login}</option>`)  
    }
    </select>
    <input placeholder="Enter your text..." class="input" name="text" type="text" ">
        <button class="btn"   onclick="getperson()">
                Hover me
          </button>
    `
    
}
 function getcard(data){
        document.querySelector(".card-container").innerHTML =`
            ${data.map(card =>`
            <div class="card">
            <img src=${card.avatar_url} alt="Card Image 1">
            <div class="card-content">
              <h3 class="card-title">${card.login}</h3>
              <a href=${card.html_url}>
              <button class="learn-more" >
                   <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Learn More</span>
             </button>
             </a>
            </div>
          </div>
            `)}
        `
}
async function getperson(){
    try {
        const response = await fetch(`https://api.github.com/search/users?q=${document.querySelector(".input").value}`);
        const data = await response.json();
        console.log(data)
        document.querySelector(".card-container").innerHTML =`
        ${data.items.map(card =>`
        <div class="card">
        <img src=${card.avatar_url} alt="Card Image 1">
        <div class="card-content">
          <h3 class="card-title">${card.login}</h3>
          <a href=${card.html_url}>
          <button class="learn-more" >
               <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
         </button>
         </a>
        </div>
      </div>
        `)}
        `
    } catch (error) {
        console.log("error:" ,error.message )
    }
    
       
}
get()