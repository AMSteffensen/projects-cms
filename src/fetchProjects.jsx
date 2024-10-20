import * as contentful from "contentful";
import { useQuery } from "@tanstack/react-query";

// Contentful environment variables from Vite
const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Create a Contentful client
const client = contentful.createClient({
  space: space,
  accessToken: accessToken,
});

// Function to fetch projects
const fetchProjects = async () => {
  const response = await client.getEntries({ content_type: "project" });
  return response.items.map((item) => {
    const { title, url, image } = item.fields;
    const id = item.sys.id;
    const img = image?.fields?.file?.url;
    return { title, url, id, img };
  });
};

// Custom hook to use Fetch Projects with React Query
export const useFetchProjects = () => {
  return useQuery({
    queryKey: ["projects"], // Unique key for the query
    queryFn: fetchProjects, // Fetch function
    refetchOnWindowFocus: true,
    // Refetch when the network reconnects
    refetchOnReconnect: true,
    //staleTime: 1000 * 60 * 5, // Optional: Data stays fresh for 5 minutes
    retry: 1, // Optional: Number of times to retry fetching data on failure
  });
};

export default useFetchProjects;
