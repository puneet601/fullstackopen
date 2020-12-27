const _ = require('lodash');
const Blog=require('../../models/blog')
const initialBlogs = [
    { title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7, __v: 0 },
    {
        title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0
    }];
const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(b => b.toJSON())
    }
const dummy = (blogs) => {
    if(blogs)
    return 1
}
const totalLikes = (blogs) => {
   let s=0
   const sum = (likes) => {
       s= s+likes
   }
  blogs.map(b => sum(b.likes) )
   return s
}
const favouriteBlog = (blogs) => {
    let maxlikes=0
    const checklikes = (b) => {
        if(b.likes>maxlikes)
        maxlikes=b.likes
    }
let x=blogs.map(b => checklikes(b))

    var max=blogs.filter(b => b.likes === maxlikes)
   
    const obj={
        title:max[0].title,
        author:max[0].author,
        likes:max[0].likes
    }
    
return obj
}
const mostBlogs = (blogs) => {
    let authorArray = _.map(blogs, 'author');
    authorArray = authorArray.sort();
    
    let i = 0; let maxAuthor = authorArray[0]; let curr = 1; let max = 1;
    for (i = 0; i < authorArray.length; i++) {
        if (authorArray[i] === authorArray[i + 1])
            curr++;
        else {
            if (curr > max) {
               
                max = curr;
                maxAuthor = authorArray[i];
            }
            curr = 1;
        }
    }
        if (max === curr)
            maxAuthor = authorArray[authorArray.length - 1];
           
      
    
    const obj = {
        author: maxAuthor,
        blogs: max
    }
    
    return obj
}
const mostLikes = (blogs) => {
   
    authorMap = new Map();
    for (let i = 0; i < blogs.length; i++) {
        if (authorMap.get(blogs[i].author) === undefined) {
            authorMap.set(blogs[i].author, blogs[i].likes);
        }
        else {
            let newlikes = blogs[i].likes;
            let oldlikes = authorMap.get(blogs[i].author);
            authorMap.set(blogs[i].author, newlikes + oldlikes);
        }
    }
    let maxlikes = Math.max(...authorMap.values());
    let maxAuthor = [...authorMap.entries()]
        .filter(({ 1: v }) => v === maxlikes).map(([k]) => k);
    const obj = {
        author: maxAuthor[0],
        likes: maxlikes

    }
    return obj;
}
module.exports = {dummy,totalLikes,favouriteBlog,mostBlogs,mostLikes,initialBlogs,blogsInDb}