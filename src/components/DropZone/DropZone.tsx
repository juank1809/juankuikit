import { useState } from "react";
import { useDropzone } from "react-dropzone";
import useUploadFile from "./useUploadFile";
import { FileIcon } from "../Icons";
import FileSuccess from "./FileSuccess";

const DropZone: React.FC = () => {
  const [files, setFiles] = useState<Array<File>>([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (files) => {
      setFiles(files);
    },
    maxFiles: 1,
  });
  const [progress, isUploaded] = useUploadFile(files[files.length - 1]);

  let DropZoneCartTitle: React.ReactNode;
  let DropZoneProgress: React.ReactNode;
  if (!isUploaded && progress) {
    DropZoneCartTitle = <p className="p-2">Downloading</p>;
    DropZoneProgress = <h5 className="drop-zone__progress">{progress}%</h5>;
  } else if (isUploaded) {
    DropZoneCartTitle = <p className="p-2">{files[files.length - 1].name} </p>;
    DropZoneProgress = <FileSuccess />;
  } else {
    DropZoneCartTitle = (
      <p className="p-2">
        <span>Select a file </span>or drag in form
      </p>
    );
    DropZoneProgress = <div></div>;
  }
  console.log(progress);
  return (
    <div
      className={`drop-zone__container ${isDragActive && "drop-zone--on-drag"}`}
      {...getRootProps()}
    >
      <input type="text" style={{ width: 0, height: 0 }} {...getInputProps()} />
      {isDragActive ? (
        <FileIcon />
      ) : (
        <div className="drop-zone__text">
          <div>
            {DropZoneCartTitle}
            <p className="p-3 drop-zone__description">
              PNG, jpg, gif files up to 10 MB in size are available for download
            </p>
          </div>
          {DropZoneProgress}
        </div>
      )}
      {!isUploaded && (
        <div
          style={{
            backgroundColor: "#6E41E2",
            width: `${progress}%`,
            height: "4px",
          }}
        />
      )}
    </div>
  );
};

export default DropZone;
