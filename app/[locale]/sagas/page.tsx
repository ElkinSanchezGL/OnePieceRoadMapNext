"use client";
import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { sagaData } from "@/data/sagaData";
import { SagaTimelineElement } from "@/components/SagasComponents/SagaTimelineElement";
import Background from "@/components/GeneralComponents/Background";
import Sea from "@/assets/GeneralImages/Sea.png";

export default function SagasTimelinePage() {
  const { t } = useTranslation();

  return (
    <Background image={Sea}>
      <div className="container mx-auto py-12">
        <VerticalTimeline>
          {sagaData.map(({ id, image, route }) => (
            <SagaTimelineElement
              key={id}
              title={t(`timeline.sagas.${id}.title`, "Cargando...")}
              image={image.src}
              descriptionKey={`timeline.sagas.${id}.description`}
              route={route}
            />
          ))}
        </VerticalTimeline>
      </div>
    </Background>
  );
}
