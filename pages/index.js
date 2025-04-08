import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';
 
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log('🔥 allPostsData:', allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  console.log('🧩 allPostsData внутри компонента:', {allPostsData}); // <-- добавь этo

  return (
    <>
    <div>DEBUG: {JSON.stringify(allPostsData)}</div> {/* ⬅️ если это работает — значит Layout виноват */}

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi. I'm Sargis Simonyan. I'm working in Zvartnots(EVN) airport at check in agent. It's my <a href='https://www.linkedin.com/in/sargis-simonyan-64039a27a/'>Linkedin</a>. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
    </>
  );
}