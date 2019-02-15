# HTTP 
使用ES6编写的XMLHttpRequest请求和封装
- HTTP.ajax()
- HTTP.request()
- HTTP.get()
- HTTP.post()
- HTTP.delete()

### 应用举例1
- HTTP.ajax:发送一个get请求
```
  HTTP.ajax({
    url: url + '?name=Amy&age=10',
    success: function (result, status, xhr) {
      console.log('request success...');
    },
    error: (xhr, status, error) => {
      console.log('request error...');
    }
  });
```


### 应用举例2
- HTTP.ajax:发送一个post请求
```
  HTTP.ajax({
    url: url,
    method: 'POST',
    data: {name: 'Amy', age: 10}, //或 data: 'name=Amy&age=10',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    beforeSend: (xhr) => {
      console.log('request show loading...');
    },
    success: function (result, status, xhr) {
      console.log('request success...');
    },
    error: (xhr, status, error) => {
      console.log('request error...');
    },
    complete: (xhr, status) => {
      console.log('request hide loading...');
    }
  });
```


### 应用举例3
- HTTP.request:发送一个get请求
```
  HTTP.request({
    url: url + '?name=Amy&age=10',
    success: function (result, status, xhr) {
      console.log('进行业务操作');
    }
  });
```


### 应用举例4
- HTTP.get发送get请求
```
  HTTP.get(url + '?name=Amy&age=10', null, (result, status, xhr) => {
    console.log('进行业务操作');
  });
```


### 应用举例5
 * HTTP.post发送post请求
```
  HTTP.post(url, {name: 'Amy', age: 10}, (result, status, xhr) => {
    console.log('进行业务操作');
  });
```


### 应用举例6
- HTTP.postBody发送post请求
 参数是json字符串.后台接口以对象方式接受参数
```
  HTTP.postBody(url, JSON.stringify({
    name: '哈哈',
    age: 12,
    birthday: dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')
  }), (result, status, xhr) => {
    console.log('进行业务操作');
  });
```


### 应用举例7
- 传FormData类型参数
```
  let formData = new FormData();
  formData.append('name', '哈哈');
  formData.append('age', '123');
  HTTP.request({
    url: url + id,
    type: 'POST',
    data: formData,
    success: function (result, status, xhr) {
      console.log('进行业务操作');
    }
  });
```

### 应用举例8
 * 上传文件
```
<script src="HTTP.js"></script>
<form>
  <label for="file">选择文件</label>
  <input type="file" id="file" multiple />
  <button id="upload">UploadFile</button>
</form>
<script>
  document.getElementById("upload").addEventListener("click", () => {
    let files = document.getElementById("file").files;
    if(files.length === 0) {
      console.log("请选择文件");
      return false;
    }

    let form = new FormData(); //FormData对象
    Array.form(files).forEach((file, index) => {
      form.append(index, file); //文件对象
    });

    HTTP.ajax({
      url: "./upload",
      method: "POST",
      data: form,
      success: (result, status, xhr) => {
        console.log("文件上传成功", result);
      }
    });
  });
</script>
```


### 应用举例9
- 分块上传文件
```
<script src="HTTP.js"></script>
<form>
  <label for="file">分块上传文件</label>
  <input type="file" id="bidFile" multiple />
  <button id="uploadFile">UploadFile</button>
</form>
<script>
  const LENGTH = 1024 * 100; //100kb
  document.getElementById("uploadFile").addEventListener("click", () => {
    let file = document.getElementById("bidFile").files[0];
    if(!file) {
      console.log("请选择文件");
      return false;
    }
    let start = 0, end = LENGTH;
    while (start < file.size) {
      let blob = file.slice(start, end);
      let form = new FormData();
      form.append('blob', blob);
      HTTP.ajax({
        url: "./upload",
        method: "POST",
        data: form,
        success: (result, status, xhr) => {
          console.log("分块上传成功", result);
        }
      });
      start = end;
      end = start + LENGTH;
    }
  });
</script>
```
