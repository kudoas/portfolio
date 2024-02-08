import { FCX } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "@emotion/styled";

import { StyledTimelineElement } from "./TimelineElement";
import { Experiences } from "./interface";

export const Timeline: FCX<Experiences> = ({ className, experieces }) => {
  return (
    <VerticalTimeline className={className}>
      {experieces.map((ex) => {
        return (
          <StyledTimelineElement
            key={ex.title}
            title={ex.title}
            icon={ex.icon}
            date={ex.date}
            color={ex.color}
            content={ex.content}
            link={ex.link}
          />
        );
      })}
    </VerticalTimeline>
  );
};

export const StyledTimeline = styled(Timeline)`
  span {
    font-size: 1.5rem !important;
  }
  p {
    font-size: 1.3rem !important;
  }
  .vertical-timeline-element-icon svg {
    display: block;
    width: 28px;
    height: 28px;
    position: relative;
    left: 50%;
    top: 50%;
    margin-left: -14px;
    margin-top: -14px;
  }
  ::before {
    background: #eee;
  }
  .vertical-timeline-element-content {
    border: 1px solid #eee;
    box-shadow: 0 0 #ddd;
  }
  .vertical-timeline-element-content-arrow {
    border-right: 7px solid #eee;
  }
`;
