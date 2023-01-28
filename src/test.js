let testing = () => {
    let promis = new Promise ( ( resolve, reject) => {
      let number = 1 + 9;
      if(number == 100){
        resolve("Success")
      } else {
        reject ("Fail")
      }
    });
    return promis
  }
  
  
  async function test(){
    let response = await testing();
    console.log(response)
  }