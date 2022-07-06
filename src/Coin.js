import React from "react";
import { Table } from "react-bootstrap";
import "./Coin.css";

const Coin = ({ filteredCoins }) => {
  return (
    <Table variant="dark" className="table">
      <thead>
        <tr>
          <th>Tên</th>
          <th className="hide">Mã</th>
          <th>Giá hiện tại</th>
          <th className="hide">Giá cao nhất trong 24h</th>
          <th className="hide">Giá thấp nhất trong 24h</th>
          <th>Tăng/Giảm</th>
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin) => {
          return (
            <tr key={coin.id}>
              <td>
                <img src={coin.image} alt="crypto" />{coin.name}
              </td>
              <td className="hide">{coin.symbol.toUpperCase()}</td>
              <td>${coin.current_price}</td>
              <td className="hide">${coin.high_24h}</td>
              <td className="hide">${coin.low_24h}</td>
              <td>
                {coin.price_change_percentage_24h < 0 ? (
                  <p className="coin-percent red">{coin.price_change_percentage_24h}%</p>
                ) : (
                  <p className="coin-percent green">{coin.price_change_percentage_24h}%</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Coin;
