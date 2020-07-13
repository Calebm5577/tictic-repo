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
      items(input:{first:10, skip: 0}){
        nodes {
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
        totalCount
      }
      lists(input:{first:10, skip: 0}) {
        nodes {
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
  for (let i = 0; i < 10; i++) {
    createPage({
      path: result.data.tictic.items.nodes[i].itemId,
      component: path.resolve(`./src/templates/item.js`),
      context: {
        slug: result.data.tictic.items.nodes[i].itemId,
      },
    })
  }
  for (let i = 0; i < 10; i++) {
    createPage({
      path: result.data.tictic.lists.nodes[i].listId,
      component: path.resolve(`./src/templates/list.js`),
      context: {
        slug: result.data.tictic.lists.nodes[i].listId,
      },
    })
  }
  const posts = result.data.discoverLists
  const postsPerPage = 6
  const numPages = Math.ceil(10 / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/discoverpage` : `/discoverpage/${i + 1}`,
      component: path.resolve("./src/templates/discover.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
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