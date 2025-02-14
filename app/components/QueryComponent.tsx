'use client'

import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

const HELLO_QUERY = gql`
  query Hello {
    hello
  }
`

interface Hello {
  hello: string
}

export default function HelloQuery() {
  const { loading, error, data } = useQuery<Hello>(HELLO_QUERY)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>{data?.hello}</h1>
    </div>
  )
}