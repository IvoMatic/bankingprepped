import { Address } from './Address';

export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    accountList: Account[];
}