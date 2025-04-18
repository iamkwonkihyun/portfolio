import styled from "styled-components";

export const ProjectsPageMainCont = styled.div`
    font-family: "Fira Code", monospace;
`;

export const ProjectItem = styled.div`
    display: flex;
`;

export const ProjectName = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
`;

export const ProjectCommnet = styled.p`
    color: ${({ theme }) => theme.colors.scrollThumbHover};
`;
