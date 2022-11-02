interface Props {
  left: number;
  right: number;
  onChange: (e) => void;
  time?: boolean;
}

let formatTime = (time) => {
  let mm = Math.floor(time / 60);
  let ss = time % 60;
  return `${mm} : ${ss}`;
};

function TrackProgress({
  right,
  left,
  onChange,
  time = false,
}: Props): JSX.Element {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {time
          ? `${formatTime(left)} / ${formatTime(right)}`
          : `${left} / ${right}`}
      </div>
    </div>
  );
}

export default TrackProgress;
