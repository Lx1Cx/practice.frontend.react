import {useCreatePlacePage} from "./useCreatePlacePage.ts";
import Input from "../../../../shared/components/Input/Input.tsx";
import Button from "../../../../shared/components/Button/Button.tsx";
import classes from "./createPlacePage.module.css"
import UploadedImages from "./UI/UploadedImages/UploadedImages.tsx";

const CreatePlacePage = () => {

    const {SubmitHandler, ChangeHandler, ref, UploadFileHandler} = useCreatePlacePage()

    return (
        <form onSubmit={SubmitHandler} className={classes.form}>
            <h1>Создание места</h1>
            <Input onChange={ChangeHandler} name={"name"} type={"text"} placeholder={"Введите название места"}/>
            <Input onChange={ChangeHandler} name={"description"} type={"text"} placeholder={"Введите описание места"}/>
            <input className={classes.upload_file} type={"file"} ref={ref} onChange={UploadFileHandler}/>
            <p className={classes.upload_text} onClick={() => ref.current?.click()}>Нажмите чтобы загрузить изображение</p>
            <UploadedImages/>
            <Button>Создать</Button>
        </form>
    );
};

export default CreatePlacePage;