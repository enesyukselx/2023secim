const yt = require("youtube-info-streams");

const func = async (id, s) => {
    const video = await yt.info(id);
    const length = video.videoDetails.thumbnail.thumbnails.length;

    if (s === "title") return video.videoDetails.title;
    if (s === "author") return video.videoDetails.author;
    if (s === "thumbnail")
        return video.videoDetails.thumbnail.thumbnails[length - 1].url;
    if (s === "date") return video.videoDetails.publishDate;
};

import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const videoTitle = await func(id, "title");
    const videoAuthor = await func(id, "author");
    const videoThumbnail = await func(id, "thumbnail");
    const videoDate = await func(id, "date");

    const data = {
        id: id,
        title: videoTitle,
        author: videoAuthor,
        thumbnail: videoThumbnail,
        videoUrl: `https://www.youtube.com/watch?v=${id}`,
        date: videoDate,
    };

    return NextResponse.json({ data });
}
