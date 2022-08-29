/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useRef } from "react";
import * as style from "./FileUploader.styles";
import Close from "../../assets/icon/Close";
import Button from "../Button/Button";

interface FileUploaderProps {
  buttonKind?: string;
  buttonName?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { result: string }
  ) => void;
}

const FileUploader = ({
  buttonKind = "primary",
  buttonName = "Add file",
  onChange = () => {},
}: FileUploaderProps) => {
  const [attachment, setAttachment] = useState("");
  const [filename, setFilename] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickInput = () => {
    inputRef.current?.click();
  };

  const onFileChange = (event: any) => {
    const {
      target: { files },
    } = event;

    const theFile = files[0];

    setFilename(theFile.name);

    const reader = new FileReader();

    reader.onloadend = (finishedEvent: any) => {
      const {
        currentTarget: { result },
      } = finishedEvent;

      setAttachment(result);
      onChange(event, { result: result });
    };
    reader.readAsDataURL(theFile);
  };

  const clearUploadedFile = () => {
    setFilename("");
    setAttachment("");
  };

  return (
    <>
      <div css={style.uploadImageContainer}>
        <Button kind={buttonKind} name={buttonName} onClick={onClickInput} />
        {attachment ? (
          <div css={style.uploadedFileContainer}>
            <span css={style.filename}>{filename}</span>
            <button css={style.closeIcon} onClick={clearUploadedFile}>
              <Close width={16} height={16} />
            </button>
          </div>
        ) : null}
      </div>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        id="upload"
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
    </>
  );
};

export default FileUploader;
