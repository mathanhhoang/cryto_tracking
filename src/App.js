import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
import Chart from "./Chart";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getApi = useCallback(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  },[]) ;

  useEffect(() => {
    getApi()
    setInterval(() => {
      getApi();
    }, 3000);
  },[getApi])

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">CRYPTO</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Tìm kiếm..."
          />
        </form>
      </div>
      <div className="chart-container">
        <Chart />
      </div>
      <Coin filteredCoins={filteredCoins} />
    </div>
  );
}

export default App;
