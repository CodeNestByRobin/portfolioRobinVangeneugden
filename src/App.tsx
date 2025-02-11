import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Routing from "./navigation/routing.tsx";
import {Suspense, useEffect} from "react";
import Navbar from "./navigation/navbar.tsx";
import LoadingPage from "./utils/loadingPage.tsx";
import {useColor} from "./hooks/useColor.ts";
import Footer from "./footer/footer.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: import.meta.env.PROD
        },

    },
})
function App() {

    const root = document.documentElement;
    const {primaryColor} = useColor()

    useEffect(() => {

        root.style.setProperty('--primary-color', primaryColor);
    }, [primaryColor]);



  return (

        <div>
            <Navbar/>
            <Suspense fallback={<LoadingPage/>}>
                <QueryClientProvider client={queryClient}>
                    <Routing/>
                    <Footer/>
                </QueryClientProvider>
            </Suspense>

        </div>
  )
}

export default App
