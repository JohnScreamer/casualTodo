import { FC } from "react";
import { useAppSelector } from "../../Hooks/hooks";
import { selectTheme } from "../../Selectors/Selectors";
type ThemeWrapperType = {
    children: React.ReactNode;
};
export const ThemeWrapper: FC<ThemeWrapperType> = ({ children }) => {
    const theme = useAppSelector(selectTheme);
    return (
        <div className="App" data-theme={theme}>
            {children}
        </div>
    );
};
