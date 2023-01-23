const Select = (props) => {
  const selectOptions = [
    {
      id: 1,
      value: "Ascendente",
      label: "Ascendente",
    },
    {
      id: 2,
      value: "Descendente",
      label: "Descendente",
    },
  ];
  //['Male', 'Female', 'unknown', 'Genderless'];
  const selectGender = [
    {
      id: 1,
      value: "Male",
      label: "Male",
    },
    {
      id: 2,
      value: "Female",
      label: "Female",
    },
    {
      id: 3,
      value: "unknown",
      label: "unknown",
    },
    {
      id: 4,
      value: "Genderless",
      label: "Genderless",
    },
  ];

  return (
    <div>
      <select
        onChange={props.handleClick}
        defaultValue={"DEFAULT"}
        name="order"
      >
        <option value="DEFAULT" disabled>
          select option...
        </option>
        {selectOptions.map((op) => (
          <option key={op.id} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
