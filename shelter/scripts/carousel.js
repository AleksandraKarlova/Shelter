const carouselTrack = document.querySelector('.carousel-track');
const leftButton = document.querySelector('.button-left');
const rightButton = document.querySelector('.button-right');
const carouselContent = document.querySelector('.carousel-content');

fetch('../mock/pets.json')
  .then(response => response.json())
  .then(json => addPets(json));

const createPetCard = (pet) => {
  const petCard = document.createElement('div');
  petCard.classList.add('pet-card');

  const petImage = document.createElement('img');
  petImage.src = pet.img;
  petImage.alt = pet.name;

  const petName = document.createElement('p');
  petName.innerText = pet.name;

  const petButton = document.createElement('button');
  petButton.type = 'button';
  petButton.classList.add('button');
  petButton.classList.add('button-outlined');
  petButton.innerText = 'Learn more';


  petCard.appendChild(petImage);
  petCard.appendChild(petName);
  petCard.appendChild(petButton);

  return petCard;
}

const addPets = (pets) => {
  pets.forEach(pet => {
    console.log(pet)
    const petCard = createPetCard(pet);
    carouselTrack.appendChild(petCard);
  });
}



let offset = 0;
let GAP = 90;
let CARD_COUNT = 3

if (window.matchMedia("(max-width: 320px)").matches) {
  GAP = 40;
  CARD_COUNT = 1;
} else if (window.matchMedia("(max-width: 768px)").matches) {
  GAP = 40;
  CARD_COUNT = 2;
} else {
  GAP = 90;
  CARD_COUNT = 3;
}


leftButton.addEventListener('click', () => {
  const cardWidth = carouselTrack.querySelector('.pet-card').getBoundingClientRect().width;
  const trackWidth = carouselTrack.getBoundingClientRect().width;

  offset += (cardWidth + GAP) * CARD_COUNT;
  rightButton.disabled = false;

  console.log(offset)
  if (offset >= 0) {
    offset = 0;
    leftButton.disabled = true;
  }

  carouselTrack.style.transform = `translateX(${offset}px)`;
});

rightButton.addEventListener('click', () => {
  const cardWidth = carouselTrack.querySelector('.pet-card').getBoundingClientRect().width;
  const trackWidth = carouselTrack.getBoundingClientRect().width;

  offset -= (cardWidth + GAP) * CARD_COUNT;
  leftButton.disabled = false;

  if (Math.abs(offset) >= trackWidth - (cardWidth * CARD_COUNT + GAP * (CARD_COUNT - 1))) {
    offset = -(trackWidth - (cardWidth * CARD_COUNT + GAP * (CARD_COUNT - 1)));
    rightButton.disabled = true;
  }

  carouselTrack.style.transform = `translateX(${offset}px)`;
})



