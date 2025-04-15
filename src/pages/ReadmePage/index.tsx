import * as S from "./styled";
import { PageContents } from "../../constants/contents";

export const ReadmePage = () => {
    return (
        <S.ReadmePageMainCont>
            {PageContents["readme"]
                .trim()
                .split("<br />")
                .map((line, idx) => (
                    <div key={idx}>{line}</div>
                ))}
        </S.ReadmePageMainCont>
    );
};
