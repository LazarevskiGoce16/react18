import { useContext } from "react"
import { GalleryContext } from "../providers/GalleryProvider"

export const Popup = () => {
    const {photos, selectedImage} = useContext(GalleryContext)

    const selectedImageObject = photos.find(photo => photo.id === selectedImage)

    return (
        <div>
            <img src={selectedImageObject.url} alt={selectedImageObject.title} />
        </div>
    )

}