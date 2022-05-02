import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import SearchComponent from '../components/SearchComponent';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col h-screen justify-center'>
      <Head>
        <title>Google</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/Google-favicon.png' />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <SearchComponent />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
