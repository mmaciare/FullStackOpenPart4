const lodash = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const totalLikes = blogs.reduce(
    (total, blog) => {
      return total + blog.likes
    } , 0)
  return totalLikes
}

const favoriteBlog = (blogs) => {
  const favoriteBlog = blogs.reduce(
    (mostVoted, blog) => {
      return mostVoted =
        mostVoted.likes > blog.likes ?
          mostVoted
          : { title: blog.title,
            author: blog.author,
            likes: blog.likes }
    }, 0)
  return favoriteBlog
}

const mostBlogs = (blogs) => {
  const blogsByAuthor = lodash.groupBy(blogs, 'author')
  const authorWithMostBlogs = lodash.maxBy(lodash.keys(blogsByAuthor), author => blogsByAuthor[author].length)
  return authorWithMostBlogs
}

const mostLikes = (blogs) => {
  const blogsByAuthor = lodash.groupBy(blogs, 'author')
  const authorWithMostLikes = lodash.maxBy(lodash.keys(blogsByAuthor), author => {
    const totalLikes = lodash.sumBy(blogsByAuthor[author], 'likes')
    return totalLikes
  })
  return authorWithMostLikes
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}