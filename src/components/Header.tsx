import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <div className='header'>
      <h1>Currency Converter</h1>
      <nav>
        <Link className='btn btn--main btn--animated' to='/'>
          Latest
        </Link>
        <Link className='btn btn--main btn--animated' to='/counter'>
          Counter
        </Link>
      </nav>{" "}
    </div>
  );
};

export default Header;
