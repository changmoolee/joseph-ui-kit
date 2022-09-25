/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as style from "./DataTable.style";
import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

interface rowTypes {
  [index: string]: string | number | boolean;
  id: string | number;
}

interface columnTypes {
  field: string;
  headerName: string;
  width: string;
}

interface dataTypes {
  id: string | number;
  checked: boolean;
}

interface DataTableProps {
  headerText?: string;
  checkboxSelection?: boolean;
  columns?: columnTypes[];
  rows?: rowTypes[];
  onChange?: (data: Array<string | number | null>) => void;
}

const DataTable = ({
  headerText,
  checkboxSelection,
  columns = [
    {
      field: "id",
      headerName: "NO",
      width: "50px",
    },
    {
      field: "name",
      headerName: "이름",
      width: "70px",
    },
  ],
  rows = [
    {
      id: 1,
      name: "박지훈",
    },
    {
      id: 2,
      name: "강백호",
    },
  ],
  onChange,
}: DataTableProps) => {
  const [checkedRowsIdArr, setCheckedRowsIdArr] = useState<
    Array<string | number | null>
  >([]);

  const handleChangeAllCheckboxes = (data: dataTypes) => {
    if (rows && data.checked) {
      rows.map((row) =>
        setCheckedRowsIdArr((checkedRowsIdArr) => [row.id, ...checkedRowsIdArr])
      );
    } else {
      setCheckedRowsIdArr([]);
    }
  };

  const handleChangeCheckbox = (data: dataTypes) => {
    if (data.checked && !checkedRowsIdArr.includes(data.id)) {
      setCheckedRowsIdArr((checkedRowsIdArr) => [data.id, ...checkedRowsIdArr]);
    }

    if (!data.checked) {
      let filteredCheckedRowsIdArr = checkedRowsIdArr
        .slice()
        .filter((rowId) => data.id !== rowId);

      setCheckedRowsIdArr(filteredCheckedRowsIdArr);
    }
  };

  if (onChange) {
    onChange(checkedRowsIdArr);
  }

  return (
    <div css={style.container}>
      {headerText ? <div css={style.header}>{headerText}</div> : null}
      <div css={style.tableContainer}>
        <div css={style.tableHead}>
          <div css={style.tableRow}>
            {checkboxSelection ? (
              <div css={style.tableHeadRadioCell}>
                <Checkbox
                  id="selectAllCheckboxes"
                  onChange={(data) => handleChangeAllCheckboxes(data)}
                />
              </div>
            ) : null}

            {columns &&
              columns.length &&
              columns.map((column, _) => (
                <div
                  key={column.field}
                  css={style.tableHeaderCell(column.width)}
                >
                  {column.headerName}
                </div>
              ))}
          </div>
        </div>
        <div css={style.tableBody}>
          {rows && rows.length ? (
            rows.map((row, _) => (
              <div
                key={row.id}
                css={style.tableBodyRow(checkedRowsIdArr.includes(row.id))}
              >
                {checkboxSelection ? (
                  <div css={style.tableRadioCell}>
                    {
                      <Checkbox
                        id={row.id}
                        checked={checkedRowsIdArr.includes(row.id)}
                        onChange={(data) => handleChangeCheckbox(data)}
                      />
                    }
                  </div>
                ) : null}

                {columns &&
                  columns.length &&
                  columns.map((column, _) => (
                    <div
                      key={column.field + row.id}
                      css={style.tableBodyCell(column.width)}
                    >
                      {row[column.field]}
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <div css={style.noDataTableRow}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
