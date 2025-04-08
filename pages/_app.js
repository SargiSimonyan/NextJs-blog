import '../styles/global.css';

export default function App ({ Component, paageProps }) {
  return <Component{...paageProps} />;
}