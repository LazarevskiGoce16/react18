import { useState } from "react"

export const Examples = () => {

    // Example 1
    const [car, setCar] = useState({
        model: "Hyundai",
        year: 2021,
        km : 100000
    })

    const printObject = (object) => {
        return <pre>{JSON.stringify(object, null, 2)}</pre>
    }

    const changeKm = () => {
        setCar({
            ...car,
            km : 9999
        })
    }

    // Example 2

    const [daysOff, setDaysOff] = useState(['Saturday', "Sunday"])
    const [newDay, setNewDay] = useState("")

    const addNewDayOff = () => {
        setDaysOff([...daysOff, newDay])
        setNewDay("")
    }

    return (
        <div>
            <h4>Example 1</h4>
            {printObject(car)}
            <button
                onClick={() => changeKm()}
            >Change KM to 9999</button>
            <input 
                placeholder="Enter KM"
                value={car.km}
                onChange={(e)=> setCar({...car, km: e.target.value})} 
                /> 
            <hr />
            <h4>Example 2</h4>

            <input 
                value={newDay} 
                onChange={((e) => setNewDay(e.target.value))} 
            />
            <button 
                onClick={addNewDayOff}
            >Add Day Off</button>

            {daysOff.map( (day, i) => <li key={i}>{day}</li>)}
        </div>
    )
}