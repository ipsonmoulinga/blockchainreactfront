export interface Iblock {
  previousId?: string;
  id: string;
  pendingTransactions:Itransaction[];
}
export default interface IblockChain{
  chain: Iblock[];
  transactions: Itransaction[];
  miningReward: number;
  difficulty: number;
}
export interface Itransaction {
  amount:number;
  sender: Iuser;
  receiver: Iuser;
  status: StatusType;
}
export enum StatusType {
  'achieved',
  'pending',
  'failed',
}
export interface ISessionUser{
  name:string;  
  email:string;  
  password:string;
  blockchainUser:Iuser;
}
export interface Iuser {
    PrivateKey:string;
    PublicKey:string;
}
export enum IDatabaseOperationStatus {
  'success' = 'success',
  'failure' = 'failure',
}