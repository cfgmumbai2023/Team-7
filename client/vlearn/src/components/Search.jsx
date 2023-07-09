import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import { useState} from 'react';
import "./Search.css";
import axios from 'axios';


const Search = () => {
    const [videos, setVideos] = useState([]);
    
  useEffect(() => {
    // fetchVideos();
  }, []);
  const fetchVideos = async () => {
    try {
      const response = await axios.get('/api/videos');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  const handleSearch = async () => {
    try {
        console.log("asdfiaf");
      const response = await axios.get('http://localhost:5000/api/videos');
      setVideos(response.data)
      console.log(videos);
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

    const links = [
        {
            id:1,
            heading:"about",
            description:"hello I am himanshu",
            link_url: "https://www.youtube.com/@ramakrishnasaradasamiti6709",
            img_url: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"

        },
        {
            id:2,
            heading:"about 2",
            description:"hello I am himanshu 2",
            link_url: "https://www.youtube.com/@ramakrishnasaradasamiti6709",
            img_url: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"

        },
        {
            id:3,
            heading:"about 3",
            description:"hello I am himanshu 3",
            link_url: "https://www.youtube.com/@ramakrishnasaradasamiti6709",
            img_url: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"

        },
    ];
    useEffect(()=>{
        handleSearch();
    },[])


   return (
    <div name="home" className="flex font-sans w-full h-full"
    style = {{
      background: "linear-gradient(0deg, hsla(0, 85%, 56%, 1) 0%, hsla(0, 0%, 0%, 1) 80%)"
    }}>
        <Navbar/>
        <Socials />
        <div className="body1">
        <div className='flex mx-auto align-items justify-center w-full h-full pt-[225px] pb-[125px] pl-[100px]'>
            <main class="page-content">
                <button onClick={handleSearch}>get data</button>

              
            {videos.map((items, index) => (
                <div class="card" style={{ backgroundImage: `url(${items.thumbnail})` }} >
                    <div class="content">
                        <h2 class="title">{items.title}</h2>
                        <p class="copy">{items.likes}</p>
                        <a href={items.link}>
                            <button class="btn">View Video</button>
                        </a>
                    </div>
                </div>
            ))} 
            </main>
        </div>
        </div>
        {/* <div>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} />
            </a>
            <h3>{video.title}</h3>
            <p>Likes: {video.likes}</p>
            <p>Views: {video.views}</p>
            <p>Comments: {video.comments}</p>
          </li>
        ))}
      </ul>
    </div> */}
    </div>
   )
 }
 
 export default Search