import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const User: FC = () => {
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const { id } = useParams();
    const [selected, setSelected] = useState<string>("");

    return <div>{id}</div>;
};

export default User;
