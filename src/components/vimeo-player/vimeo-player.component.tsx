import { h } from 'preact';

export const VimeoPlayer = ({ props }: { props?: string[] }) => {
  const videoId = props?.[0];

  if (!videoId) return;

  return (
    <div>
      <script
        type="module"
        async
        defer
        src="https://cdn.jsdelivr.net/npm/@slightlyoff/lite-vimeo@0.1.1/lite-vimeo.js"
      />
      {/*
      // @ts-ignore is included as a module above */}
      <lite-vimeo videoid={videoId} />
    </div>
  );
};

export default VimeoPlayer;
