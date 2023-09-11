import styled from '@emotion/styled';

interface HomeFeedTabItemProps {
  isActive: boolean;
  href?: string;
  children: React.ReactNode;
}

const HomeFeedTabItem = styled.a<HomeFeedTabItemProps>`
  display: block;
  padding: 0.5em 1em;
  border-radius: 0;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #aaa;
  text-decoration: none; // 기본 링크 스타일 제거
  cursor: pointer;

  &:hover {
    color: #555;
    text-decoration: none; // hover 상태에서의 링크 스타일도 제거
  }

  ${props =>
    props.isActive &&
    `
    background: #fff;
    border-bottom: 2px solid #5cb85c;
    color: #5cb85c;

    &:hover {
      color: #5cb85c; // isActive가 true일 때 hover 색상을 유지
    }
  `}
`;

export default HomeFeedTabItem;
