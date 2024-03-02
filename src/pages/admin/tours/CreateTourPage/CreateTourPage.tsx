import classes from "./createTourPage.module.css"
import {useCreateTourPage} from "./useCreateTourPage.ts";
import Input from "../../../../shared/components/Input/Input.tsx";
import Button from "../../../../shared/components/Button/Button.tsx";
import UploadedImages from "../../places/CreatePlacePage/UI/UploadedImages/UploadedImages.tsx";
import SelectPlace from "./UI/SelectPlace/SelectPlace.tsx";
import {setTourFrom, setTourTo} from "../../../../entity/Tours/slices/tourSlice.ts";

const CreateTourPage = () => {

    const {ref, UploadFileHandler, ChangeHandler, dispatch} = useCreateTourPage()

    return (
        <form className={classes.form}>
            <h1>Create tour</h1>
            <Input onChange={ChangeHandler} name={"name"} type={"text"} placeholder={"Input name of tour"}/>
            <Input onChange={ChangeHandler} name={"description"} type={"text"}
                   placeholder={"Input description of tour"}/>
            <Input onChange={ChangeHandler} name={"price"} type={"number"} placeholder={"Input price of tour"}/>
            <Input onChange={ChangeHandler} name={"dateStart"} type={"date"}/>
            <Input onChange={ChangeHandler} name={"dateEnd"} type={"date"}/>
            <h1>Tour from</h1>
            <SelectPlace isFrom={true} onSelect={(id) => dispatch(setTourFrom(id))}/>
            <h1>Tour to</h1>
            <SelectPlace isFrom={false} onSelect={(id) => dispatch(setTourTo(id))}/>
            <p onClick={() => ref.current?.click()} className={classes.upload_text}>Click to upload image</p>
            <input onChange={UploadFileHandler} type={"file"} className={classes.upload_file} ref={ref}/>
            <UploadedImages/>
            <Button>Create tour</Button>
        </form>
    );
};

export default CreateTourPage;