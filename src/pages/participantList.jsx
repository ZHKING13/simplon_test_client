import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
const columns = [
    {
        title: "Nom",
        dataIndex: "nom",
        key: "id",
    },
    {
        title: "Prenom",
        dataIndex: "prenom",
        key: "id",
    },
    {
        title: "Numero ",
        dataIndex: "numero",
        key: "id",
    },
    {
        title: "Email ",
        dataIndex: "email",
        key: "id",
        responsive: ["lg"],
    },
];

export default function ParticipantList() {
    const [participants, setParticipants] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://simplon-testserver-production.up.railway.app/api/participant/list"
            );
            console.log(result.data.participants.reverse());
            setParticipants(result.data.participants);
        };
        fetchData();
    }, []);

  return (
      <div className="participantList">
          <Table columns={columns} dataSource={participants} />
      </div>
  );
}
