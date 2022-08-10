import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, changeHandler, ...otherProps }) => {
  console.log(4);
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

{
  /* <input
  type="text"
  required
  name="displayName"
  value={displayName}
  onChange={handleChange}
/>; */
}
