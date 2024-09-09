"use strict";

import pets from '../mock/pets.js';

const body = document.querySelector('body');
const modalWrapper = document.querySelector('.modal-wrapper');
const closeButton = modalWrapper.querySelector('.modal-button');

const modal = document.querySelector('.modal');
const modalTitle = modal.querySelector('.modal-title');
const modalSubtitle = modal.querySelector('.modal-subtitle');
const modalDescription = modal.querySelector('.modal-description');
const modalImg = modal.querySelector('.modal-img');
const modalListItemAge = modal.querySelector('.modal-list-content[data-js="age"]')
const modalListItemInoculations = modal.querySelector('.modal-list-content[data-js="inoculations"]')
const modalListItemDiseases = modal.querySelector('.modal-list-content[data-js="diseases"]')
const modalListItemParasites = modal.querySelector('.modal-list-content[data-js="parasites"]')

const petContainer = document.querySelector('.pets-container');

function openModal(event) {
  const petCard = event.target.closest('.pet-card');

  if (petCard !== null) {
    const id = petCard.dataset.id;
    fillModalContent(id);
    body.classList.add('stopScroll');
    modalWrapper.classList.add('modal-wrapper_active');
    modal.classList.add('modal_active');
  }
}

function closeModal(event) {
  if (event.target === modalWrapper || event.target === closeButton) {
    modal.classList.remove('modal_active');
  }
}

function hideModalWrapper(event) {
  if (!event.currentTarget.classList.contains('modal_active')) {
    body.classList.remove('stopScroll');
    modalWrapper.classList.remove('modal-wrapper_active');
  }
}

function fillModalContent(name = 'Jennifer') {
  const currentPet = pets.find((pet) => pet.name === name);

  if (!currentPet) {
    return;
  }

  modalImg.src = getRelativePath(currentPet.img);
  modalTitle.innerText = currentPet.name;
  modalSubtitle.innerText = `${currentPet.type} - ${currentPet.breed}`;
  modalDescription.innerText = currentPet.description;
  modalListItemAge.innerText = currentPet.age;
  modalListItemInoculations.innerText = currentPet.inoculations;
  modalListItemDiseases.innerText = currentPet.diseases;
  modalListItemParasites.innerText = currentPet.parasites;
}

function getRelativePath(src) {
  const pathname = window.location.pathname;
  const pagePathRegExp = /\/pages\/[^\/]+\/index\.html$/;
  
  return pagePathRegExp.test(pathname) ? `../../${src}` : src;
}


petContainer.addEventListener('click', openModal);
modalWrapper.addEventListener('click', closeModal);
modal.addEventListener('transitionend', hideModalWrapper);