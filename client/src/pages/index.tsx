import Head from 'next/head';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import dayjs from 'dayjs';

import { Post } from '../types';
import PostCard from '../components/PostCard';
// import { GetServerSideProps } from 'next';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    Axios.get('/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='pt-12'>
      <Head>
        <title>Readit the front page of the Internet</title>
      </Head>
      <div className='container flex pt-4'>
        {/* {Posts feed} */}
        <div className='w-160'>
          {posts.map((post) => (
            <PostCard key={post.identifier} post={post} />
          ))}
        </div>
        {/* {Side bar} */}
      </div>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const res = await Axios.get('/posts');

//     return { props: { posts: res.data } };
//   } catch (err) {
//     return { props: { error: 'Something went wrong' } };
//   }
// };
