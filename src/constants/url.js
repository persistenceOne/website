const COSMOS_API_URL = process.env.REACT_APP_API_KEY;
const KAVA_API_URL = process.env.REACT_APP_KAVA_API_KEY;

export const getCalculateComsmos = (calAddress) => `${COSMOS_API_URL}/delegator/${calAddress}`;
export const getCalculateKava = (calAddress) => `${KAVA_API_URL}/delegator/${calAddress}`;
export const getStatusURL = () => `${COSMOS_API_URL}/status`;
export const getKavaStatusURL = () => `${KAVA_API_URL}/status`;
