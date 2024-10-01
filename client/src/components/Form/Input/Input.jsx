// Style
import './Input.css';

const Input = ({containerClassName, labelClassName, inputClassName, 
  htmlFor, label, type, value, onChange, placeholder, required}) => {

  // const checkRequired = () => {
    // +
  // }

  return (
    <div className={`generic-input-container ${containerClassName}`}>
      {/* ! */}
        <label className={`generic-label ${labelClassName}`} htmlFor={htmlFor}>{label}</label>
        <input
            className={`generic-input ${inputClassName}`}
            type={type}
            id={htmlFor}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
  )
}

export default Input;
