import React, {useState} from 'react';
import {FILTER_VALUE} from '../../const';

function OffersSorting() {
  const [filterValue, setFilterValue] = useState<string | null>('Popular');
  const [isActive, setIsActive] = useState(false);

  const handleFilterClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLElement;
    setIsActive(!isActive);
    setFilterValue(target.textContent);
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
        {filterValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isActive ? 'places__options--opened' : null}`}>
        <li className={`places__option ${FILTER_VALUE.POPULAR === filterValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>Popular</li>
        <li className={`places__option ${FILTER_VALUE.PRICE_DESC === filterValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>Price: low to high</li>
        <li className={`places__option ${FILTER_VALUE.PRICE_ASC === filterValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>Price: high to low</li>
        <li className={`places__option ${FILTER_VALUE.TOP_RATED === filterValue ? 'places__option--active' : null}`} tabIndex={0} onClick={handleFilterClick}>Top rated first</li>
      </ul>
    </form>
  );
}

export default OffersSorting;
