type TTask = <T>() => Promise<T>;

class TaskQueue {
  name?: string;
  private queues: TTask[] = [];

  constructor(name?: string) {
    this.name = name;
  }

  push(task: TTask) {
    
  }
}

export default TaskQueue;
