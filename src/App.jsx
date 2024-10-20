import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "./Hero";
import Project from "./Project";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Hero />
        <Project />
      </main>
    </QueryClientProvider>
  );
};

export default App;
