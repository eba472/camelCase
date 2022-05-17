import { Table } from "antd";

function Members() {
  const dataSource = [
    {
      key: "1",
      name: "Eba",
      codeForce: "Eba472",
      linkedin: "",
      Leetcode: "",
    },
    {
      key: "2",
      name: "Tseso",
      codeForce: "tserensodnom.enkh",
      linkedin: "",
      Leetcode: "",
    },
    {
      key: "3",
      name: "Buya",
      codeForce: "buya4",
      linkedin: "",
      Leetcode: "",
    },
    {
      key: "4",
      name: "Khoso",
      codeForce: "Retsuko",
      linkedin: "",
      Leetcode: "",
    },
    {
      key: "5",
      name: "Anuul",
      codeForce: "",
      linkedin: "",
      Leetcode: "",
    },
    {
      key: "6",
      name: "Jagaa",
      codeForce: "jagaa1008",
      linkedin: "",
      Leetcode: "",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "",
      key: "role",
    },
    {
      title: "codeForce",
      key: "codeForce",
      render: (record) => (
        <a
          href={`https://codeforces.com/profile/${record.codeForce}`}
          target="_blank"
        >
          {record.codeForce}
        </a>
      ),
    },
    {
      title: "Linkedin",
      dataIndex: "Linkedin",
      key: "Linkedin",
    },
    {
      title: "Leetcode",
      dataIndex: "Leetcode",
      key: "Leetcode",
    },
  ];
  return (
    <div>
      <h2>Our members</h2>
      <div className="Members" style={{ width: 400, height: 400 }}>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
}

export default Members;
