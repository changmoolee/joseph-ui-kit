/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface StylesStoryProps {
  type: string;
}

export const UtilityStylesStory = ({ type }: StylesStoryProps) => {
  return (
    <div
      css={css`
        ${type}
      `}
    >
      Typography
    </div>
  );
};

export const BodyStylesStory = ({ type }: any) => {
  return (
    <div
      css={css`
        ${type}
      `}
    >
      Typography
    </div>
  );
};

export const FixedHeadingStylesStory = ({ type }: any) => {
  return (
    <div
      css={css`
        ${type}
      `}
    >
      Typography
    </div>
  );
};
