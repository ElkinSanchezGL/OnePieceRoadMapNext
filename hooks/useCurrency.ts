import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export const useCurrency = () => {
  const { i18n } = useTranslation();

  const currency = useMemo(() => {
    switch (i18n.language) {
      case "es":
        return "COP";
      case "fr":
      case "de":
        return "EUR";
      case "jp":
        return "JPY";
      default:
        return "USD";
    }
  }, [i18n.language]);

  const conversionRates: Record<string, number> = {
    USD: 1,
    COP: 4000,
    EUR: 0.92,
    JPY: 155,
  };

  const currencySymbols: Record<string, string> = {
    USD: "$",
    COP: "$",
    EUR: "€",
    JPY: "¥",
  };

  const formatPrice = (usdPrice: number) => {
    const converted = usdPrice * conversionRates[currency];
    const rounded = currency === "COP" ? Math.round(converted) : converted.toFixed(2);
    return `${currencySymbols[currency]}${rounded}`;
  };

  return { currency, formatPrice };
};
