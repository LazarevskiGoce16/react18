

export const Dropdown = ({elements, onChangeDropdown, label}) => (
    <div>
        <label>{label}</label>
        <br />
        <select onChange={(e) => onChangeDropdown(e.target.value) }>
            {elements.map((element, i) => (
                <option key={i} value={element.value} >
                    {element.name}
                </option>
            ))}
        </select>
    </div>
)
