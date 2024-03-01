import {useUploadedImages} from "./useUploadedImages.ts";
import {BASE_API_URL} from "../../../../../../consts.ts";
import classes from "./uploadedImages.module.css"

const UploadedImages = () => {

    const {images, DeleteHandler} = useUploadedImages()

    return (
        <>
            {images.map(image => (
                <div className={classes.image} key={image.id}>
                    <img className={classes.img} src={`${BASE_API_URL}/${image.name}`} alt={"image"} />
                    <p className={classes.button} onClick={() => DeleteHandler(image.id)}>удалить</p>
                </div>
            ))}
        </>
    );
};

export default UploadedImages;