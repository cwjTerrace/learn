type Resolve = (value: any) => void;
type Reject = (error: any) => void;

class MyPromise {
  _callback?: (value: any) => void;

  constructor(callback: (resolve: Resolve, reject: Reject) => void) {
    callback(this._resolve.bind(this), this._reject);
    this._callback = undefined;
  }

  _resolve(value: any) {
    console.log(this, "_resolve");
    this._callback && this._callback(value);
  }
  _reject() {
    console.log(this, "_reject");
  }

  then(callback: (value: any) => void) {
    console.log(111, callback);
    this._callback = callback;
  }
}

export default MyPromise;

new MyPromise((resolve, rejects) => {
  console.log(Date.now());
  setTimeout(() => {
    console.log(Date.now());
    resolve("willem");
  }, 2000);
}).then((value) => {
  console.log(value);
});
