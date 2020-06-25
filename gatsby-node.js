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
    }
  }
  `)
  const id = result.data.tictic.getList.listId
  createPage({
    path: id,
    component: path.resolve(`./src/templates/list.js`),
    context: {
      slug: id,
    },
  })
}