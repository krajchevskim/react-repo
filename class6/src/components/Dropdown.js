const Dropdown = ({ options, onDropDownChange }) => { // ја ископирав оваа компонента од часот и направив мала модификација
    return (
      <div>
        <label>Choose an app:</label>
        <select name='app' onChange={onDropDownChange}>
          {options.map((option) => {
            return (
              <option value={option.name} key={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

export default Dropdown;