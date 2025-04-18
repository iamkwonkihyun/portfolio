import * as S from "./styled";
import { PageContents } from "../../constants/contents";

export const AboutPage = () => {
    return (
        <S.AboutPageMainCont>
            {PageContents["about"]
                .trim()
                .split("<br />")
                .map((line, idx) => (
                    <div key={idx}>{line}</div>
                ))}
        </S.AboutPageMainCont>
    );
};
