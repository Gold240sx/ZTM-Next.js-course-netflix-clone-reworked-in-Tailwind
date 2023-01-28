import videoData from '../data/videos.json';

export const getVideos = () => {
    return videoData.items.map(item => {
        return {
			id: item?.id?.videoId,
			title: item.snippet.title,
			imgUrl: item.snippet.thumbnails.medium.url,
		};
    });
}

			// description: item.snippet.description,
			// channel: item.snippet.channelTitle,
			// timestamp: item.snippet.publishedAt,
			// channelImage: item.snippet.thumbnails.default.url,
