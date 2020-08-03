import React from "react";
import { connect } from "react-redux";
import { Latest, fetchLatest } from "../actions";
import { StoreState } from "../reducers";
import Spinner from "./Spinner";
import { Select } from "./Select";

interface AppProps {
  latest: Latest;
  fetchLatest: Function;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: true };
  }

  async componentDidMount() {
    await this.props.fetchLatest("USD");

    console.log(this.props.latest);
    console.log(Object.keys(this.props.latest.rates));
    console.log(Object.entries(this.props.latest.rates));
    this.setState({ fetching: false });
  }

  // componentDidUpdate() {
  //   this.props.fetchLatest(this.state.currency);
  // }

  list(): JSX.Element[] {
    const objectArray = Object.entries(this.props.latest.rates);

    return objectArray.map((el, index) => {
      return (
        <div key={index} className='main__list'>
          <div className='main__list__element' key={index}>
            <div>{el[0]}</div> <div>{el[1]}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='main'>
        <div className='container'>
          {this.state.fetching ? <Spinner /> : null}
          <h1>{this.props.latest.base}</h1>

          <Select />
          {this.list()}
        </div>
      </div>
    );
  }
}

const mapStateToprops = ({ latest }: StoreState): { latest: Latest } => {
  return { latest };
};

export const App = connect(mapStateToprops, { fetchLatest })(_App);
