import * as S from "./styled";
import { Cursor } from "../../components";
import { PageContents } from "../../constants/contents";

export const ReadmePage = () => {
    const lines = PageContents["readme"].trim().split("<br />");

    return (
        <S.ReadmePageMainCont>
            {lines.map((line, idx) => (
                <S.ReadmePageSubCont key={idx}>
                    {line}
                    {idx === lines.length - 1 && <Cursor />}
                </S.ReadmePageSubCont>
            ))}
        </S.ReadmePageMainCont>
    );
};
