import { useRef } from "react";

interface Props {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
}

function FileUpload({ setFile, accept, children }: Props) {
  const ref = useRef<HTMLInputElement>();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files[0]);
  };
  return (
    <div onClick={() => ref.current.click()}>
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
}

export default FileUpload;
