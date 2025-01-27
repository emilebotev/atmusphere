import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

import { Button } from '@mui/material';

import { useFetchAppCredentialsQuery } from '@/redux/featues/spotifyApiSlice';

export const MainPage = ({ children }: PropsWithChildren) => {
  const { isLoading, error, data } = useFetchAppCredentialsQuery();

  useEffect(() => {
    if (data) {
      console.log('App is authorized! with ', data);
    }
  }, [data]);
  const router = useRouter();
  const handleAuthorize = async () => {
    const authorizeUrlResponse = await fetch('/api/spotify/user-credentials');
    if (!authorizeUrlResponse.ok) {
      return;
    }
    const url = await authorizeUrlResponse.json();
    router.push(url);
  };
  return (
    <>
      Main page works
      <Button onClick={handleAuthorize}>AUTH with Spotify</Button>
      {children}
    </>
  );
};
