/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "../Button/Button";
import * as style from "./FileUploaderDropContainer.styles";

interface FileUploaderDropContainerProps {
  width?: string;
  labelText?: string;
  fileSize?: number;
  onError?: () => void;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement> | DragEvent,
    data: { result: string }
  ) => void;
}

const FileUploaderDropContainer = ({
  width = "320px",
  labelText = "Drag and drop files here or click to upload",
  fileSize = 0.5,
  onError = () => {
    console.log("업로드가 가능한 파일 사이즈를 초과했습니다.");
  },
  onChange = () => {},
}: FileUploaderDropContainerProps) => {
  const divRef = useRef<HTMLLabelElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [attachment, setAttachment] = useState("");

  const clearUploadedFile = () => {
    setAttachment("");
  };

  const onFileChange = (
    event: React.ChangeEvent<HTMLInputElement> | DragEvent
  ) => {
    let files;
    if (event instanceof DragEvent && event.dataTransfer !== null) {
      files = event.dataTransfer.files;
    } else {
      files = (event.target as HTMLInputElement).files;
    }

    if (files === null) throw Error("적절한 파일이 입력되지 않았습니다.");

    const theFile = files[0];

    if (theFile.size > 1024 * 1024 * fileSize) {
      onError();

      throw Error(
        `업로드할 수 있는 이미지 파일은 ${fileSize}MB 이하 사이즈만 가능합니다.`
      );
    }

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

  const initDragEvents = (): void => {
    if (divRef.current !== null) {
      divRef.current.addEventListener("dragenter", (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.addEventListener("dragover", (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.addEventListener("dragleave", (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.addEventListener("drop", (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onFileChange(e);
      });
    }
  };

  const exitDragEvents = (): void => {
    if (divRef.current !== null) {
      divRef.current.removeEventListener("dragenter", (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.removeEventListener("dragover", (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.removeEventListener("dragleave", (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.removeEventListener("drop", (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onFileChange(e);
      });
    }
  };

  useEffect(() => {
    initDragEvents();
    return () => exitDragEvents();
  });

  return (
    <>
      <div css={style.uploadImageContainer(width)}>
        {attachment ? (
          <div css={style.imageWithButton}>
            <img css={style.uploadImage} src={attachment} alt="uploadedImage" />
            <Button
              name="이미지 삭제"
              width="min-content"
              onClick={clearUploadedFile}
            />
          </div>
        ) : (
          <label
            htmlFor="upload"
            css={style.uploadImageButton}
            tabIndex={0}
            ref={divRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (inputRef.current !== null) {
                  inputRef.current?.click();
                }
              }
            }}
          >
            <span>{labelText}</span>
          </label>
        )}
      </div>
      <input
        style={{ display: "none" }}
        id="upload"
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onFileChange}
      />
    </>
  );
};

export default FileUploaderDropContainer;
