import { useContext } from "react"
import { GalleryContext } from "../providers/GalleryProvider"

export const Gallery = () => {

    const providerValue = useContext(GalleryContext)
    
    return (
        <div>
            <pre>{JSON.stringify(providerValue, null, 2)}</pre>
        </div>
    )
}