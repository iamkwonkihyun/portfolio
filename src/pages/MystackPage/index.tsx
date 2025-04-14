import * as S from "./styled";
import { MystackPageContents } from "../../constants/contents";

export const MystackPage = () => {
    return (
        <S.MainPageMainCont>
            {MystackPageContents.trim()
                .split("<br />")
                .map((line, idx) => (
                    <div key={idx}>{line}</div>
                ))}
        </S.MainPageMainCont>
    );
};
