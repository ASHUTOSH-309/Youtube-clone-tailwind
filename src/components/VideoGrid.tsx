import { VideoCard } from "./VideoCard"

const videos = [

    {
        title: "How to learn coding in 30 days",
        author: "Ashutosh Sharma",
        views: "46M views",
        timestamp: "13 Days ago",
        Logoimage: "./striver.jpg",
        thumbnail: "./striver.jpg"

    },
    {
        title: "How to learn coding in 60 days",
        author: "Ashutosh Sharma",
        views: "46M views",
        timestamp: "13 Days ago",
        Logoimage: "./striver.jpg",
        thumbnail: "./striver.jpg"

    },
    {
        title: "How to learn coding in 90 days",
        author: "Ashutosh Sharma",
        views: "46M views",
        timestamp: "13 Days ago",
        Logoimage: "./striver.jpg",
        thumbnail: "./striver.jpg"

    },
    {
        title: "How to learn coding in 120 days",
        author: "Ashutosh Sharma",
        views: "46M views",
        timestamp: "13 Days ago",
        Logoimage: "./striver.jpg",
        thumbnail: "./striver.jpg"

    },
]






export function VideoGrid (){

    return <div>

        {videos.map(video => <VideoCard
            title={video.title}
            author={video.author}
            Logoimage={video.Logoimage}
            thumbnail={video.thumbnail}
            timestamp={video.timestamp}
            views={video.views}
        />)}

    </div>
}