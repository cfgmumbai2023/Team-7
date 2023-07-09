const express = require('express');
const app = express();
const PORT = 5000;
const cors= require('cors');
const axios= require('axios');
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.json());

let query="";

app.post('/api/endpoint', (req, res) => {

    const data = req.body;
    console.log("hooioo");
    console.log('Data received from client:', data);
    query= req.body.topic + " for "+ req.body.class +" in " + req.body.language ;
    console.log("bfuagfuagfa",query);

  // Process the data or perform any desired actions

  res.sendStatus(200); // Send a response back to the client
});
// const querystring= query;
// console.log("afasdbfaf", query);
// console.log("fafa",querystring);

app.get('/api/videos', async (req, res) => {
    // const  querystring = req.query;
    const querystring= query;
console.log("afasdbfaf", query);
console.log("fafa",querystring);
    const apiKey = process.env.YOUTUBE_API_KEY; // Replace with your actual YouTube API key
    console.log("query string",querystring);
    try {
        console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(querystring)}&key=${apiKey}&type=video`);
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(querystring)}&key=${apiKey}&type=video`
      );
      
  
      console.log(response);

    const videoIds = response.data.items.map((item) => item.id.videoId);

    const videoDetailsResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds.join(',')}&key=${apiKey}`
    );

    const videoData = response.data.items.map((item, index) => {
        try{
            const video = {
                title: item.snippet.title,
                link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                likes: videoDetailsResponse.data.items[index].statistics.likeCount,
                views: videoDetailsResponse.data.items[index].statistics.viewCount,
                thumbnail: item.snippet.thumbnails.default.url,
                comments: videoDetailsResponse.data.items[index].statistics.commentCount
              };
          
                console.log("asfdafa",video);
                
                return video;

        }
        catch(err){
            console.error(err);
        }
        res.json(videoData);
      });
  
      res.json(videoData);
      console.log(videoData);
    } catch (error) {
      console.error('Error fetching video details:', error);
      res.status(500).json({ error: 'Error fetching video details' });
    }
  });
  
app.get('/api/videos', async (req, res) => {
    const { querystring } = req.query;
    const apiKey =process.env.YOUTUBE_API_KEY; // Replace with your actual YouTube API key
  
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(querystring)}&key=${apiKey}&type=video`
      );
  
      const videoData = response.data.items.map((item) => {
        const video = {
          title: item.snippet.title,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        };
  
        return video;
      });
  
      res.json(videoData);
    } catch (error) {
      console.error('Error fetching video details:', error);
      res.status(500).json({ error: 'Error fetching video details' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});