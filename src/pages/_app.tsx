import type { AppProps } from 'next/app'
import * as React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import GlobalCss from '../style/GlobalCss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Global } from '@emotion/react'
import 'swiper/css/bundle'
import '../style/Swiper.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { store } from '../store/store'
import { Provider } from 'react-redux'

import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
declare global {
    interface UserDataState {
        email?: string
        password?: string
        nickname?: string
        name?: string
        birth?: string
        gender?: string
        image_URL?: string
    }
}
const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Head>
                <title>Movie Inner</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
            <ToastContainer />
            <Global styles={GlobalCss} />
        </Provider>
    )
}

export default MyApp
