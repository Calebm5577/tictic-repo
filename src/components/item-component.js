import React from "react"

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { rhythm } from "../utils/typography"

const APOLLO_QUERY = gql`
  query($itemId: ID!) {
    getItem(itemId: $itemId) {
      itemId
      name
      nameOthers
      slug
      description
      cardImage {
        imageId
        baseUrl
        thumbUrl
      }
      cardLocation
      images {
        imageId
        baseUrl
      }
      locations {
        locationId
        name
        nameDisplay
        country
      }
      tags {
        tagId
        name
        displayOrder
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
      <h4>{data && data.getItem.cardLocation}</h4>
      <h3>{data && data.getItem.nameOthers}</h3>
      <p>{data && data.getItem.description}</p>
      <h3>Tags:</h3>
      {data && data.getItem.tags.map(({ tagId, name }) => (
        <div key={tagId}>
          <span style={{padding: "1px 9px 2px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        color: "#ffffff",
                        backgroundColor: "#999999",
                        webkitBorderRadius: "9px",
                        mozBorderRadius: "9px",
                        borderRadius: "9px",
                        backgroundColor: "#b94a48"}}>{name}</span>
        </div>
      ))}
    </div>
  )
}

export default ItemComponent