import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
const Timeline = () => {
  return (
    <div id="timeline" className='bg-[#F5F5DC] text-2xl p-6'>
      <h1 className="text-5xl font-bold text-green-900 p-2 text-center">
        WorkFlow of The Website
      </h1>
      <VerticalTimeline lineColor={"rgb(20 83 45)"} layout={"1-column-left"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(20 83 45)",
            color: "rgb(187 247 208)",
            
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Metamask connection done , more to be done in round 2"
          iconStyle={{
            background: "#412626",
            color: "#fff",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
          }}
          icon={"1"}
        >
          <h3 className="vertical-timeline-element-title">Authentication</h3>
          <h4 className="vertical-timeline-element-subtitle">Work in progress.</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(20 83 45)",
            color: "rgb(187 247 208)",
            
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Almost done in round 1"
          iconStyle={{
            background: "#412626",
            color: "#fff",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
          }}
          icon={"2"}
        >
          <h3 className="vertical-timeline-element-title">Marketplace</h3>
          <h4 className="vertical-timeline-element-subtitle">Work almost done.</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(20 83 45)",
            color: "rgb(187 247 208)",
            
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="To be done in round 2"
          iconStyle={{
            background: "#412626",
            color: "#fff",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
          }}
          icon={"3"}
        >
          <h3 className="vertical-timeline-element-title">ML model for price prediciction.</h3>
          <h4 className="vertical-timeline-element-subtitle">working on datasets and ml algorithm.</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(20 83 45)",
            color: "rgb(187 247 208)",
            
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="To be done in round 2 and somewhat website is responsive"
          iconStyle={{
            background: "#412626",
            color: "#fff",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
          }}
          icon={"4"}
        >
          <h3 className="vertical-timeline-element-title">Responsiveness and bilingual</h3>
          <h4 className="vertical-timeline-element-subtitle">We're trying to make the site responsive and bilingual(in progress)</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(20 83 45)",
            color: "rgb(187 247 208)",
            
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="To be done in round 3"
          iconStyle={{
            background: "#412626",
            color: "#fff",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            
          }}
          icon={"5"}
        >
          <h3 className="vertical-timeline-element-title">Dashboard</h3>
          <h4 className="vertical-timeline-element-subtitle">Will be done later.</h4>
        </VerticalTimelineElement>
       
      </VerticalTimeline>
    </div>
  )
}

export default Timeline