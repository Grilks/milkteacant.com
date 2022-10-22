import { h } from 'preact';

import style from './spotify-embed.module.scss';

const SpotifyEmbed = ({ props }: { props?: string[] }) => {
  const [url] = props || [''];

  if (!url) {
    console.error('no url provided to spotify embed');

    return;
  }

  return (
    <iframe
      class={style['spotify-player']}
      title="Milk Tea Can't Spotify"
      src={`https://open.spotify.com/embed/playlist/${url}?theme=0`}
      width="100%"
      height="380"
      frameBorder="0"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      loading="lazy"
    />
  );
};

export default SpotifyEmbed;
