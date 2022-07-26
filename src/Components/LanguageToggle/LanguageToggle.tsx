import { useTranslation } from "react-i18next";
import CustomSelect from "../CustomSelect/CustomSelect";
import s from "./LanguageToggle.module.scss";
import i18next from "i18next";
type langType = {
    value: string;
    name: string;
};
const langOption: Array<langType> = [
    { value: "en", name: "EN" },
    { value: "ua", name: "UA" },
];

const LanguageToggle = () => {
    const { t } = useTranslation();
    const handlerLangToggle = (value: string) => {
        console.log(value);
        localStorage.setItem("Lang", value);
        i18next.changeLanguage(value);
    };
    return (
        <div className={s.wrapper}>
            <CustomSelect
                option={langOption}
                fn={handlerLangToggle}
                defaultValue={i18next.language}
            />
        </div>
    );
};

export default LanguageToggle;
