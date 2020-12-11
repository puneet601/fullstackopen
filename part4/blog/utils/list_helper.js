const dummy=(blogs) =>{
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

module.exports = {dummy,totalLikes,favouriteBlog}