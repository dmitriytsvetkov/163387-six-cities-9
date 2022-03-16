import {Cities, City, Offer, Offers} from './types/offers';

export const findCityByName = (cityName:string, cities:Cities) => cities.find((item:City) => item.name === cityName);

export const getOffersByCityName = (offers:Offers, cityName:string) => offers.filter((offer:Offer) => offer.city.name === cityName);
