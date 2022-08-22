
import './app.css';
import './blog'
import BlogCard from './blog';

function App() {
  const myBlog = [
    {
    id: 80,
    blogTitle: 'React Developers Blog',
    blogDescr: 'Blog about new languages invented by developers',
    dateCreated: '2022/6/18',
    year: 2022
  },

  {
    id: 50,
    blogTitle: 'React Native Mobile Blog',
    blogDescr: 'Blog about new languages invented by developers',
    dateCreated: '2022/6/18',
    year: 2022
  },

  {
    id : 30,
    blogTitle: 'Mobile Developers Blog',
    blogDescr: 'Blog about new languages invented by developers',
    dateCreated: '2022/6/25',
    year: 2022
  }
  ]

  let blogCard = myBlog.map((item,position) => {
    return(
      <BlogCard className={'Blog'} key = {position} title = {item.blogTitle} description = {item.blogDescr} id= {item.id}/>
     )
   
  })
 
  return (
    <div className="App">

        {blogCard}

      <hr></hr>      
    </div>   
  );
}

export default App;
