'use client';

import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import dynamic from "next/dynamic";
import Link from "next/link";

const HiArrowCircleDown = dynamic(() =>
  import("react-icons/hi").then((mod) => mod.HiArrowCircleDown)
);

type Props = {
  title: string;
  image: string;
  descriptionKey: string;
  route: string;
};

export const SagaTimelineElement: React.FC<Props> = ({
  title,
  image,
  descriptionKey,
  route,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const fullRoute = useMemo(() => {
    return `/${lang}${route.startsWith("/") ? route : "/" + route}`;
  }, [lang, route]);

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#f0f0f0", color: "#000" }}
      contentArrowStyle={{ borderRight: "7px solid #bbb" }}
      iconStyle={{ background: "#000", color: "#fff" }}
      icon={<HiArrowCircleDown />}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-48 object-cover rounded-lg my-2"
      />
      <p className="text-sm">{t(descriptionKey)}</p>
<Link
  href={fullRoute}
  className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
>
  {t("timeline.explore")}
</Link>
    </VerticalTimelineElement>
  );
};
