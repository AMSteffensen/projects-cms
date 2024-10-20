import { useQuery } from "@tanstack/react-query";

// Define the API endpoint based on the environment
const API_URL =
  process.env.NODE_ENV === "production"
    ? "/.netlify/functions/fetchProjects"
    : "http://localhost:8888/.netlify/functions/fetchProjects";

// Function to fetch projects from the Netlify function
const fetchProjects = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await response.json();
  return data;
};

// Custom hook to use Fetch Projects with React Query
export const useFetchProjects = () => {
  return useQuery({
    queryKey: ["projects"], // Unique key for the query
    queryFn: fetchProjects, // Fetch function
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    // Optional: Data stays fresh for 5 minutes
    //staleTime: 1000 * 60 * 5
    retry: 1, // Optional: Number of times to retry fetching data on failure
  });
};

export default useFetchProjects;
