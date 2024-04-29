import React from 'react';

function Form() {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="search for a country"
        className="form-control"
      />

      <select className="form-control">
        <option className="form-control">Filter by Region</option>
        <option className="form-control">Africa</option>
        <option className="form-control">Asia</option>
        <option className="form-control">America</option>
        <option className="form-control">Europe</option>
        <option className="form-control">Oceania</option>
      </select>
    </div>
  );
}

export default Form;
