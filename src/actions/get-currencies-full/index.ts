import ConnectApi from '../../utils/connect-api'
import { Error } from '../../types'

export interface GetCurrenciesFullReturn {
  currencies: [string]
}

const getCurrenciesFull = async ({ apiKey }: { apiKey: string }): Promise<GetCurrenciesFullReturn | Error> => {
  const API = new ConnectApi({ apiKey })

  const { data } = await API.get('/full-currencies')
  return data
}

export default getCurrenciesFull
