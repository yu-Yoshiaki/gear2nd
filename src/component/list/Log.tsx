import { useState } from "react";

export const Log = () => {
  const [logList, setLog] = useState([
    {
      id: 1,
      date: "2022-02-03",
      time: "16:12",
      writter: "鈴木",
      description:
        "A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design",
    },
    {
      id: 2,
      date: "2022-02-03",
      time: "16:12",
      writter: "鈴木",
      description: "",
    },
    {
      id: 3,
      date: "2022-02-01",
      time: "13:15",
      writter: "高橋",
      description: "",
    },
    {
      id: 4,
      date: "2022-01-25",
      time: "10:40",
      writter: "小林",
      description: "",
    },
    {
      id: 5,
      date: "2022-02-03",
      time: "17:28",
      writter: "田中  ",
      description: "",
    },
  ]);
  return (
    <table className="w-full shadow table-auto bg-white rounded-lg ">
      <thead className="whitespace-nowrap">
        <tr>
          <th className="px-2 py-2">日付</th>
          <th className="px-2 py-2">時刻</th>
          <th className="px-2 py-2">記入者</th>
          <th className="px-2 py-2">内容</th>
        </tr>
      </thead>
      <tbody>
        {logList.map((log) => {
          return (
            <tr
              key={log.id}
              className={log.id % 2 === 0 ? "bg-gray-50 px-4" : "bg-white px-4"}
            >
              <td className="whitespace-nowrap px-2 py-2">{log.date}</td>
              <td className="whitespace-nowrap px-2 py-2">{log.time}</td>
              <td className="whitespace-nowrap px-2 py-2">{log.writter}</td>
              <td className="px-2 py-2">{log.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
