'use client';

import { useTranslations } from "next-intl";
import { PricingPlan } from "@/i18n/PricingPlan";
import { useCurrency } from "@/hooks/useCurrency";

import { getPlansData } from "@/utils/getPlanData";

export default function PlansPage() {
  const t = useTranslations('plans');
  const { formatPrice } = useCurrency();
  const plans = getPlansData(t, formatPrice);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 p-10">
      <h1 className="text-4xl font-bold text-white text-center mb-10">{t("choosePlan")}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <PricingPlan 
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            highlight={plan.highlight}
            buttonText={t('select')}
          />
        ))}
      </div>
    </div>
  );
}
