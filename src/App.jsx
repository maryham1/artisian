import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Homepage from "./ui/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Policy from "./sections/Footer/Policy";
import Terms from "./sections/Footer/Terms";
import Security from "./sections/Footer/Security";
import Community from "./sections/Footer/Community";
import ScrollContextComponent from "./context/ScrollContext";

// import Faq from "./sections/FaqSeC/Faq";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <ScrollContextComponent>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}>
              <Route path="/policy" element={<Policy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/security" element={<Security />} />
              <Route path="/community" element={<Community />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ScrollContextComponent>
  );
}

export default App;
