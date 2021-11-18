const chainID = 'cosmoshub-4';

async function KeplrWallet() {
    if (!window.getOfflineSigner || !window.keplr) {
        throw new Error("Install keplr extension");
    }
    const chainId = chainID;
    await window.keplr.enable(chainId);
    const offlineSigner = window.getOfflineSigner(chainId);
    const accounts = await offlineSigner.getAccounts();
    localStorage.setItem('keplrAddress', accounts[0].address);
}

export default KeplrWallet;
