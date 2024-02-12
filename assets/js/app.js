const cl = console.log;

const CountryName = document.getElementById(`name`);
const capital = document.getElementById(`capital`);
const population = document.getElementById(`population`);
const Countrycard = document.getElementById(`cards`);
const searchbar = document.getElementById(`searchbar`);
const populationIcon = document.getElementById(`populationIcon`);
const capitalIcon = document.getElementById(`capitalIcon`);
const nameIcon = document.getElementById(`nameIcon`);



const templating = ele => {
  let result = ``;
  ele.forEach(eve => {
    result += `
    
    <div class="col-md-3">
    <div class="card">
      <div class="card-body">
        <figure>
      <div class="imgprop">
        <img src="${eve.flag}">
        <figcaption>
          <h3>
            ${eve.name}
          </h3>
        </figcaption>
      </div>
        </figure>
        <div class="captions">
          <p>
          <strong>Capital:</strong>
          <span> ${eve.capital}</span>
          </p>
          <p>
          <strong>Language:</strong>
          <span>${eve.languages}</span>
          </p>
          <p>
          <strong>Population:</strong>
          <span>${eve.population}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
    
    `
    Countrycard.innerHTML = result;
  });
}
templating(countries)
countries.forEach(ele => ele.capital ? ele.capital : ele.capital = "NA")


let flag ;
const onclickName = (eve) => {
  let btns = eve.target.innerText.toLowerCase().trim()
  if(btns === `name`){
    let sortname = countries.sort((country1, country2) => {
      let p = country1.name.toLowerCase();
      let m = country2.name.toLowerCase();
      if (p < m) {
            return -1
      } if (p > m) {
            return 1
      }
      return 0
})
cl(sortname)

if (flag) {
  nameIcon.classList.remove(`fa-arrow-up`)
nameIcon.classList.add(`fa-arrow-down`)
      templating(sortname)
      // flag = false;
} else {
  nameIcon.classList.remove(`fa-arrow-down`)
nameIcon.classList.add(`fa-arrow-up`)
      templating(sortname.reverse())
      // flag = true;
}
     flag = !flag
  }else if(btns === `capital`){
    if(capitalIcon.className.includes(`fa-arrow-up`)){
      let ascendingarr = countries.sort((a,b) => a.capital > b.capital ? 1 : -1);
      templating(ascendingarr)
      capitalIcon.classList.remove(`fa-arrow-up`)
      capitalIcon.classList.add(`fa-arrow-down`)
    }else{
      let descendingarr = countries.sort((a,b) => a.capital > b.capital ? -1 : 1);
      templating(descendingarr)
      capitalIcon.classList.add(`fa-arrow-up`)
      capitalIcon.classList.remove(`fa-arrow-down`)
    }
  }else if(btns === `population`){
    if(populationIcon.className.includes(`fa-arrow-up`)){
      let ascendingarr = countries.sort((a,b) => a.population > b.population ? 1 : -1);
      templating(ascendingarr)
      populationIcon.classList.remove(`fa-arrow-up`)
      populationIcon.classList.add(`fa-arrow-down`)
    }else{
      let descendingarr = countries.sort((a,b) => a.population > b.population ? -1 : 1);
      templating(descendingarr)
      populationIcon.classList.add(`fa-arrow-up`)
      populationIcon.classList.remove(`fa-arrow-down`)
    }
  }

}



CountryName.addEventListener(`click`,onclickName)
capital.addEventListener(`click`,onclickName)
population.addEventListener(`click`,onclickName)

searchbar.addEventListener('input', function(event){
  let inputvalue = event.target.value;
  console.log(inputvalue);
});