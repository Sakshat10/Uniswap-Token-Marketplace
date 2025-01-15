import { BigNumber, ethers } from "ethers";
import {contract, tokenContract} from "./contract";
import { toEth, toWei } from "./utils";

export async function swapEthToTOken(tokenNumber, amount) {
    try{
        let tx = {
            value: toWei(amount)
        };

        const contractObj = await contract();
        const data = await contractObj.swapEthToToken(tokenName, tx);

        const receipt = await data.wait();
        return receipt;
    }
    catch(e){
        return parseErrorMsg(e);
    }
}

export async function hasValidAllowance(owner, tokenName, amount){
    try{
        const contractObj = await contract();
        const address = await contractObj.getTokenAddress(tokenName);

        const tokenContractObj = await tokenContract(address);
        const data = await tokenContractObj.allowance(
            owner,
            "0xcAcD0A955ac5915F42Aa7B91DC40B6AE5ADfaa2d",
        );

        const result = BigNumber.from(data.toString()).gte(
            BigNumber.from(toWei(amount))
        );
        return result;
    }
    catch(e){
        return parseErrorMsg(e);
    }
}

export async function swapTokenToEth(tokenName, amount){
    try{
        const contractObj = await contract();
        const data = await contractObj.swapTokenToEth(tokenName, toWei(amount));

        const receipt = await data.wait();
        return receipt;
    }
    catch(e){
        return parseErrorMsg(e);
    }
}

export async function swapTokenToToken(srcToken, destToken, amount){
    try{
        const contractObj = await contract();
        const data = await contractObj.swapTokenToToken(
            srcToken,
            destToken,
            toWei(amount)
        );

        const receipt = await data.wait();
        return receipt;
    }catch (e) {
        return parseErrorMsg(e);
    }
}

export async function getTokenBalance(tokenName, address){
    const contractObj = await contract();
    const balance = contractObj.getBalance(tokenName, address);
    return balance;
}

export async function getTokenAddress(tokenName){
    try{
        const contractObj = await contract();
        const address = await contractObj.getTokenAddress(tokenName);
        return address;
    }
    catch(e){
        return parseErrorMsg(e);
    }
}
