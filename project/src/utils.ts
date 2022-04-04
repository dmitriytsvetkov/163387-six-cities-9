import {Cities, City, Offer, Offers} from './types/offers';
import dayjs from 'dayjs';

export const findCityByName = (cityName: string | null, cities: Cities) => cities.find((item:City) => item.name === cityName);

export const getOffersByCityName = (offers: Offers, cityName: string | null) => offers.filter((offer:Offer) => offer.city.name === cityName);

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
