import * as S from "./styled";

export const ContactPage = () => {
    return (
        <S.ContactPageMainCont>
            <div>{`"contact": {`}</div>
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;"Email":&nbsp;
                <S.ProjectName href='mailto:iamkwonkihyun@gmail.com' target='_blank'>
                    "Click to send email"
                </S.ProjectName>
                ,
            </div>
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;"GitHub":&nbsp;
                <S.ProjectName href='https://github.com/iamkwonkihyun' target='_blank'>
                    "Click to go to the GitHub page"
                </S.ProjectName>
                ,
            </div>
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;"Instagram":&nbsp;
                <S.ProjectName href='https://instagram.com/_kihyu.n' target='_blank'>
                    "Click to see Instagram"
                </S.ProjectName>
            </div>
            <div>{`}`}</div>
        </S.ContactPageMainCont>
    );
};
