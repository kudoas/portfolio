import React from "react";
import styled from "@emotion/styled";

export const About: React.FCX = () => {
  return (
    <section>
      <h2>About</h2>
      <div>
        <div className="icon"></div>
        <table>
          <tr>
            <td>Name</td> <td>工藤 大地 (Daichi Kudo)</td>
          </tr>
          <tr>
            <td>University</td> <td>明治薬科大学</td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td>
              <a href="https://github.com/Kudoas">Kudoas</a>
            </td>
          </tr>
          <tr>
            <td>AtCoder</td>
            <td>
              <a href="https://atcoder.jp/users/kudoa">kudoa</a>
            </td>
          </tr>
          <tr>
            <td>Hatebu</td>
            <td>
              <a href="https://kudoa.hatenablog.com/">kudoa</a>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export const StyledAbout = styled(About)``;
