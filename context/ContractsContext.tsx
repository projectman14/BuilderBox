"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';
import ContractorABI from '../contracts/Contractor.json'; 
import VerifiedContractorABI from '../contracts/VerifiedContractor.json';
import DealerABI from '../contracts/Dealer.json'; 
import DealABI from '../contracts/Deal.json';
import RequestABI from '../contracts/Request.json'; 
import SequenceABI from '../contracts/Sequence.json';
import DealNFTABI from '../contracts/DealNFT.json'; 
import DealFinalABI from '../contracts/DealFinal.json';

interface ContractState {
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.Signer | null;
  contractContractor: ethers.Contract | null;
  contractVerifiedContractor: ethers.Contract | null;
  contractDealer: ethers.Contract | null;
  contractDeal: ethers.Contract | null;
  contractRequest: ethers.Contract | null;
  contractSequence: ethers.Contract | null;
  contractDealNFT: ethers.Contract | null;
  contractDealFinal: ethers.Contract | null;
  account: string;
}

const defaultState: ContractState = {
  provider: null,
  signer: null,
  contractContractor: null,
  contractVerifiedContractor: null,
  contractDealer: null,
  contractDeal: null,
  contractRequest: null,
  contractSequence: null,
  contractDealNFT: null,
  contractDealFinal: null,
  account: 'None',
};

const ContractContext = createContext<ContractState | undefined>(undefined);

interface ContractProviderProps {
  children: ReactNode;
}

export const ContractProvider: React.FC<ContractProviderProps> = ({ children }) => {
  const [state, setState] = useState<ContractState>(defaultState);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const { ethereum } = window as any;

        if (ethereum) {
          if (!isConnecting) {
            setIsConnecting(true);

            const provider = new ethers.providers.Web3Provider(ethereum);
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const signer = provider.getSigner();
            const contractorAddress="0xC76438615bB13d43978A3E0D53772278ec474156";
            const contractorABI= ContractorABI.abi;

            const verifiedContractorAddress="0x03C199744eC39A05717b56fe245B57Efc20E2092";
            const verifiedContractorABI= VerifiedContractorABI.abi;

            const dealerAddress="0x010D1f4Ba2C7128F471957e5B39eF28b0bb8Fd24";
            const dealerABI= DealerABI.abi;

            const dealAddress="0x2fBBbdE8A3166E83906B91384415fE504Ba6eB4c";
            const dealABI= DealABI.abi;

            const requestAddress="0xA8EE69F7aF41a441C9CfA7CCf75185F9A1891019";
            const requestABI= RequestABI.abi;

            const sequenceAddress="0xCc1Bf82DBaa9d7CDf8705aAF86d4f686CD3ba436";
            const sequenceABI= SequenceABI.abi;

            const dealNFTAddress="0x79e0329baE1D592a000b9bE49b38F816dD14f337";
            const dealNFTABI= DealNFTABI.abi;

            const dealFinalAddress="0x731C380E8a64567Eea8d4Ae736B2444f6Ba759E4";
            const dealFinalABI= DealFinalABI.abi;

            const contractContractor = new ethers.Contract(contractorAddress, contractorABI, signer);
            const contractVerifiedContractor = new ethers.Contract(verifiedContractorAddress, verifiedContractorABI, signer);
            const contractDealer = new ethers.Contract(dealerAddress, dealerABI, signer);
            const contractDeal = new ethers.Contract(dealAddress, dealABI, signer);
            const contractRequest = new ethers.Contract(requestAddress, requestABI, signer);
            const contractSequence = new ethers.Contract(sequenceAddress, sequenceABI, signer);
            const contractDealNFT = new ethers.Contract(dealNFTAddress, dealNFTABI, signer);
            const contractDealFinal = new ethers.Contract(dealFinalAddress, dealFinalABI, signer);


            setState({
              provider,
              signer,
              contractContractor,
              contractVerifiedContractor,
              contractDealer,
              contractDeal,
              contractRequest,
              contractSequence,
              contractDealNFT,
              contractDealFinal,
              account: accounts,
            });

            ethereum.on('chainChanged', () => window.location.reload());
            ethereum.on('accountsChanged', () => window.location.reload());
          }
        } else {
          alert('Please install MetaMask');
        }
      } catch (error: any) {
        if (error.code === -32002) {
          console.log('MetaMask is already processing a request. Please wait.');
        } else {
          console.error(error);
        }
      } finally {
        setIsConnecting(false);
      }
    };

    connectWallet();
  }, [isConnecting]);

  return (
    <ContractContext.Provider value={state}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContract = (): ContractState => {
  const context = useContext(ContractContext);
  if (context === undefined) {
    throw new Error('useContract must be used within a ContractProvider');
  }
  return context;
};
