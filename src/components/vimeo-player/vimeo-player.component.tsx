import { h } from 'preact';

export const VimeoPlayer = ({
  props,
  vimeoId,
}: {
  props?: string[];
  vimeoId?: string | number;
}) => {
  let id = Array.isArray(props) ? props?.[0] : vimeoId?.toString();

  if (!id) {
    console.warn('Vimeo player requires a vimeoId');

    return <div />;
  }

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
      <lite-vimeo videoid={id} />
    </div>
  );
};

export default VimeoPlayer;
