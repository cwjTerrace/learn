import { TaskQueue } from "@/utils";
import { useEffect, useState } from "react";

const delayTask = (delay = 1) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 100);
  });
};

const taskQueues = new TaskQueue();
const r: number[] = [];
taskQueues.push(async () => r.push(await delayTask(5)));
taskQueues.push(async () => r.push(await delayTask(3)));
taskQueues.push(async () => r.push(await delayTask(1)));
taskQueues.push(async () => r.push(await delayTask(2)));
taskQueues.push(async () => r.push(await delayTask(4)));

function HomePage() {
  const [result, setResult] = useState<number[] | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setResult(r);
    }, 3000);
  }, []);
  return <div className="home-page">结果： {JSON.stringify(result)}</div>;
}

export default HomePage;
