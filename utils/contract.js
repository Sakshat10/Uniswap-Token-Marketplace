import { ethers } from "ethers";
import CustomDexABI from "./CustomDex.json";
import CustomTokenABI from "./CustomToken.json";

export const tokenContract = async (address) => 
{
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const {ethereum} = window;

    if (ethereum) {
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
            address,
            CustomTokenABI.abi,
            signer
    );

    return contractReader;
    }
};

export const contract = async ()=> {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum} = window;

    if(ethereum){
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
            "0xcAcD0A955ac5915F42Aa7B91DC40B6AE5ADfaa2d",
            CustomDexABI.abi,
            signer
        )
        return contractReader;
    }
};