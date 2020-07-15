const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

async function getCounts(graphql){
  let query = `
  query GatsbyCounts{
    tictic{
      items{
        totalCount
      }
      lists{
        totalCount
      }
    }
  }
  `
  let result = await graphql(query)
  return {
    itemsCount: result.data.tictic.items.totalCount,
    listsCount: result.data.tictic.lists.totalCount
  }
}

async function getItems(graphql, count){
  let query = `
  query GatsbyItems{
    tictic{
      items(input:{first:${count}, skip: 0}){
        nodes {
          itemId
          slug
        }
      }
    }
  }
  `

  let result = await graphql(query)
  let items = result.data.tictic.items.nodes
  return items
}

async function getLists(graphql, count){
  let query = `
  query GatsbyLists{
    tictic{
      lists(input:{first:${count}, skip: 0}){
        nodes {
          listId
          slug
        }
      }
    }
  }
  `

  let result = await graphql(query)
  let lists = result.data.tictic.lists.nodes
  return lists
}

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  // ENV based page counts

  let itemsCount = 1
  let listsCount = 1

  {
    if('development' === process.env.NODE_ENV){
      itemsCount = 10
      listsCount = 10
    }else if('production' === process.env.NODE_ENV){
      let counts = await getCounts(graphql)
      console.log(counts);
      // TODO: change this to build every items and lists pages 
      // kept these limited to 50 each as current implementation taking lots of time for everything
      itemsCount = 50 // counts.itemsCount
      listsCount = counts.listsCount
    }

    console.log('itemsCount', itemsCount)
    console.log('listsCount', listsCount)
  }


  // ITEMS PAGES

  let items = await getItems(graphql, itemsCount)

  for(let item of items){
    let urlFullPath = `item/${item.itemId}/${item.slug ?? ''}`
    let urlMatchPath = `item/${item.itemId}/*`

    let page = {
      path: urlFullPath,
      component: path.resolve(`./src/templates/item.js`),
      context: {
        itemId: item.itemId,
      },
      matchPath: urlMatchPath
    }

    createPage(page)
  }


  // LISTS PAGES

  let lists = await getLists(graphql, itemsCount)

  for(let list of lists){
    let urlFullPath = `list/${list.listId}/${list.slug ?? ''}`
    let urlMatchPath = `list/${list.listId}/*`

    let page = {
      path: urlFullPath,
      component: path.resolve(`./src/templates/list.js`),
      context: {
        listId: list.listId
      },
      matchPath: urlMatchPath
    }

    createPage(page)
  }


  // DISCOVER PAGES - PAGINATION


  // TODO: Commented below section due to error for while production build using gatsby build 
  // Error: Building static HTML failed for path "/discoverpage"

  /*
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
  */

  // Furture Things
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