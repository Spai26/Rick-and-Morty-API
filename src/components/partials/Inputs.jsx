const Inputs = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div>
      <label htmlFor={inputProps.htmlFor}> {label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default Inputs;
