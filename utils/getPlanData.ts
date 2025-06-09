import { TFunction } from "i18next";

export const getPlansData = (t: TFunction, formatPrice: (usd: number) => string) => [
  {
    title: t("plans.basic"),
    price: formatPrice(0),
    features: [t("plans.limitedAccess"), t("plans.ads"), t("plans.readOnly")],
  },
  {
    title: t("plans.standard"),
    price: `${formatPrice(4.99)} / ${t("plans.month")}`,
    features: [t("plans.fullAccess"), t("plans.noAds"), t("plans.favorites")],
    highlight: true,
  },
  {
    title: t("plans.premium"),
    price: `${formatPrice(9.99)} / ${t("plans.month")}`,
    features: [t("plans.allIncluded"), t("plans.prioritySupport"), t("plans.earlyAccess")],
  },
];
