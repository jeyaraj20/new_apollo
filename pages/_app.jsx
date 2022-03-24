import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../store/store';
import DefaultLayout from '../components/layouts/DefaultLayout';
import 'antd/dist/antd.css';
import 'node_modules/react-modal-video/scss/modal-video.scss';
import 'node_modules/react-component-countdown-timer/lib/styles.css';

class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.store);
    }

    render() {
        const { Component, pageProps, store } = this.props;
        const getLayout = Component.getLayout || (page => <DefaultLayout children={page} />);
        return getLayout(
            <Provider store={store}>
                <PersistGate
                    loading={<Component {...pageProps} />}
                    persistor={this.persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
