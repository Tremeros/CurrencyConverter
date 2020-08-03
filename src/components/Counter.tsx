import React from "react";
import { connect } from "react-redux";
import { Latest, fetchExchange } from "../actions";
import { StoreState } from "../reducers";
import { Select } from "./Select";

interface AppProps {
  latest: Latest;
  fetchExchange: Function;
}

interface AppState {
  from: String;
  to: String;
  amount: Number;
  course: Number;
  showText: boolean;
}

class _Counter extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { from: "", to: "", amount: 1, course: 0, showText: false };
  }

  handleChange = (e: { target: { value: any } }) => {
    if (this.state.from === "") {
      this.setState({ from: e.target.value });
    } else {
      this.setState({ to: e.target.value });
    }
  };

  changeAmount = (e: { target: { value: any } }) => {
    this.setState({
      amount: e.target.value,
    });
  };

  count = async () => {
    await this.props.fetchExchange(this.state.from, this.state.to);
    const from: Number = this.state.amount;
    const to: Number[] = Object.values(this.props.latest.rates);

    this.setState({ course: +from * +to, showText: true });
    console.log(this.state.course);
  };

  render() {
    return (
      <div className='counter'>
        <div className='container'>
          <h1>Convert</h1>
          <h2>From</h2>
          <select
            className='select ui fluid search dropdown'
            onChange={this.handleChange}
          >
            <option value='AUD'>AUD</option>
            <option value='BGN'>BGN</option>
            <option value='BRL'>BRL</option>
            <option value='CAD'>CAD</option>
            <option value='CHF'>CHF</option>
            <option value='CNY'>CNY</option>
            <option value='CZK'>CZK</option>
            <option value='DKK'>DKK</option>
            <option value='GBP'>GBP</option>
            <option value='HKD'>HKD</option>
            <option value='HRK'>HRK</option>
            <option value='HUF'>HUF</option>
            <option value='IDR'>IDR</option>
            <option value='ILS'>ILS</option>
            <option value='INR'>INR</option>
            <option value='ISK'>ISK</option>
            <option value='JPY'>JPY</option>
            <option value='KRW'>KRW</option>
            <option value='MXN'>MXN</option>
            <option value='MYR'>MYR</option>
            <option value='NOK'>NOK</option>
            <option value='NZD'>NZD</option>
            <option value='PHP'>PHP</option>
            <option value='PLN'>PLN</option>
            <option value='RON'>RON</option>
            <option value='RUB'>RUB</option>
            <option value='SEK'>SEK</option>
            <option value='SGD'>SGD</option>
            <option value='THB'>THB</option>
            <option value='TRY'>TRY</option>
            <option value='USD'>USD</option>
            <option value='ZAR'>ZAR</option>
          </select>

          <h2>To</h2>
          <select
            className='select ui fluid search dropdown'
            onChange={this.handleChange}
          >
            <option value='AUD'>AUD</option>
            <option value='BGN'>BGN</option>
            <option value='BRL'>BRL</option>
            <option value='CAD'>CAD</option>
            <option value='CHF'>CHF</option>
            <option value='CNY'>CNY</option>
            <option value='CZK'>CZK</option>
            <option value='DKK'>DKK</option>
            <option value='GBP'>GBP</option>
            <option value='HKD'>HKD</option>
            <option value='HRK'>HRK</option>
            <option value='HUF'>HUF</option>
            <option value='IDR'>IDR</option>
            <option value='ILS'>ILS</option>
            <option value='INR'>INR</option>
            <option value='ISK'>ISK</option>
            <option value='JPY'>JPY</option>
            <option value='KRW'>KRW</option>
            <option value='MXN'>MXN</option>
            <option value='MYR'>MYR</option>
            <option value='NOK'>NOK</option>
            <option value='NZD'>NZD</option>
            <option value='PHP'>PHP</option>
            <option value='PLN'>PLN</option>
            <option value='RON'>RON</option>
            <option value='RUB'>RUB</option>
            <option value='SEK'>SEK</option>
            <option value='SGD'>SGD</option>
            <option value='THB'>THB</option>
            <option value='TRY'>TRY</option>
            <option value='USD'>USD</option>
            <option value='ZAR'>ZAR</option>
          </select>

          <div className='amount ui input focus'>
            <input
              type='text'
              placeholder='How many'
              onChange={this.changeAmount}
            ></input>
          </div>
          <button className='ui button' onClick={this.count}>
            Count
          </button>
          {this.state.showText && (
            <span>
              For {this.state.amount} {this.state.from} you will pay{" "}
              {this.state.course} {this.state.to}
            </span>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToprops = ({ latest }: StoreState): { latest: Latest } => {
  return { latest };
};

export const Counter = connect(mapStateToprops, { fetchExchange })(_Counter);
