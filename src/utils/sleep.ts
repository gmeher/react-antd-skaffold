export default (ms: number) => {
    return new Promise((resolve,reject)=> {
      setTimeout(()=>resolve(ms), ms);
    })
}