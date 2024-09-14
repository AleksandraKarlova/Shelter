'use strict';

import pets from '../mock/pets.js';

const PET_ARRAY_MULTIPLYER = 6;

const petList = document.querySelector('.pets-list');

const pagination = document.querySelector('.pagination');
const paginationFirst = pagination.querySelector('[data-js="paginationStart"]');
const paginationPrev = pagination.querySelector('[data-js="paginationPrev"]');
const paginationCurrent = pagination.querySelector(
  '[data-js="paginationCurrent"]'
);
const paginationNext = pagination.querySelector('[data-js="paginationNext"]');
const paginationLast = pagination.querySelector('[data-js="paginationEnd"]');

let currentPage = 1;
let itemPerPage = 8;

const petArray = generatePetArray(pets);
console.log(petArray);

function generatePetArray(data) {
  const petArray = [];

  for (let i = 0; i < PET_ARRAY_MULTIPLYER; i++) {
    const shuffled = shuffleArray(data);
    petArray.push(...shuffled);
  }

  return petArray;
}

function shuffleArray(inputArray) {
  const array = [...inputArray];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function showPrevPage() {
  if (currentPage <= 1) {
    return;
  }

  currentPage -= 1;
  if (currentPage <= 1) {
    setPrevButtonsDisabled(true);
  }
  setNextButtonsDisabled(false);
  updatePaginationCurrent();
}

function showNextPage() {
  if (currentPage >= petArray.length / itemPerPage ) {
    return;
  }

  currentPage += 1;
  if (currentPage >= petArray.length / itemPerPage ) {
    setNextButtonsDisabled(true);
  }
  setPrevButtonsDisabled(false);
  updatePaginationCurrent();
}

function showFirstPage() {
  currentPage = 1;
  setPrevButtonsDisabled(true);
  setNextButtonsDisabled(false);
  updatePaginationCurrent();
}

function showLastPage() {
  currentPage = petArray.length / itemPerPage;
  setPrevButtonsDisabled(false);
  setNextButtonsDisabled(true);
  updatePaginationCurrent();
}


function setPrevButtonsDisabled(isDisabled) {
  paginationPrev.disabled = isDisabled;
  paginationFirst.disabled = isDisabled;
}

function setNextButtonsDisabled(isDisabled) {
  paginationNext.disabled = isDisabled;
  paginationLast.disabled = isDisabled;
}

function updatePaginationCurrent(){
  paginationCurrent.innerHTML = currentPage;
}

paginationPrev.addEventListener('click', showPrevPage);
paginationNext.addEventListener('click', showNextPage);
paginationFirst.addEventListener('click', showFirstPage);
paginationLast.addEventListener('click', showLastPage);

