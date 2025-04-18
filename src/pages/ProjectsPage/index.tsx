import * as S from "./styled";

import { Cursor } from "../../components";

import { PageContents } from "../../constants/contents";

export const ProjectsPage = () => {
    const lines = PageContents["projects"].trim().split("<br />");

    return (
        <S.ProjectsPageMainCont>
            {lines.map((line, idx) => {
                const trimmed = line.trim();

                switch (trimmed) {
                    case "[morse_code]":
                        return (
                            <S.ProjectItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <S.ProjectName href='https://github.com/iamkwonkihyun/Morse_Code' target='_blank'>
                                    Morse_code_ropository
                                </S.ProjectName>
                                <S.ProjectCommnet> /* Click! */</S.ProjectCommnet>
                            </S.ProjectItem>
                        );
                    case "[timetable]":
                        return (
                            <S.ProjectItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <S.ProjectName href='https://github.com/iamkwonkihyun/Timetable' target='_blank'>
                                    Timetable_repository
                                </S.ProjectName>
                            </S.ProjectItem>
                        );
                    case "[dfc_recruit]":
                        return (
                            <S.ProjectItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <S.ProjectName href='https://github.com/iamkwonkihyun/DFC_Recruit' target='_blank'>
                                    DFC_Recruit_repository
                                </S.ProjectName>
                            </S.ProjectItem>
                        );
                    case "[hanum_frontend_sports]":
                        return (
                            <S.ProjectItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <S.ProjectName
                                    href='https://github.com/hansei-hanum/hanum-frontend-sports'
                                    target='_blank'
                                >
                                    hanum_frontend_sports_repository
                                </S.ProjectName>
                            </S.ProjectItem>
                        );
                    case "[bridge]":
                        return (
                            <S.ProjectItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <S.ProjectName href='https://github.com/hanseithoooon/bridge-frontend' target='_blank'>
                                    bridge_repository
                                </S.ProjectName>
                            </S.ProjectItem>
                        );
                    default:
                        return <div key={idx}>{line}</div>;
                }
            })}
            <Cursor />
        </S.ProjectsPageMainCont>
    );
};
