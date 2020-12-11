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
const mostBlogs = (blogs) => {
        let authors=[{name:blogs[0].author,blogs:0}] 
        let c=0
        blogs.forEach(blog => {
             c+=1 
             console.log(blog.author)
                let index=authors.findIndex(author => author.name === blog.author);
                console.log("index is ",index);
                if(index === -1)
                {
                    const newObj={
                        name:blog.author,blogs:blog.count
                  
                } 
                authors.concat(newObj)}
                else{
                    authors[index].blogs =authors[index].blogs + 1
                }
        }); 
      
        
        let max={
            name:"chucknorris",blogs:0
        }
        authors.map(author => {
           if(author.blogs > max.blogs)
           {max.name=author.name 
        max.blogs=author.blogs}
        })
        console.log(max,authors,c)
        return max;
}

module.exports = {dummy,totalLikes,favouriteBlog,mostBlogs}