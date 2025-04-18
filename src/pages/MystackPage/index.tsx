// MystackPage.tsx
import * as S from "./styled";
import { PageContents } from "../../constants/contents";
import reactLogo from "../../assets/react.png";
import typescriptLogo from "../../assets/typescript.png";
import pythonLogo from "../../assets/python.png";
import fastapiLogo from "../../assets/fastapi.png";
import flaskLogo from "../../assets/flask.png";
import nextjsLogo from "../../assets/nextjs.png";
import { Cursor } from "../../components";

export const MystackPage = () => {
    const lines = PageContents["mystack"].trim().split("<br />");

    return (
        <S.MystackPageMainCont>
            {lines.map((line, idx) => {
                const trimmed = line.trim();

                switch (trimmed) {
                    case "[react]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={reactLogo} alt='React' />
                                <S.StackName>React</S.StackName>
                            </S.StackItem>
                        );
                    case "[reactnative]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={reactLogo} alt='React' />
                                <S.StackName>ReactNative</S.StackName>
                            </S.StackItem>
                        );
                    case "[typescript]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={typescriptLogo} alt='TypeScript' />
                                <S.StackName>TypeScript</S.StackName>
                            </S.StackItem>
                        );
                    case "[python]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={pythonLogo} alt='Python' />
                                <S.StackName>Python</S.StackName>
                            </S.StackItem>
                        );
                    case "[flask]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={flaskLogo} alt='flask' />
                                <S.StackName>Flask</S.StackName>
                            </S.StackItem>
                        );
                    case "[fastapi]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={fastapiLogo} alt='FastAPI' />
                                <S.StackName>FastAPI</S.StackName>
                            </S.StackItem>
                        );
                    case "[nextjs]":
                        return (
                            <S.StackItem key={idx}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.StackImg src={nextjsLogo} alt='FastAPI' />
                                <S.StackName>Next.js</S.StackName>
                            </S.StackItem>
                        );
                    default:
                        return <div key={idx}>{line}</div>;
                }
            })}
            <Cursor />
        </S.MystackPageMainCont>
    );
};
