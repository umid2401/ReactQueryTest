import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryPage} from './components/ReactQuery.Page'

const queryclient=new QueryClient()
export default function App() {

  return (
    <>
    <QueryClientProvider client={queryclient}>
      <ReactQueryPage/>
    </QueryClientProvider>
    </>
  )
}
