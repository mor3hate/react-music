import { FC, PropsWithChildren } from "react";
import HeadProvider from "./HeadProvider";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";
import Layout from "../components/layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeadProvider>
      <PersistGate persistor={persistor} loading={null}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Layout>{children}</Layout>
          </QueryClientProvider>
        </Provider>
      </PersistGate>
    </HeadProvider>
  );
};

export default MainProvider;
