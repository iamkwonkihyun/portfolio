import * as S from "./styled";

import { Cursor } from "../../components";

export const ContactPage = () => {
    return (
        <S.ContactPageMainCont>
            <S.ProjectItem>{`"contact": {`}</S.ProjectItem>
            <S.ProjectItem>
                &nbsp;&nbsp;&nbsp;&nbsp;"Email":&nbsp;
                <S.ProjectName href='mailto:iamkwonkihyun@gmail.com' target='_blank'>
                    "Click to send email"
                </S.ProjectName>
                ,
            </S.ProjectItem>
            <S.ProjectItem>
                &nbsp;&nbsp;&nbsp;&nbsp;"GitHub":&nbsp;
                <S.ProjectName href='https://github.com/iamkwonkihyun' target='_blank'>
                    "Click to go to the GitHub page"
                </S.ProjectName>
                ,
            </S.ProjectItem>
            <S.ProjectItem>
                &nbsp;&nbsp;&nbsp;&nbsp;"Instagram":&nbsp;
                <S.ProjectName href='https://instagram.com/_kihyu.n' target='_blank'>
                    "Click to see Instagram"
                </S.ProjectName>
            </S.ProjectItem>
            <S.ProjectItem>
                {`}`}
                <Cursor />
            </S.ProjectItem>
        </S.ContactPageMainCont>
    );
};
