import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiPath } from '../../common/enums/api';
import { CurrencyExchangeRes } from '../../common/types';

export const exchangeApi = createApi({
  reducerPath: 'exchangeApi',
  baseQuery: fetchBaseQuery({ baseUrl: ApiPath.BASE }),
  endpoints: (builder) => ({
    getCurrencyExchange: builder.query<CurrencyExchangeRes[], void>({
      query: () => '',
    }),
  }),
});

export const { useGetCurrencyExchangeQuery } = exchangeApi;