import { styled } from '@stitches/react';

const HomePageMain = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: 'lightgray',
});

export default function Home() {
  return <HomePageMain>스티치 테스트</HomePageMain>;
}
