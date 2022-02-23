import { useRouter } from "next/router";
import { Log } from "../../component/list/";
import { ProductLocation } from "../../component/list/ProductLocation";

const Order = () => {
  const router = useRouter();
  const { orderNo } = router.query;

  const orderData = {
    orderNo,
    name: "佐藤太郎",
    phoneNumber: "090-1234-5678",
  };

  return (
    <div className="space-y-4">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Applicant Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-2xl">
                {orderData.name}
              </dd>
              <div className="text-sm font-medium text-gray-500">
                管理No. {orderData.orderNo}
              </div>
              <div className="text-sm font-medium text-gray-500">
                TEL. {orderData.phoneNumber}
              </div>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Salary expectation
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                $120,000
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">商品所在</dt>
              <ProductLocation />
            </div>
          </dl>
        </div>
      </div>
      <Log />
    </div>
  );
};

export default Order;
