import React, {useState} from 'react';
import {FilterValue} from '../../const';

type Props = {
  setSelectedSortValue: (value: FilterValue) => void,
  selectedSortValue: FilterValue,
}

function OfferSorting({setSelectedSortValue, selectedSortValue}: Props) {
  const [isActive, setIsActive] = useState(false);

  const handleFilterClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLElement;
    setIsActive(!isActive);

    setSelectedSortValue(target.textContent as FilterValue);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={
          (evt) => {
            evt.preventDefault();
            setIsActive(!isActive);
          }
        }
      >
        {selectedSortValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isActive ? 'places__options--opened' : null}`}>
        <li className={`places__option ${FilterValue.POPULAR === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{FilterValue.POPULAR}</li>
        <li className={`places__option ${FilterValue.PRICE_DESC === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{FilterValue.PRICE_DESC}</li>
        <li className={`places__option ${FilterValue.PRICE_ASC === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{FilterValue.PRICE_ASC}</li>
        <li className={`places__option ${FilterValue.TOP_RATED === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{FilterValue.TOP_RATED}</li>
      </ul>
    </form>
  );
}

export default OfferSorting;
