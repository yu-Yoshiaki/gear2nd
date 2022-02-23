import Link from "next/link";
import { Test } from "../../component";

const people = [
  {
    name: "佐藤太郎",
    orderNo: "51234567",
    department: "Optimization",
    action: "工事",

    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "佐藤太郎",
    orderNo: "52345678",
    department: "Optimization",
    action: "工事",

    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "佐藤太郎",
    orderNo: "53456789",
    department: "Optimization",
    action: "見積",

    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "佐藤太郎",
    orderNo: "54567891",
    department: "Optimization",
    action: "見積",

    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "佐藤太郎",
    orderNo: "55678911",
    department: "Optimization",
    action: "工事",

    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "佐藤太郎",
    orderNo: "56789123",
    department: "Optimization",
    action: "工事",

    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "佐藤太郎",
    orderNo: "57891234",
    department: "Optimization",
    action: "見積",

    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const tableHead = [
  { title: "案件名" },
  { title: "管理No." },
  { title: "工程" },
];

const Table = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8  sm:rounded-lg">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {tableHead.map((tableHead) => {
                    return (
                      <th
                        key={tableHead.title}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {tableHead.title}
                      </th>
                    );
                  })}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Editdaff</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.orderNo}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.orderNo}
                      </div>
                      <div className="text-sm text-gray-500">
                        {person.department}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800 ${
                          person.action === "工事"
                            ? "bg-yellow-200"
                            : "bg-green-100"
                        }`}
                      >
                        {person.action}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href="/list/[orderNo]"
                        as={`/list/${person.orderNo}`}
                      >
                        <a className="text-indigo-600  border py-3 px-8 rounded-3xl hover:bg-gray-300">
                          詳細
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const PageNation = () => {
  return (
    <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
      <div className="flex items-center">
        <button
          type="button"
          className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        <button
          type="button"
          className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
        >
          1
        </button>
        <button
          type="button"
          className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
        >
          2
        </button>
        <button
          type="button"
          className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
        >
          3
        </button>
        <button
          type="button"
          className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
        >
          4
        </button>
        <button
          type="button"
          className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      <Table />
      <PageNation />
    </div>
  );
};

export default Index;
