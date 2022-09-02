/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useRef } from "react";
import * as style from "./FileUploader.styles";
import Close from "../../assets/icon/Close";
import Button from "../Button/Button";

interface FileUploaderProps {
  buttonKind?: "default" | "secondary" | "tertiary" | "ghost" | "danger";
  buttonName?: string;
  fileSize?: number;
  onError?: () => void;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { result: string }
  ) => void;
}

const FileUploader = ({
  buttonKind = "default",
  buttonName = "Add file",
  fileSize = 0.5,
  onError = () => {
    console.log("업로드가 가능한 파일 사이즈를 초과했습니다.");
  },
  onChange = () => {},
}: FileUploaderProps) => {
  const [attachment, setAttachment] = useState("");
  const [filename, setFilename] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickInput = () => {
    inputRef.current?.click();
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;

    if (files === null) throw Error("적절한 파일이 입력되지 않았습니다.");

    const theFile = files[0];

    if (theFile.size > 1024 * 1024 * fileSize) {
      onError();

      throw Error(
        `업로드할 수 있는 이미지 파일은 ${fileSize}MB 이하 사이즈만 가능합니다.`
      );
    }

    setFilename(theFile.name);

    const reader = new FileReader();

    reader.onloadend = (finishedEvent: ProgressEvent<FileReader>) => {
      const result = (finishedEvent.currentTarget as FileReader).result;
      if (typeof result === "string") {
        setAttachment(result);
        onChange(event, { result: result });
      }
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
