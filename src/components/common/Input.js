
export const Input = ({
    type,
    placeholder,
    value,
    onChange,
    name,
    id,
    mouseDown,
    mouseUp,
    ...restProps
}) => {
    const iconType =  type === "password" ? "fa fa-eye-slash" : "fa fa-eye"

    const shoudDisplayTextArea = () => {
        return name === "comment" && value && value.length > 8
    }
    return (
        <>
        { shoudDisplayTextArea() ?
        <textarea 
            name={name} 
            id={id} 
            cols="22" 
            rows="3" 
            value={value} 
            onChange={onChange}
        /> :
        <input 
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
        />}

        {name === "password" && 
            <button
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
            >
                <i className={iconType}></i>
            </button>
        }
    </>)
}