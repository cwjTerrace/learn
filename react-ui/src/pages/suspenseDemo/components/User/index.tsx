import { useState, useEffect } from "react";
import { UserInfo } from "../interface";

// 网络请求，获取 user 数据
const requestUser = (id: number): Promise<UserInfo> =>
  new Promise((resolve) => setTimeout(() => resolve({ id, name: `用户${id}`, age: 10 + id }), 3000));

const User = (props: { id: number }) => {
  const [user, setUser] = useState<UserInfo>({});

  useEffect(() => {
    requestUser(props.id).then((res) => setUser(res));
  }, [props.id]);

  console.log(user);

  return <div>当前用户是: {user.name}</div>;
};

export default User;
