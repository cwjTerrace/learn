type TTask = () => Promise<any>;

class TaskQueue {
  name?: string;
  count = 0;
  private running: boolean = false;
  private queues: TTask[] = [];

  constructor(name?: string) {
    this.name = name;
  }

  async push(task: TTask) {
    this.queues.push(task);
    if (!this.running) {
      this.count = 0;
      this.run();
    }
  }
  /** 消费任务 */
  async run() {
    if (this.queues.length > 0) {
      const currentTask = this.queues.shift();
      this.running = true;
      try {
        const t = Date.now();
        await currentTask?.();
        console.log("已处理事件", Date.now() - t);
      } catch (error) {}
      this.count++;
      this.running = false;
      this.run();
    }
  }
}

export default TaskQueue;
