import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/Config";
const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const isShowsSearch = searchOption === "shows";
  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };
  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls
    apiGet(`/search/${searchOption}?q=${input}`).then((res) => {
      setResult(res);
      // console.log(res);
    });
  };
  const onKeyDown = (event) => {
    // console.log(event.keyCode);
    if (event.keyCode === 13) {
      onSearch();
    }
  };
  const renderResult = () => {
    // console.log(result);
    if (result && result.length === 0) {
      //no such movie
      return <div>No results</div>;
    }
    if (result && result.length > 0) {
      return result[0].show
        ? result.map((item) => <div key={item.show.id}>{item.show.name}</div>)
        : result.map((item) => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
    }
    return null;
  };

  const onRadioChange = (event) => {
    setSearchOption(event.target.value);
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search For Something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            type="radio"
            name=""
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actor-search">
          Actor
          <input
            type="radio"
            name=""
            id="actor-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
