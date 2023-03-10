import '../styles/globals.css'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  return (
    <>
       <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"/>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
    rel="stylesheet"/>
    </Head>
    <Navbar/>
    
    <Component {...pageProps} />
    <Footer/>
    </>
    );
}

export default MyApp
