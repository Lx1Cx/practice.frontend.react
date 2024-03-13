import classes from "./createTourPage.module.css"
import {useCreateTourPage} from "./useCreateTourPage.ts";
import Input from "../../../../shared/components/Input/Input.tsx";
import Button from "../../../../shared/components/Button/Button.tsx";
import UploadedImages from "../../places/CreatePlacePage/UI/UploadedImages/UploadedImages.tsx";
import SelectPlace from "./UI/SelectPlace/SelectPlace.tsx";
import {setTourFrom, setTourTo} from "../../../../entity/Tours/slices/tourSlice.ts";

const CreateTourPage = () => {

    const {ref, UploadFileHandler, ChangeHandler, dispatch, SubmitHandler} = useCreateTourPage()

    return (
        <form className={classes.form} onSubmit={SubmitHandler}>
            <h1>Создать тур</h1>
            <Input onChange={ChangeHandler} name={"name"} type={"text"} placeholder={"Введите название тура"}/>
            <Input onChange={ChangeHandler} name={"description"} type={"text"}
                   placeholder={"Введите описание тура"}/>
            <Input onChange={ChangeHandler} name={"price"} type={"number"} placeholder={"Введите цену тура"}/>
            <Input onChange={ChangeHandler} name={"dateStart"} type={"date"}/>
            <Input onChange={ChangeHandler} name={"dateEnd"} type={"date"}/>
            <h1>Выберите место отправки</h1>
            <SelectPlace isFrom={true} onSelect={(id) => dispatch(setTourFrom(id))}/>
            <h1>Выберите место назначения</h1>
            <SelectPlace isFrom={false} onSelect={(id) => dispatch(setTourTo(id))}/>
            <p onClick={() => ref.current?.click()} className={classes.upload_text}>Нажмите чтобы загрузить изображение</p>
            <input onChange={UploadFileHandler} type={"file"} className={classes.upload_file} ref={ref}/>
            <UploadedImages/>
            <Button>Создать тур</Button>
        </form>
    );
};

export default CreateTourPage;