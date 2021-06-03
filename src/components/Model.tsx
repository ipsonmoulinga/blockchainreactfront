export interface Block {
    previousId?: string;
    id: string;
    pendingTransactions:Transaction[];
  }
  export interface BlockChain{
    chain: Block[];
    transactions: Transaction[];
    miningReward: number;
    difficulty: number;
  }
  export interface Transaction {
    amount:number;
    sender: User;
    receiver: User;
    status: StatusType;
  }
export enum StatusType {
  'achieved',
  'pending',
  'failed',
}

export interface User {
    privateKey:string;
    publicKey:string;
}

