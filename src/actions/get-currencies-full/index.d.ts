import { Error } from '../../types';
export interface GetCurrenciesFullReturn {
    currencies: [string];
}
declare const getCurrenciesFull: ({ apiKey }: {
    apiKey: string;
}) => Promise<GetCurrenciesFullReturn | Error>;
export default getCurrenciesFull;
