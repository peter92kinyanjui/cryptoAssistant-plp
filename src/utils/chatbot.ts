import { cryptoDb, generateResponse as generateCryptoResponse } from './cryptoData';

// Simple response generation based on keywords
export const generateResponse = async (message: string): Promise<string> => {
  return generateCryptoResponse(message);
};