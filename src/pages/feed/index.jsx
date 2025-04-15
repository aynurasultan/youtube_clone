import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar"
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import VideoCard from "../../components/VideoCard";
import { SkeletonLoader } from "../../components/Loader";
import Error from "../../components/Error";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [params] = useSearchParams();
  const selectedCategory = params.get("category");

  useEffect(() => {
    const url = !selectedCategory
      ? "/home"
      : selectedCategory === "trending"
        ? "/trending"
        : `/search?query=${selectedCategory}`;

    setIsLoading(true);
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  const filteredVideos = videos.filter((video) => video.type === "video");

  return (
    <div className="flex">
      <Sidebar selectedCategory={selectedCategory} />
      <div className="videos grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">
        {isLoading ? (
          <SkeletonLoader />
        ) : error ? (
          <Error info={error} />
        ) : (
          filteredVideos.map((video, key) => (
            <VideoCard key={key} video={video} />
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;
