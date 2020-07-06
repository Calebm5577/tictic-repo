import React from "react"

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { rhythm } from "../utils/typography"

const APOLLO_QUERY = gql`
  query($itemId: ID!) {
    getItem(itemId: $itemId) {
      name
      description
      images {
        baseUrl
        imageId
      }
    }
  }
`

const ItemComponent = (prop) => {
  const { loading, error, data } = useQuery(APOLLO_QUERY, { variables: { itemId: prop.itemId } });
  return (
    <div>
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {data && data.getItem.title}
          </h1>
        </header>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>
      
      <img src={(data && data.getItem.images[0].baseUrl) + (data && data.getItem.images[0].imageId)} alt="" />
      <h3>{data && data.getItem.name}</h3>
      <p>{data && data.getItem.description}</p>
    </div>
  )
}

export default ItemComponent