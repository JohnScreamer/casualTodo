import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TodoPage from "./Pages/TodoPage";
import HardFormPage from "./Pages/HardFormPage";
import PostPage from "./Pages/UsersPage";
import RTKQ from "./Pages/RTKQ";
import { ThemeWrapper } from "./Components/ThemeWrapper/ThemeWrapper";
import TestPage from "./Pages/TestPage";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import "./features/i18n";
import { Trans } from "react-i18next";
const numArr = [1, 2, 3, 45];
function App() {
    const { t } = useTranslation();
    return (
        <Suspense fallback={"...Loading"}>
            <ThemeWrapper>
                <>
                    <Header />

                    <Routes>
                        <Route path="/" element={<TodoPage />} />
                        <Route path="/form/*" element={<HardFormPage />} />
                        <Route path="/users/*" element={<PostPage />} />
                        <Route path="/RTKQ" element={<RTKQ />} />
                        <Route path="/testPage" element={<TestPage />} />
                    </Routes>

                    <Footer />
                </>

                {/* {isLoading && (
                <img src={Loader} className="loader" alt="" width={"200px"} />
            )} */}
            </ThemeWrapper>
        </Suspense>
    );
}
export default App;
