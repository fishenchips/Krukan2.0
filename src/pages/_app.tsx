import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Layout } from "@/components/layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 600000,
        cacheTime: 900000,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });

  return (
    <ChakraProvider resetCSS={false}>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </SessionProvider>
    </ChakraProvider>
  );
};

export default App;
