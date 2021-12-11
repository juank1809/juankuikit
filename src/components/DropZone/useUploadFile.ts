import { useEffect, useState } from "react";

export default function useUploadFile(file: File) {
  const [progress, setProgress] = useState<number>(0);
  const [isUploaded, setIsUploaded] = useState<boolean>(false)
  useEffect(() => {
    (async function upload() {
      await uploadFile(file, setProgress, setIsUploaded);
    })();
  }, [file]);

  return [progress, isUploaded];
}

function uploadFile(file: File, onProgress: (percentage: number) => void, onFinish: (finished: boolean) => void) {
  const url = "....";
  if(!file) return;
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    const preset = "docs_upload_example_us_preset";
    xhr.open("POST", url);

    xhr.onload = () => {
      const resp: any = xhr.responseText;
      onFinish(true)
      res(resp.secure_url);
    };

    xhr.onerror = (evt) => rej(evt);
    xhr.upload.onprogress = (evt) => {
      if (evt.lengthComputable) {
        const percentage = (evt.loaded / evt.total) * 100;
        onProgress(Math.round(percentage));
      }
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);
    xhr.send(formData);
  });
}
