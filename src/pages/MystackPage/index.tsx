// MystackPage.tsx
import * as S from "./styled";
import { PageContents } from "../../constants/contents";
import reactLogo from "../../assets/react.png";
import tsLogo from "../../assets/typescript.png";
import pythonLogo from "../../assets/python.png";
import fastAPILogo from "../../assets/fastapi.png";
import flaskLogo from "../../assets/flask.png";

export const MystackPage = () => {
    const lines = PageContents["mystack"].trim().split("<br />");

    return (
        <S.MtstackPageMainCont>
            {lines.map((line, idx) => {
                const trimmed = line.trim();

                switch (trimmed) {
                    case "[React]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={reactLogo} alt='React' />
                                <S.StackName>React</S.StackName>
                            </S.StackItem>
                        );
                    case "[TypeScript]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={tsLogo} alt='TypeScript' />
                                <S.StackName>TypeScript</S.StackName>
                            </S.StackItem>
                        );
                    case "[Python]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={pythonLogo} alt='Python' />
                                <S.StackName>Python</S.StackName>
                            </S.StackItem>
                        );
                    case "[Flask]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={flaskLogo} alt='flask' />
                                <S.StackName>Flask</S.StackName>
                            </S.StackItem>
                        );
                    case "[FastAPI]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={fastAPILogo} alt='FastAPI' />
                                <S.StackName>FastAPI</S.StackName>
                            </S.StackItem>
                        );
                    default:
                        return <div key={idx}>{line}</div>;
                }
            })}
        </S.MtstackPageMainCont>
    );
};
