import PropTypes from "prop-types"

const Conditional = ({toShow, fruits} ) => {

    // if ( !toShow && uslov 2 && uslov 3){
    //     return null
    // }

    return (<div> 
        { toShow && <p>111</p> }
        { toShow ? <p>111</p> : <p>222</p>}

        {/* <ul>
            {fruits && fruits.map((fruit, index) => {
                return (<li key={index}>{fruit}</li>)
            })}
        </ul> */}

        <ul>
            {fruits && fruits.map((fruit, i) => <li key={i}>{fruit}</li>)}
        </ul>
    </div>
    )
}

export default Conditional

Conditional.propTypes = {
    toShow: PropTypes.bool,
    fruits: PropTypes.arrayOf(PropTypes.string).isRequired
}

// if ( toShow ) {
//     // print somethjing
// } else {
//     // print something else
// }