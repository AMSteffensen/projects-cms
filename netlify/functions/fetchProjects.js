const contentful = require("contentful");
const dotenv = require("dotenv");

// Load environment variables from .env (only in development)
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// Access Contentful credentials from environment variables
const space = process.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Create a Contentful client
const client = contentful.createClient({
  space: space,
  accessToken: accessToken,
});

exports.handler = async function (event) {
  try {
    // Fetch entries from Contentful with content type "project"
    const response = await client.getEntries({ content_type: "project" });

    // Map the items to extract required fields
    const projects = response.items.map((item) => {
      const { title, url, image } = item.fields;
      const id = item.sys.id;
      const img = image?.fields?.file?.url;
      return { title, url, id, img };
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins for development
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(projects), // Respond with the mapped data
    };
  } catch (error) {
    // Handle any errors that occurred during fetching
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins for development
      },
      body: JSON.stringify({
        error: "Error fetching projects",
        details: error.message,
      }),
    };
  }
};
