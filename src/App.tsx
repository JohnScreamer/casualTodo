import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useAppSelector } from "./Hooks/hooks";
import TodoPage from "./Pages/TodoPage";
import Loader from "./assets/Spinner-1s-281px.svg";
import { selectTodoChangeLoading } from "./Selectors/Selectors";
import HardFormPage from "./Pages/HardFormPage";

function App() {
    const theme = useAppSelector((state) => state.theme.theme);
    const isLoading = useAppSelector(selectTodoChangeLoading);

    return (
        <div className="App" data-theme={theme}>
            <Header />
            <Routes>
                <Route path="/" element={<TodoPage />} />
                <Route path="/form/*" element={<HardFormPage />} />
            </Routes>

            <Footer />
            {/* <ToDo /> */}

            {isLoading && (
                <img src={Loader} className="loader" alt="" width={"200px"} />
            )}
        </div>
    );
}
export default App;
