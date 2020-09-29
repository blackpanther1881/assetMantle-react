const API_URL = process.env.REACT_APP_API_KEY;
export const getBlockURL = (searchText) => `${API_URL}/block?height=${searchText}`;
export const getStatusURL = () => `${API_URL}/status`;
export const getValidatorURL = () => `${API_URL}/validators`;
export const getBlocksURL = (min, max) => `${API_URL}/blockchain?minHeight=${min}&maxHeight=${max}`;
export const getBlockHeightURL = (height) => `${API_URL}/block_results?height=${height}`;
export const getTransactionURL = (txHash) => `${API_URL}/tx?hash=0x${txHash}&prove=true`;
export const getBlockByHashURL = (blockHash) => `${API_URL}/block_by_hash?hash=0x${blockHash}`;
export const getBlockTransactionsURL = (blockHeight) => `${API_URL}/tx_search?query=tx.height%3D${blockHeight}&prove=true&page=1&per_page=30&order_by=asc`;