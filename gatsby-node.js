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
      items(input:{first:1, skip: 0}){
        nodes {
          itemId
          name
          slug
          description
          images {
            baseUrl
          }
        }
        totalCount
      }
    }
  }
  `)
  const listId = result.data.tictic.getList.listId
  const itemId = result.data.tictic.getItem.itemId
  createPage({
    path: "list/" + listId,
    component: path.resolve(`./src/templates/list.js`),
    context: {
      slug: listId,
    },
  })
  createPage({
    path: "item/" + itemId,
    component: path.resolve(`./src/templates/item.js`),
    context: {
      slug: itemId,
    },
  })
  for (let i = 0; i < 1; i++) {
    createPage({
      path: result.data.tictic.items.nodes[i].itemId,
      component: path.resolve(`./src/templates/item.js`),
      context: {
        slug: result.data.tictic.items.nodes[i].itemId,
      },
    })
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if(page.path.match(/^\/items/)) {
    page.matchPath = "/items/*"
    createPage(page)
  }
  if(page.path.match(/^\/lists/)) {
    page.matchPath = "/lists/*"
    createPage(page)
  }
}