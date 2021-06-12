import React from "react";
import './_input.scss';

const Input = (props) => {

  /*Shows the label*/
  const showLabel = (e) => {
    e.target.previousElementSibling.textContent = e.target.placeholder;
  }

  /*Hides the label*/
  const hideLabel = (e) => {
    e.target.previousElementSibling.textContent = '';
  }

  return (
    <div className="form-group row form_group mb-2">
      <label htmlFor="" className="form_group__label col-12"></label>
      <input
        type={props.type}
        className="form-input col-12 form_group__input input border-none"
        aria-label={props.placeholder}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={(e) => props.update(e.target.value)}
        onFocus = {showLabel}
        onBlur={hideLabel}
        required
      />
    </div>
  );
};

export default Input;
