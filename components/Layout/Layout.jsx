import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@300;400;700&family=Michroma&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <link rel="icon" href="/favicon.ico" />
        <script src="/pace/pace.min.js"></script>
        <link href="/pace/pace-theme-minimal.css" rel="stylesheet" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
