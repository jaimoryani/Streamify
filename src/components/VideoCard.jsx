import { CheckCircle } from '@mui/icons-material'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

const VideoCard = ({video : {id: {videoId},snippet}}) => {
  return (
    <Card sx ={{width:{md:'360px',xs:'100%'}, boxShadow:'none', borderRadius:0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width:360, height:200}}
            />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e', height:'72px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                 <Typography variant='subtitle1'
                    fontWeight='bold' color='#FFF'>
                    {snippet?.title.slice(0,80) || demoVideoTitle.slice(0,50)}
                 </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                 <Typography variant='subtitle2'
                    fontWeight='bold' color='gray'>
                    {snippet?.channelTitle.slice(0,50) || demoChannelTitle.slice(0,50)}
                    <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px',alignmentBaseline:'central'}}/>
                 </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard