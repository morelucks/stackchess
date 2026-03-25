import { openContractCall } from '@stacks/connect';
import { 
  uintCV, 
  boolCV, 
  stringAsciiCV, 
  PostConditionMode,
  FungibleConditionCode,
  makeStandardSTXPostCondition
} from '@stacks/transactions';
import { STACKS_MAINNET } from '@stacks/network';
import useAppStore from '../zustand/store';

const CONTRACT_ADDRESS = 'SP34MN3DMM07BNAWYJSHTS4B08T8JRVK8AT810X1B';
const CONTRACT_NAME = 'stackchess';

export const useStacksChess = () => {
  const { address } = useAppStore();
  const network = STACKS_MAINNET;

  return { address, network };
};
