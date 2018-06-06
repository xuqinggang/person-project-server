async function f() {
    return '123';
  await Promise.reject('出错了');
}

f()
.then(v => console.log('data', v))
.catch(e => console.log('err', e))
