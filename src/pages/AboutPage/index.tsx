import * as S from "./styled";
import { Cursor } from "../../components";
import { PageContents } from "../../constants/contents";

export const AboutPage = () => {
    const lines = PageContents["readme"].trim().split("<br />");

    return (
        <S.AboutPageMainCont>
            {lines.map((line, idx) => (
                <S.AboutPageSubCont key={idx}>
                    {line}
                    {idx === lines.length - 1 && <Cursor />}
                </S.AboutPageSubCont>
            ))}
        </S.AboutPageMainCont>
    );
};
