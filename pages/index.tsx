import Head from 'next/head';
import Beers from '@/layouts/Beers/Beers';
import BeerData from '@/interfaces/BeerData';
import { Container, ActionWrapper } from '@/styles/index';
import Router from 'next/router';
import Header from '@/layouts/Header/Header';
import Search from '@/components/Search/Search';
import Filter from '@/components/Filter/Filter';

const BeerEndPoint = 'https://api.punkapi.com/v2/beers';

export const getServerSideProps = async (context: { query: any }) => {
  const { query } = context;
  const { page = 1, per_page = 16 } = query;
  try {
    const res = await fetch(
      `${BeerEndPoint}?page=${page}&per_page=${per_page}`
    );
    const data = await res.json();
    return {
      props: {
        beers: data,
        page: parseInt(page),
        per_page: parseInt(per_page),
      },
    };
  } catch (error) {
    console.error(error);
  }
};

const Home = (props: { beers: BeerData[]; page: number; per_page: number }) => {
  const { beers, page, per_page } = props;

  const handleNextPage = () => {
    Router.push({
      pathname: '/',
      query: { page: page + 1, per_page },
    });
  };

  const handlePreviousPage = () => {
    if (page === 2) {
      Router.push('/');
    } else if (page > 1) {
      Router.push({
        pathname: '/',
        query: { page: page - 1, per_page },
      });
    }
  };

  return (
    <>
      <Head>
        <title>Punk API</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Container>
          <Header />
          <ActionWrapper>
            <Search />
            <Filter />
          </ActionWrapper>

          <Beers
            beers={beers}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            page={page}
          />
        </Container>
      </main>
    </>
  );
};

export default Home;
