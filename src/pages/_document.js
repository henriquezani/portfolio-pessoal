import Document, {Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
     render(){
         return(
             <Html lang="pt-Br">
                 <Head>
                     <link rel="preconnect" href="https://fonts.googleapis.com" />
                     <link rel="preconnect" href="https://fonts.gstatic.com" />
                     <meta charSet="utf-8" />
                     <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Fira+Mono&family=Inter:wght@400;600;700&family=Open+Sans:wght@400;600;700&family=Roboto+Mono&display=swap" rel="stylesheet" /> 
                     <link rel="icon" href="favicon/favicon.ico" />
                     <meta name="theme-color" content="#181818" />
                     <meta name="description" content="Portfólio do Henrique Zani"/>

                    <meta name="image" content="https://henriquezani.com/og.png" />
                    <meta property="og:title" content="Henrique Zani" />
                    <meta property="og:description" content="Meu portfólio pessoal" />
                    <meta property="og:image" content="https://henriquezani.com/og.png" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:image" content="https://henriquezani.com/og.png" />
                    <meta name="twitter:creator" content="@henriquezani_" />
                    <meta name="twitter:title" content="Henrique Zani" />
                    <meta name="twitter:description" content="Meu portfólio pessoal" />
                 </Head>
                 <body>
                    <Main />
                    <NextScript />
                 </body>
             </Html>
         )
     }
 }