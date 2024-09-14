const Input = ({htmlFor, label, type, value, onChange, placeholder, required}) => {

  // const checkRequired = () => {
  //   // +implement
  // }

  return (
    <div>
      <div className="flex-container input-field-box">
        <label htmlFor={htmlFor}>{label}</label>
        <input
            type={type}
            id={htmlFor}
            className="input-field name-input" // +implement dynamic classNames **
            value={value}
            onChange={onChange}
            placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default Input;
