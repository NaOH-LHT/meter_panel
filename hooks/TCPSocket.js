class socket {
  constructor() {
    this.connection = {};
  }
  // 创建一个TCP实例
  establish(monitor) {
    this.connection = wx.createTCPSocket();
    this.connection.connect({ address: "192.168.1.50", port: 8086 });
  }
  // 发送消息
  connect(message) {
    this.connection.onConnect(() => {
      this.connection.write(message);
    });
  }
  // 监听端口函数
  onMessage() {
	return new Promise((reslove,reject)=>{
		this.connection.onMessage((res) => {
		  reslove(res)
		});
		this.connection.onError((err) => {
		  reject(err);
		});
	})
    
  }

  // 关闭搜索事件
  TCPclose() {
    setTimeout(() => {
      // 3S后，关闭socket
      this.connection.close(() => {
        console.log("TCP关闭");
      });
    }, 3000);
  }
}
const TCPSocket = new socket();
export default TCPSocket;