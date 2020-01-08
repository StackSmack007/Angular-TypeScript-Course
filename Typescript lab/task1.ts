class RequestHttp {
  response: string;
  message: string;
  fulfilled: boolean;
  constructor(
    public method: string,
    public uri: string,
    public version: string,
    message: string
  ) {
    this.message = message;
    this.response = undefined;
    this.fulfilled = false;
  }
}

let test = new RequestHttp('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(test);
