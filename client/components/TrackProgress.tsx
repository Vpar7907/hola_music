interface Props {
  left: number;
  right: number;
  onChange: (e) => void;
}

function TrackProgress({ right, left, onChange }: Props): JSX.Element {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {left} / {right}
      </div>
    </div>
  );
}

export default TrackProgress;
