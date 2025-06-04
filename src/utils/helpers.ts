export const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);
  
  // Format time as HH:MM
  return date.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
};