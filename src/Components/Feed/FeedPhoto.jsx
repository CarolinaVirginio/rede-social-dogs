import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Error';

const FeedPhoto = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    //user: 0, significa que ele vai puxar de qualquer usuário, e não só de um usuário específico
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error)
    return (
      <div>
        <FeedPhotosItem />
      </div>
    );
};

export default FeedPhoto;
