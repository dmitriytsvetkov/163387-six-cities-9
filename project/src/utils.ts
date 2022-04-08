import {Cities, City, Offer, Offers} from './types/offers';
import dayjs from 'dayjs';
import {FilterValue} from './const';

export const findCityByName = (cityName: string | null, cities: Cities) => cities.find((item:City) => item.name === cityName);

export const getOffersByCityName = (offers: Offers, cityName: string | null) => offers.filter((offer:Offer) => offer.city.name === cityName);

export const getFavoriteOffers = (offers: Offers) => offers.filter((offer:Offer) => offer.isFavorite);

export const getFilteredCitiesFromOffers = (offers: Offers) => [...new Set(offers.map((item) => item.city.name))];


export const calculateRatingStars = (rating: number) => {
  if (rating > 0 && rating <= 1.5) {
    return 20;
  } else if (rating > 1.5 && rating <= 2.5) {
    return 40;
  } else if (rating > 2.5 && rating <= 3.5) {
    return 60;
  } else if (rating > 3.5 && rating <= 4.5) {
    return 80;
  } else if (rating > 4.5 && rating <= 5) {
    return 100;
  } else {
    return 0;
  }
};

export const getPointsFromOffers = (offers:Offers) => offers.map((offer) => ({...offer.location, id: offer.id}));

export const getFormattedDate = (dateFormat: string, date: Date) => dayjs(date).format(dateFormat);

export const sortOffers = (offers: Offers, filterValue: FilterValue) => {
  switch (filterValue) {
    case FilterValue.PRICE_DESC:
      return offers.sort((a, b) => a.price - b.price);
    case FilterValue.PRICE_ASC:
      return offers.sort((a, b) => b.price - a.price);
    case FilterValue.TOP_RATED:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const replaceObjectInArray = (arr1: Offers, arr2: Offers) => arr1.map((obj) => arr2.find((o) => o.id === obj.id) || obj);
