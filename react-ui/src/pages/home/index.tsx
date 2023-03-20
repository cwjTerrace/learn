import { TaskQueue } from "@/utils";
import { useEffect, useState, PropsWithChildren, Children } from "react";

const delayTask = (delay = 1) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 100);
  });
};

const taskQueues = new TaskQueue();
let randomValues: number[] = [];

const Button = (props: PropsWithChildren) => {
  const childNodes = Children.toArray(props.children);
  console.log(childNodes, props.children, "props.children");
  return <div>{props.children}</div>;
};

function HomePage() {
  const [result, setResult] = useState<number[]>([]);

  const onMessage = (delay: number) => {
    taskQueues.push(async () => {
      await delayTask(delay);
      setResult((r) => [...r, delay]);
    });
  };

  useEffect(() => {
    const getRandom = () => Math.floor(Math.random() * (5 - 1)) + 1;
    const message = (delay: number) => {
      randomValues.push(delay);
      setTimeout(() => {
        onMessage(delay);
        if (randomValues.length >= 5) return;
        message(getRandom());
      });
    };
    message(getRandom());
  }, []);
  return (
    <div className="home-page">
      <div>结果： {JSON.stringify(result)}</div>
      <div>{JSON.stringify(randomValues)}</div>
      <Button>
        <>{false}</>
        {false}
        {false}
      </Button>
    </div>
  );
}

export default HomePage;
