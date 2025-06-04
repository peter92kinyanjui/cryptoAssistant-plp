export const cryptoDb = {
  Bitcoin: {
    priceTrend: "rising",
    marketCap: "high",
    energyUse: "high",
    sustainabilityScore: 3,
    description: "The first and most well-known cryptocurrency, known for its store of value properties.",
    recommendation: "Suitable for long-term investment despite environmental concerns."
  },
  Ethereum: {
    priceTrend: "stable",
    marketCap: "high",
    energyUse: "medium",
    sustainabilityScore: 6,
    description: "A blockchain platform featuring smart contracts and decentralized applications.",
    recommendation: "Good balance of established presence and sustainability."
  },
  Cardano: {
    priceTrend: "rising",
    marketCap: "medium",
    energyUse: "low",
    sustainabilityScore: 8,
    description: "A proof-of-stake blockchain platform focused on sustainability.",
    recommendation: "Excellent choice for environmentally conscious investors."
  }
};

export const generateResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // Disclaimer to be added to investment advice
  const disclaimer = "\n\nRemember: Cryptocurrency investments carry risks. Always conduct your own research before investing!";

  // Check for trending/rising coins
  if (lowerQuery.includes("trend") || lowerQuery.includes("rising")) {
    const trendingCoins = Object.entries(cryptoDb)
      .filter(([_, data]) => data.priceTrend === "rising")
      .map(([name, _]) => name)
      .join(" and ");
    return `Based on current trends, ${trendingCoins} are showing upward momentum! 📈 These could be interesting opportunities to explore.${disclaimer}`;
  }

  // Check for sustainability queries
  if (lowerQuery.includes("sustain") || lowerQuery.includes("eco") || lowerQuery.includes("environment")) {
    const sustainableCoins = Object.entries(cryptoDb)
      .sort(([_, a], [__, b]) => b.sustainabilityScore - a.sustainabilityScore);
    const mostSustainable = sustainableCoins[0];
    return `${mostSustainable[0]} is leading in sustainability with a score of ${mostSustainable[1].sustainabilityScore}/10! 🌱 It has ${mostSustainable[1].energyUse} energy usage and ${mostSustainable[1].recommendation}${disclaimer}`;
  }

  // Check for specific coin queries
  for (const [coin, data] of Object.entries(cryptoDb)) {
    if (lowerQuery.includes(coin.toLowerCase())) {
      return `${coin} currently shows a ${data.priceTrend} price trend with ${data.marketCap} market cap. ${data.description} ${data.recommendation}${disclaimer}`;
    }
  }

  // Check for investment advice
  if (lowerQuery.includes("invest") || lowerQuery.includes("buy") || lowerQuery.includes("recommend")) {
    const highPotentialCoins = Object.entries(cryptoDb)
      .filter(([_, data]) => data.priceTrend === "rising" && data.marketCap === "high")
      .map(([name, _]) => name);
    
    if (highPotentialCoins.length > 0) {
      return `Based on market cap and trends, ${highPotentialCoins.join(" and ")} show strong potential. These are established cryptocurrencies with positive momentum.${disclaimer}`;
    }
    return `Currently, I recommend researching coins with rising trends and high market caps. Consider factors like sustainability and your risk tolerance.${disclaimer}`;
  }

  // Handle greetings
  if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery === "hey") {
    return "Hello! 👋 I'm your Crypto Assistant. I can help you with cryptocurrency information and investment guidance. Feel free to ask about specific coins, sustainability, or market trends!";
  }

  // Default response
  return "I can help you with information about cryptocurrencies! Try asking about:\n- Which cryptocurrencies are trending up\n- The most sustainable coins\n- Specific coins like Bitcoin, Ethereum, or Cardano\n- Investment recommendations";
};