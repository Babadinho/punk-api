import Head from 'next/head';
import Beers from '@/layouts/Beers/Beers';
import BeerData from '@/interfaces/BeerData';
import { Container, ActionWrapper } from '@/styles/index';
import Router from 'next/router';
import Header from '@/layouts/Header/Header';
import Search from '@/components/Search/Search';
import Filter from '@/components/Filter/Filter';
import { FilterData } from '@/components/types/FilterData';

const BeerEndPoint = 'https://api.punkapi.com/v2/beers';

const handleSearch = (searchTerm: string) => {
  Router.push({
    pathname: '/',
    query: { search: searchTerm },
  });
};

const handleFilter = (filterOption: FilterData) => {
  const filterEntries = Object.entries(filterOption);
  const filterQuery = filterEntries
    .filter(([key, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  Router.push({
    pathname: '/',
    query: { filter: filterQuery },
  });
};

export const getServerSideProps = async (context: { query: any }) => {
  const { query } = context;
  const { page = 1, per_page = 16 } = query;
  let search = query.search || null;
  let filter = query.filter;
  try {
    let url = `${BeerEndPoint}?page=${page}&per_page=${per_page}`;

    // append search term to url if user searches for beer
    if (search) {
      url += `&beer_name=${search}`;
    }
    // append filter otions to url if provided by user
    if (filter) {
      url += `&${filter}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    return {
      props: {
        beers: data,
        page: parseInt(page),
        per_page: parseInt(per_page),
        search,
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
        <meta name='description' content='Punk API project by Donald Iloekwe' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Container>
          <Header />
          <ActionWrapper>
            <Search handleSearch={handleSearch} />
            <Filter handleFilter={handleFilter} />
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
