import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '@/redux/store';
import { Provider } from 'react-redux';

function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
