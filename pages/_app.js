// import '../styles/global.css';

// export default function App ({ Component, paageProps }) {
//   return <Component{...paageProps} />;
// }

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
 