import React from "react"

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { rhythm } from "../utils/typography"

const APOLLO_QUERY = gql`
  query($listId: ID!) {
    getList(listId: $listId) {
      title
      description
      image {
        imageId
        baseUrl
      }
      items{
        itemId
        name
        images {
          imageId
          baseUrl
        }
      }
    }
  }
`

const ListComponent = (prop) => {
  const { data } = useQuery(APOLLO_QUERY, { variables: { listId: prop.listId } });
  return (
    <div>
      <article>
        <header>
          <img src={(data && data.getList.image.baseUrl) + (data && data.getList.image.imageId)} alt={data && data.getList.title} />
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {data && data.getList.title}
          </h1>
        </header>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>
      {data && data.getList.items.map(({ itemId, name, images }) => (
        <div key={itemId}>
          <img src={images[0].baseUrl + images[0].imageId} alt="" />
          <h3>{name}</h3>
        </div>
      ))}
    </div>
  )
}

export default ListComponent