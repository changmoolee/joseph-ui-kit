/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "../Button/Button";
import {
  uploadImageContainer,
  uploadImage,
  uploadImageButton,
} from "./FileUploaderDropContainer.styles";

interface FileUploaderDropContainerProps {
  labelText?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: { result: string }
  ) => void;
}

const FileUploaderDropContainer = ({
  labelText = "Drag and drop files here or click to upload",
  onChange = () => {},
}: FileUploaderDropContainerProps) => {
  const divRef = useRef<HTMLLabelElement | null>(null);
  const [attachment, setAttachment] = useState("");

  const clearUploadedFile = () => {
    setAttachment("");
  };

  const onFileChange = (event: any) => {
    let files;
    if (event.type === "drop") {
      files = event.dataTransfer.files;
    } else {
      files = event.target.files;
    }

    const theFile = files[0];

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

  const initDragEvents = (): void => {
    if (divRef.current !== null) {
      divRef.current.addEventListener("dragenter", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.addEventListener("dragleave", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        onFileChange(e);
      });
    }
  };

  const exitDragEvents = (): void => {
    if (divRef.current !== null) {
      divRef.current.removeEventListener("dragenter", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.removeEventListener("dragover", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.removeEventListener("dragleave", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      divRef.current.removeEventListener("drop", (e) => {
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
      <div css={uploadImageContainer}>
        {attachment ? (
          <>
            <img css={uploadImage} src={attachment} alt="uploadedImage" />
            <Button name="이미지 삭제" onClick={clearUploadedFile} />
          </>
        ) : (
          <label htmlFor="upload" css={uploadImageButton} ref={divRef}>
            <span>{labelText}</span>
          </label>
        )}
      </div>
      <input
        style={{ display: "none" }}
        id="upload"
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
    </>
  );
};

export default FileUploaderDropContainer;
