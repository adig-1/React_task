import React from 'react'

const Inputs = (props) => {
  return (
    <div className="form-group">
      <input
        type="number"
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
        placeholder={props.placeholder}
        min="0"
      />
    </div>
  );
}

export default Inputs