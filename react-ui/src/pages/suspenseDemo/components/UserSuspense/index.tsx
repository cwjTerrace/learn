import { UserInfo } from "../interface";
function wrapPromise(promise: Promise<any>) {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
// 网络请求，获取 user 数据
const requestUser = (id: number): Promise<UserInfo> =>
  new Promise((resolve) => setTimeout(() => resolve({ id, name: `用户${id}`, age: 10 + id }), 3000));

const User = (props: { id: number }) => {
  const resource = wrapPromise(requestUser(props.id));
  const user = resource.read();
  console.log(user);
  return <div>当前用户是: {user.name}</div>;
};

export default User;
