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
                     <meta name="description" content="Portfolio do Henrique Zani"/>
                 </Head>
                 <body>
                    <Main />
                    <NextScript />
                 </body>
             </Html>
         )
     }
 }