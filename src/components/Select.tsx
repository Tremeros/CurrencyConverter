import React from "react";
import { connect } from "react-redux";
import { Latest, fetchLatest } from "../actions";
import { StoreState } from "../reducers";
import Spinner from "./Spinner";

interface AppProps {
  latest: Latest;
  fetchLatest: Function;
}

interface AppState {
  currency: String;
  fetching: boolean;
}

class _Select extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false, currency: "latest?base=USD" };
  }

  handleChange = async (e: { target: { value: any } }) => {
    await this.setState({ fetching: true, currency: e.target.value });
    await this.props.fetchLatest(this.state.currency);
    this.setState({ fetching: false });
  };

  // componentDidUpdate() {
  //   this.props.fetchLatest(this.state.currency);
  // }

  render() {
    return (
      <div className='selectForm'>
        {this.state.fetching ? <Spinner /> : null}
        <label>Select currency</label>
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
      </div>
    );
  }
}

const mapStateToprops = ({ latest }: StoreState): { latest: Latest } => {
  return { latest };
};

export const Select = connect(mapStateToprops, { fetchLatest })(_Select);
