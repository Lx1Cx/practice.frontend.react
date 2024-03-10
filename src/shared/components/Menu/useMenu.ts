import {useAppSelector} from "../../../store.ts";

export const useMenu = () => {

    const user = useAppSelector(state => state.user.data)

    return {
        user
    }
}