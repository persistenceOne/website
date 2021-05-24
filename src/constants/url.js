const COSMOS_API_URL = process.env.REACT_APP_API_KEY;
const KAVA_API_URL = process.env.REACT_APP_KAVA_API_KEY;
const TERRA_API_URL = process.env.REACT_APP_TERRA_API_KEY;
const MATIC_API_URL = process.env.REACT_APP_MATIC_API_KEY;
const EXPLORER_URL_LINK = process.env.REACT_APP_EXPLORER_URL;

export const getCalculateComsmos = (calAddress) => `${COSMOS_API_URL}/delegator/${calAddress}`;
export const getCalculateKava = (calAddress) => `${KAVA_API_URL}/delegator/${calAddress}`;
export const getCalculateTerra = (calAddress) => `${TERRA_API_URL}/delegator/${calAddress}`;
export const getCalculateMatic = (calAddress) => `${MATIC_API_URL}/delegator/${calAddress}`;
export const getStatusURL = () => `${COSMOS_API_URL}/status`;
export const getKavaStatusURL = () => `${KAVA_API_URL}/status`;
export const getTerraStatusURL = () => `${TERRA_API_URL}/status`;
export const getMaticStatusURL = () => `${MATIC_API_URL}/status`;
export const getExplorerURL = () => `${EXPLORER_URL_LINK}`;
