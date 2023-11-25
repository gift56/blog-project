const developmentBaseUrl = "http://localhost:4000";
const productionBaseUrl = "https://dev-blog-p00h.onrender.com"; // Replace with your actual production URL


export const baseUrl =  process.env.NODE_ENV === 'production' ? productionBaseUrl : developmentBaseUrl;;
