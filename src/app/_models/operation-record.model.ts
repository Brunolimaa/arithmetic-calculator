export interface OperationRecord {
  id: number;
  operation: {
    id: number;
    type: string;
    cost: number;
  };
  user: {
    id: number;
    username: string;
    password: string;
    status: string;
    balance: number;
  };
  amount: number;
  userBalance: number;
  operationResponse: string;
  date: string;
}
