import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Avatar from '../components/Avatar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <header className='h-16 w-full bg-gray-300 flex items-center text-sm px-5'>
        <div className='flex items-center gap-3 ml-auto'>
          <div className='flex gap-3'>
            <Link href={'/'}>
              <a className='link'>Gmail</a>
            </Link>
            <Link href={'/'}>
              <a className='link'>Images</a>
            </Link>
          </div>

          {/* Icon */}
          <p>Icon</p>
          {/* Avatar */}
          <div>
            <Avatar url='/jaber 2.jpg' />
          </div>
        </div>
      </header>

      {/* Body */}

      {/* Footer */}
    </div>
  );
};

export default Home;
