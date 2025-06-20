'use client';

import { useTranslation } from "react-i18next";
import { PricingPlan } from "@/i18n/PricingPlan";
import { useCurrency } from "@/hooks/useCurrency";

import { getPlansData } from "@/utils/getPlanData";
export default function PlansPage() {
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();
  const plans = getPlansData(t, formatPrice);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 p-10">
      <h1 className="text-4xl font-bold text-white text-center mb-10">{t("plans.choosePlan")}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <PricingPlan 
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features} 
            highlight={plan.highlight}

            buttonText={t('plans.select')}
          />
        ))}
      </div>
    </div>
  );
};