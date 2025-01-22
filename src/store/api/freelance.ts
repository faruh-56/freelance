import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../utils/baseUrl'
import { JobsResponse } from './types'

 
export const JobsApi = createApi({
    reducerPath: 'JobsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getJobs: builder.query<JobsResponse, { page?: number }>({
            query: ({ page = 1 }) => `/jobs?page=${page}`,
        }),
    }),
})

export const { useGetJobsQuery } = JobsApi