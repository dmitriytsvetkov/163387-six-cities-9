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
        <li className={`places__option ${FilterValue.Popular === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{FilterValue.Popular}</li>
        <li className={`places__option ${FilterValue.PriceDesc === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{FilterValue.PriceDesc}</li>
        <li className={`places__option ${FilterValue.PriceAsc === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{FilterValue.PriceAsc}</li>
        <li className={`places__option ${FilterValue.TopRated === selectedSortValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>{FilterValue.TopRated}</li>
      </ul>
    </form>
  );
}

export default OfferSorting;
