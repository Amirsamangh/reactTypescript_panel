import type { ReactNode } from "react"
import { useAppSelector } from "../../redux/reduxHooks"

const AppContainer = ({ children }: { children: ReactNode }) => {
    const { theme } = useAppSelector(state => state.uiManagerReducer)

    return <main id="main" className={theme}>{children}</main>
}

export default AppContainer;