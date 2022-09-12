import { useContext } from "react"
import { GalleryContext } from "../providers/GalleryProvider"
import { Popup } from "./Popup"

export const Gallery = () => {

    const {photos , deleteImage, selectedImage, setSelectedImage} = useContext(GalleryContext)
    
    // delete an image on click ( deleteImage )

    return (
        <div>
            {/* <pre>{JSON.stringify(photos, null, 2)}</pre> */}

            {photos.map( photo => (
                <div
                    onClick={() => deleteImage(photo.id)} 
                    onContextMenu={(e) => {
                        e.preventDefault()
                        setSelectedImage(photo.id)
                    }}
                    key={photo.id} style={{display:"inline-block"}}>
                    <img 
                    src={photo.thumbnailUrl} alt={photo.title} />
                </div>
            ))}

            { selectedImage && <Popup />}
        </div>
    )
}