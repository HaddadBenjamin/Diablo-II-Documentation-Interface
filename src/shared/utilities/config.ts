// @ts-ignore
interface ApplicationConfiguration
{
    apiUrl : string,
    websiteUrl : string
}

const developmentConfiguration : ApplicationConfiguration =
{
    apiUrl : "http://localhost:56206/api/v1",
    websiteUrl : "https://diablo-2-enriched-documentation.netlify.com/"
};

const productionConfiguration : ApplicationConfiguration =
{
    apiUrl : "https://diablo-2-enriched-documentation.azurewebsites.net/api/v1",
    websiteUrl : "https://diablo-2-enriched-documentation.netlify.com/"
};

const config = process.env.NODE_ENV === "production" ?
    productionConfiguration :
    developmentConfiguration;

export default config;