const getPlanet = async (number) => {
    el4.innerHTML = '';
    addPreloader(el5);
    const result = await axios.get('https://swapi.dev/api/planets/' + number);
    console.log(result.data);
    removePreloader(el5);
    renderPlanet(result);

};


const el1 = document.querySelector('select[name="planetname"]');
const el2 = document.querySelector('input[name="planetnumber"]');
const el3 = document.querySelector('input[name="surch"]');
const el4 = document.querySelector('.info')
const el5 = document.getElementById("pre");
const addPreloader = (el5) => {
    el5.classList.remove('preloader--hide');
    el5.classList.add('preloader');
};

const removePreloader = (el5) => {
    el5.classList.add('preloader--hide');
}

const renderPlanet = (result) => {
    let planetname = `<h3>Name: ${result.data.name} </h3>`;
    let diameter = `<li>diameter: ${result.data.diameter} </li>`;
    let rotation_period = `<li>rotation period: ${result.data.rotation_period} </li>`;
    let climate = `<li>climate: ${result.data.climate} </li>`;
    let gravity = `<li>gravity: ${result.data.gravity} </li>`;
    let population = `<li>population: ${result.data.population} </li>`;
    let surface_water = `<li>surface_water: ${result.data.surface_water} </li>`;
    let terrain = `<li>terrain: ${result.data.terrain} </li>`;
    let orbital_period = `<li>orbital_period: ${result.data.orbital_period} </li>`;
    el4.insertAdjacentHTML('beforeend', planetname);
    el4.insertAdjacentHTML('beforeend', diameter);
    el4.insertAdjacentHTML('beforeend', climate);
    el4.insertAdjacentHTML('beforeend', gravity);
    el4.insertAdjacentHTML('beforeend', population);
    el4.insertAdjacentHTML('beforeend', surface_water);
    el4.insertAdjacentHTML('beforeend', terrain);
    el4.insertAdjacentHTML('beforeend', orbital_period);
    el4.insertAdjacentHTML('beforeend', rotation_period);
}

el1.addEventListener('change', (ev) => {
    let number = ev.target.value;
    getPlanet(number);    
});

el3.addEventListener('click', (click) => {
    let number = el2.value;
    getPlanet(number);
});



