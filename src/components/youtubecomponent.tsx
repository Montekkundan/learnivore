export function YouTubeComponent({ url }) {
    const videoId = new URL(url).searchParams.get("v");
  
    return (
      <div className="flex justify-center p-5">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-2xl overflow-hidden"
        ></iframe>
      </div>
    );
  }