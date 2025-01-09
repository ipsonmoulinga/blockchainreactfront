import axios from 'axios';
import { passwordStrength } from 'check-password-strength';
import {
  IblockChain,
  IDatabaseOperationStatus,
  Itransaction,
  Iuser,
} from '../model/BlockChain';
import {
  EmailState, PasswordState, TransactionSender, TransactionState,
} from '../model/Form';

const getBlockChain = async () :Promise<IblockChain> => {
  const emptyBlockChain :IblockChain = {
    chain: [],
    transactions: [],
    miningReward: 0,
    difficulty: 0,
  };
  try {
    const response = await axios.get('https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/blockchain');
    return response.data;
  } catch (error) {
    console.error(error);
    return emptyBlockChain;
  }
};
export default getBlockChain;

export const mineBlockChain = async (blockchainToMine : IblockChain) :Promise<IblockChain> => {
  try {
    const response = await axios.get('https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/mine');
    return response.data;
  } catch (error) {
    console.error(error);
    return blockchainToMine;
  }
};
export const createUser = async (name:string) :Promise<IDatabaseOperationStatus> => {
  try {
    const response = await axios.get(`https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/createUser/${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return IDatabaseOperationStatus.failure;
  }
};
export const getAllUsers = async (): Promise<Iuser[]> => {
  const EmptyUsersTable :Iuser[] = [];
  try {
    const response = await axios
      .get('https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/blockChainUsers');
    return response.data;
  } catch (error) {
    console.error(error);
    return EmptyUsersTable;
  }
};
export const getAllTransactionsByUsers = async (
  publickey:string,
): Promise<Itransaction[]> => {
  const EmptyUsersTransactions :Itransaction[] = [];
  try {
    const response = await axios
      .get(`https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/getAllTransactions/${publickey}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return EmptyUsersTransactions;
  }
};
/* ******************************** */
// TRANSACTION MANAGEMENT //
/* ******************************** */

export const getBalance = async (
  publickey:string,
): Promise<number> => {
  try {
    const response = await axios
      .get(`https://wuwoxec28k.execute-api.eu-west-3.amazonaws.com/dev/balance/${publickey}`);
    return Number(response.data);
  } catch (error) {
    console.error(error);
    return 0;
  }
};

/* ******************************** */
// FORM VALIDATION //
/* ******************************** */
export const passWordStrengthManager = (password : string) : PasswordState => {
  if (passwordStrength(password).id === 0) {
    return {
      isValid: false,
      helperTextcolor: 'red',
      helperText: `Password strength: ${passwordStrength(password).value}`,
      value: password,
    };
  } if (passwordStrength(password).id === 1) {
    return {
      isValid: true,
      helperTextcolor: 'orange',
      helperText: `Password strength: ${passwordStrength(password).value}`,
      value: password,
    };
  } if (passwordStrength(password).id === 2) {
    return {
      isValid: true,
      helperTextcolor: 'yellow',
      helperText: `Password strength: ${passwordStrength(password).value}`,
      value: password,
    };
  } if (passwordStrength(password).id > 2) {
    return {
      isValid: true,
      helperTextcolor: 'Lime',
      helperText: `Password strength: ${passwordStrength(password).value}`,
      value: password,
    };
  }
  return {
    isValid: true,
    helperTextcolor: 'Green',
    helperText: '',
    value: password,
  };
};
/* ******************************** */
// Email validation

export const emailValiditionManager = (
  listOfAlreadyExistingEmail: string[], email: string,
): EmailState => {
  if (!email) {
    return { isValid: false, helperText: 'Type your email' };
  } if (listOfAlreadyExistingEmail.includes(email)) {
    return { isValid: false, helperText: 'Email already exist' };
  }
  return { isValid: true, helperText: '' };
};
export const emailTextualValidityManager = (
  listOfAlreadyExistingEmail: string[], email:string,
) : EmailState => {
  const requirements = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!requirements.test(email)) {
    return { isValid: false, helperText: 'Please type a valid email' };
  }
  return emailValiditionManager(listOfAlreadyExistingEmail, email);
};
export const passWordConfirmationManager = (
  alreadyEnteredPassWord: string, password:string,
) : PasswordState => {
  if (alreadyEnteredPassWord !== password) {
    return {
      isValid: false,
      helperTextcolor: 'red',
      helperText: 'Different password !',
      value: password,
    };
  }
  return {
    isValid: true,
    helperTextcolor: 'Lime',
    helperText: 'similar',
    value: password,
  };
};
/* ******************************** */
// Transaction validation
/* ******************************** */
export const updateTransactionState = (
  amountToExchange:number, senderChoosed:TransactionSender, receiverChoosed:string,
) :TransactionState => ({
  isValid: (amountToExchange <= senderChoosed.balance
              && senderChoosed.publickey !== receiverChoosed),
  helperText: (amountToExchange <= senderChoosed.balance)
    ? ''
    : `${senderChoosed.publickey} has not enough credits`,
  receiverHelperText: (
    senderChoosed.publickey
      && receiverChoosed
      && senderChoosed.publickey === receiverChoosed)
    ? (`${receiverChoosed} cannot send money to himself`)
    : '',
});
