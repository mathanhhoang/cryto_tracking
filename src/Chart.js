import React from "react";
import "./Chart.css";
import TradeViewChart from "react-crypto-chart";
import { Col, Row } from "react-bootstrap";

export default function Chart() {
  return (
    <Row>
      <Col>
        <h3 className="chart-title">ETH/USDT</h3>
        <TradeViewChart  
          containerStyle={{
            minHeight: "300px",
            minWidth: "400px",
            marginBottom: "30px",
          }}
          pair="ETHUSDT"
        />
      </Col>
      <Col>
        <h3 className="chart-title">BTC/USDT</h3>
        <TradeViewChart
          containerStyle={{
            minHeight: "300px",
            minWidth: "400px",
            marginBottom: "30px",
          }}
          pair="BTCUSDT"
        />
      </Col>
      <Col>
        <h3 className="chart-title">BNB/USDT</h3>
        <TradeViewChart
          containerStyle={{
            minHeight: "300px",
            minWidth: "400px",
            marginBottom: "30px",
          }}
          pair="BNBUSDT"
        />
      </Col>
    </Row>
  );
}
