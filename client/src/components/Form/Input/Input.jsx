// Style
import './Input.css';

const Input = ({htmlFor, label, type, value, onChange, placeholder, required}) => {

  // const checkRequired = () => {
  //   // +implement
  // }

  return (
    <div className="container flex-container input-field-box">
        <label htmlFor={htmlFor}>{label}</label>
        <input
            type={type}
            id={htmlFor}
            // +implement dynamic classNames **
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
  )
}

export default Input;
