import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}
export const PricingPlan: React.FC<Props> = ({ title, price, features, highlight }) => {
  const { t } = useTranslation();

  return (
    <div className={`p-6 rounded-2xl shadow-lg ${highlight ? "bg-black text-white" : "bg-white"}`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-3xl font-semibold mb-4">{price}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature: string, i: number) => (
          <li key={i} className="text-sm">
            ✅ {feature}
          </li>
        ))}
      </ul>
      <button className={`px-4 py-2 rounded ${highlight ? "bg-white text-black" : "bg-black text-white"}`}>
        {t("plans.select")}
      </button>
    </div>
  );
};
