import React, { useEffect, useState } from "react";
import Popup from "./Popup";

import { FaSearch } from "react-icons/fa";

const Books = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [endIndex, setendIndex] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [dropValue, setDropValue] = useState(10);
  const [prevdisable, setPrevDisable] = useState(true);
  const [nextdisable, setNextDisable] = useState(false);
  const [btnTrigger, setBtnTrigger] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [slider, setSlider] = useState(19);
  const [showRange, setShowRange] = useState(false);
  const [rangeDrop, setRangeDrop] = useState(1);
  const [count, setCount] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [inputRange, setInputRange] = useState(19);
  const url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  useEffect(() => {
    fetchUrl();
    if (endIndex < dropValue) {
      setNextDisable(true);
    }
  });
  //Fetching URL
  const fetchUrl = async () => {
    const response = await fetch(url);
    const receivedData = await response.json();
    setData(receivedData);
    //console.log(receivedData)
  };
  //Getting search value
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  //Preventing on submit of form
  const handleClick = (e) => {
    e.preventDefault();
  };
  //get dropdown values for per page items
  const handleDropDown = (e) => {
    setDropValue(e.target.value);
    setendIndex(Number(startIndex) + Number(e.target.value));
  };
  //next page button handling
  const handleNext = () => {
    setPrevDisable(false);
    setNextDisable(false);
    if (endIndex < dropValue) {
      setNextDisable(true);
    }
    setStartIndex(endIndex);
    setendIndex(Number(endIndex) + Number(dropValue));
    if (endIndex > 54 || startIndex > 54 - 2 * dropValue) {
      setNextDisable(true);
      setPrevDisable(false);
      setStartIndex(53 - dropValue);
      setendIndex(54);
    }
  };
  //previous page button handling
  const handlePrevious = () => {
    setPrevDisable(false);
    setNextDisable(false);
    setendIndex(startIndex);
    setStartIndex(Number(startIndex) - Number(dropValue));

    if (startIndex <= 0 || startIndex < dropValue) {
      setPrevDisable(true);
      setNextDisable(false);
      setStartIndex(0);
      setendIndex(dropValue);
    }
  };
  //Filter popup
  const handleFilter = () => {
    setBtnTrigger(!btnTrigger);

    getPrices();
  };
  //Price range toggle
  const handlePriceRange = (e) => {
    e.preventDefault();
    setShowPrice(!showPrice);
  };
  const PriceRange = (e) => {
    setInputRange(e.target.value);
    setSlider(e.target.value);
    if (count < 2) {
      setCount(count + 1);
    }
  };
  //Get min and max prices from API
  const getPrices = () => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i].price);
      //arr.push(Number(data[i].price)+1000 )
    }
    const min = Math.min(...arr);

    const max = Math.max(...arr);
    setMinPrice(min);
    setMaxPrice(max);
   
  };
  //Handle apply button on click apply filters
  const handleApply = () => {
    console.log(slider);
    console.log(rangeDrop);
    setBtnTrigger(!btnTrigger);
    
  };
  //toggle ratings
  const handleShowRange = () => {
    setShowRange(!showRange);
  };
  //get ratings value to be filtered
  const handleRatingRange = (e) => {
    setRangeDrop(e.target.value);
    if (count < 2) {
      setCount(count + 1);
    }
  };
  //hover filter
  const handleHover = () => {
    setShowFilter(!showFilter);
  };
  const handleLeave = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="Books">
      <div className="header">
        <div className="filterArea">
          <button
            className="filterBtn"
            onClick={handleFilter}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            ({count}) Filters
          </button>
        </div>
        <form onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Search By Name"
            className="searchBox"
            onChange={handleChange}
          />
          <FaSearch className="searchIcon" />
        </form>
      </div>
      {showFilter ? (
        <div className="filterApplied">
          <p className="priceFilter">Max Price: {slider}</p>
          <p className="ranteFilter">Rating: {rangeDrop} and above</p>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        {data
          .filter((val) => {
            if (val.rating >= rangeDrop) {
              return val;
            } else {
              return null;
            }
          })

          .filter((val) => {
            return val.price < parseInt(slider, 10);
          })

          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .slice(startIndex, endIndex)
          .map((item, key) => {
            return (
              <div className="bookBlock" key={key}>
                <img
                  src={item.image_link}
                  alt={item.name}
                  className="itemImage"
                />
                <div className="details">
                  <p className="itemName">
                    <span className="title"> Name: </span>
                    {item.name}
                  </p>
                  <p className="itemBrand">
                    <span className="title">Brand: </span>
                    {item.brand}
                  </p>
                  <p className="itemrating">
                    <span className="title">Rating: </span>
                    {item.rating}
                  </p>
                  <p className="itemPrice">
                    <span className="title">INR: </span>

                    {item.price}
                  </p>
                  <p className="itemType">
                    <span className="title">Product-Type: </span>
                    {item.product_type}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="footer">
        <div className="selectSection">
          <select
            className="selectNum"
            onChange={handleDropDown}
            value={dropValue}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <span>Per Page</span>
        </div>
        <div className="pageBtns">
          <button
            className="prev"
            onClick={handlePrevious}
            disabled={prevdisable}
          >
            Prev
          </button>
          <button className="next" onClick={handleNext} disabled={nextdisable}>
            Next
          </button>
        </div>
      </div>
      <Popup trigger={btnTrigger}>
        <button className="filterBtn" onClick={handleFilter}>
          Filters
        </button>
        <div className="filterPopup">
          <div className="filterSection">
            <button className="priceRange" onClick={handlePriceRange}>
              Price Range
            </button>
            {showPrice ? (
              <div className="rangeSection">
                <div>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    onChange={PriceRange}
                    value={inputRange}
                  />
                </div>
                <div className="priceDisplay">
                  <span className="minDis">Min: {minPrice}</span>
                  <span className="maxDis">Max: {maxPrice}</span>
                </div>
              </div>
            ) : null}
            <button className="ratingRange" onClick={handleShowRange}>
              Rating Range
            </button>
            {showRange ? (
              <div className="ratingSection">
                <label htmlFor="Rating">Show Rating Above: </label>
                <select
                  className="ratingRange"
                  value={rangeDrop}
                  name="Rating"
                  onChange={handleRatingRange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            ) : null}
          </div>
          <button className="applyBtn" onClick={handleApply}>
            Apply
          </button>
        </div>
      </Popup>
    </div>
  );
};
export default Books;
