import { styled } from '@stitches/react';

import FetchUser from '@/api/FetchUser';

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

export default async function Home() {
  const res = await FetchUser.userInfo({
    cache: 'no-store',
  });

  console.log(res, 'res');

  return <HomePageMain>메인홈</HomePageMain>;
}
