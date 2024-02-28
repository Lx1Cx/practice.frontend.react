export const useButton = (isLockButton?: boolean, onClick?: () => void) => {

    const ClickHandler = () => {
        if (isLockButton) {
            return
        }

        onClick?.call(null)
    }

    return {
        ClickHandler
    }
}