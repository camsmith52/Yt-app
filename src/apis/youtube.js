import axios from 'axios';

const KEY = 'AIzaSyDM3SGvSQH931zjNOq-BLqrHxYftlf6nkw'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        type : 'video',
        key : KEY
    }
})