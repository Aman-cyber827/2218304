// api/shortenUrl.js
import logger from '../utils/logger';

export default async function shortenUrl(longUrl, validity, customCode) {
  logger("frontend", "info", "handler", `REQUEST_SHORTEN_URL: ${longUrl}, ${validity}, ${customCode}`);

  try {
    // Simulated delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Generate a dummy short URL
    const shortUrl = `https://short.ly/${customCode || 'abc123'}`;

    logger("frontend", "info", "handler", `SUCCESS_SHORTEN_URL: ${shortUrl}`);
    return { shortUrl };
  } catch (error) {
    logger("frontend", "error", "handler", `ERROR_SHORTEN_URL: ${error.message}`);
    throw error;
  }
}
