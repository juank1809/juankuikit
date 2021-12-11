import React from "react";
import { FileIcon } from "../Icons";

interface Props {}

const FileSuccess = (props: Props) => {
  return (
    <div className="drop-zone__file-success">
      <FileIcon />
    </div>
  );
};

export default FileSuccess;
