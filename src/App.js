import React, { useState, useEffect } from "react";
// import { robots } from './robots'
import CardList from "./containers/CardList";
import SearchBox from "./containers/SearchBox";
import Scroll from './containers/Scroll'
import ErrorBoundry from './ErrorBoundry'

const App = () => {
  const [searchText, setsearchText] = useState("");
  const [robotsList, setrobotsList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setrobotsList(users))
  }, []);

  const onSearchChange = (e) => {
    setsearchText(e.target.value);
    console.log(searchText);
  };
  const filterRobots = robotsList.filter((robot) => {
    return robot.name.toLowerCase().includes(searchText.toLowerCase());
  });

  console.log(robotsList);
  console.log(filterRobots);

  return !robotsList.length ?
     <h1>Loading...</h1> : 
    (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchchanges={onSearchChange} />
        <Scroll>
          {/* <ErrorBoundry> */}
            <CardList robots={filterRobots} />
          {/* </ErrorBoundry> */}
        </Scroll>
      </div>
    );
  }


export default App;
