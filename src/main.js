"use strict";

import {createFilmDetailsTemplate } from "./components/about-film.js";
import {createCardsContainerTemplate} from "./components/cards-container.js";
import {createCardTemplate } from "./components/film.js";
import {createMenuTemplate} from "./components/menu.js";
import {createMostCommentedContainerTemplate} from "./components/most-commented-container.js";
import {createMostCommentedFilmTemplate} from "./components/most-commented-film.js";
import {createShowMoreBtnTemplate} from "./components/show-more-btn.js";
import {createSortTemplate} from "./components/sort.js";
import {createTopRatedContainerTemplate} from "./components/top-rated-container.js";
import {createTopRatedFilmTemplate} from "./components/top-rated-film.js";
import {createUserRateTemplate} from "./components/user-rate.js";


const BASE_FILMS = 5;
const CUSTOM_FILMS = 2;
const MOVIES_AMOUNT = `130 291`;

const string = `<p>${MOVIES_AMOUNT} movies inside</p>`

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);
const moviesAmountElement = siteFooterElement.querySelector(`.footer__statistics`);

render(moviesAmountElement, string, `beforeend`);

render(siteHeaderElement, createUserRateTemplate(), `beforeend`);
render(siteMainElement, createMenuTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createCardsContainerTemplate(), `beforeend`);

const filmListElement = siteMainElement.querySelector(`.films-list__container`);

for (let i = 0; i <  BASE_FILMS ; i++) {
  render(filmListElement, createCardTemplate(), `beforeend`);
}

const filmListContainerElement = siteMainElement.querySelector(`.films`);
const filmListContainerBaseElement = siteMainElement.querySelector(`.films .films-list`);

render(filmListContainerBaseElement, createShowMoreBtnTemplate(), `beforeend`);
render(filmListContainerElement, createTopRatedContainerTemplate(), `beforeend`);
render(filmListContainerElement, createMostCommentedContainerTemplate(), `beforeend`);

const filmListTopRatedElement = filmListContainerElement.querySelector(`.films-list--extra .films-list__container`);
const filmListMostCommentedElement = filmListContainerElement.querySelector(`.films-list--extra:last-of-type .films-list__container`);


for (let i = 0; i <  CUSTOM_FILMS ; i++) {
  render(filmListTopRatedElement, createTopRatedFilmTemplate(), `beforeend`);
}

for (let i = 0; i <  CUSTOM_FILMS ; i++) {
  render(filmListMostCommentedElement, createMostCommentedFilmTemplate(), `beforeend`);
}

render(document.body, createFilmDetailsTemplate(), `beforeend`);
