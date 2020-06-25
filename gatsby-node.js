const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  {  
    tictic {
      getList(listId: "3f204bad-f0d5-48c5-938b-05c39822a9c3") {
        listId
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
      getItem(itemId: "16df4e41-76c5-480e-b7ad-f828e82aad93") {
        description
        name
        slug
        images {
          baseUrl
          imageId
        }
        itemId
      }
    }
  }
  `)
  const id = result.data.tictic.getList.listId
  const itemId = result.data.tictic.getItem.itemId
  createPage({
    path: id,
    component: path.resolve(`./src/templates/list.js`),
    context: {
      slug: id,
    },
  })
  createPage({
    path: itemId,
    component: path.resolve(`./src/templates/item.js`),
    context: {
      slug: itemId,
    },
  })
}