import React from "react";
import styled from "@emotion/styled";

type Props = {
  tableLists: string[][][];
};

const returnAnchor = (arr: string[], rowKey: number, itemKey: number) => {
  const uniqueKey = String(rowKey) + String(itemKey);
  if (arr.length == 2) {
    return (
      <td key={uniqueKey}>
        <a key={uniqueKey} href={arr[1]}>
          {arr[0]}
        </a>
      </td>
    );
  }
  return <td key={String(rowKey) + String(itemKey)}>{arr[0]}</td>;
};

export const Table: React.FCX<Props> = (props) => {
  const { tableLists, className } = props;

  const table = tableLists.map((Row, rowKey) => (
    <tr key={String(rowKey)}>{Row.map((item, itemKey) => returnAnchor(item, rowKey, itemKey))}</tr>
  ));

  return (
    <table className={className}>
      <tbody>{table}</tbody>
    </table>
  );
};

export const StyledTable = styled(Table)`
  tbody {
    tr {
      border-bottom: solid 1px #eee;
      td {
        padding: 10px 10px;
      }
    }
    tr:hover {
      background-color: #d4f0fd;
    }
  }
`;
