import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "@emotion/styled";

import { Experience } from "./interface";

export const TimelineElement: React.FCX<Experience> = ({
  className,
  title,
  icon,
  date,
  color,
  content,
  link,
}) => {
  return (
    <VerticalTimelineElement
      className={className}
      date={date}
      icon={icon}
      iconStyle={{ background: color, color: "#eee", border: "1px #eee solid" }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      {link ? <p>{link}</p> : null}
    </VerticalTimelineElement>
  );
};

export const StyledTimelineElement = styled(TimelineElement)``;
