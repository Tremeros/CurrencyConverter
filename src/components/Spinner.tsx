import React from "react";

const Spinner = (): JSX.Element => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>Loading, please wait...</div>
    </div>
  );
};

export default Spinner;
