import { useState } from "react";

export const ProductLocation = () => {
  const [productLocation] = useState<"倉庫" | "作業員" | "未入荷" | "返品済">(
    "未入荷"
  );

  return (
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
      <div className="flex justify-between items-center">
        <p>{productLocation}</p>
      </div>
    </dd>
  );
};
