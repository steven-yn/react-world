import { styled } from '@stitches/react';

const HomePageMain = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: 'lightgray',
  '&.hover': {
    backgroundColor: 'red',
  },
});

export default function Home() {
  return <HomePageMain>메인홈</HomePageMain>;
}
