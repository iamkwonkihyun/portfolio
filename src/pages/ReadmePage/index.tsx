import * as S from "./styled";
import { ReadmePageContents } from "../../constants/contents";

export const ReadmePage = () => {
    return (
        <S.ReadmePageMainCont>
            {ReadmePageContents.trim()
                .split("<br />")
                .map((line, idx) => (
                    <div key={idx}>{line}</div>
                ))}
        </S.ReadmePageMainCont>
    );
};
