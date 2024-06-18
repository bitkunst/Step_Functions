exports.handler = async (event) => {
    const isPoli = await isPolindrome(event);
    return {
      statsCode: 200,
      body: JSON.stringify(isPoli),
    };
  };

 async function isPolindrome(event) {
    const length = event.name.length;
    const halfLength = Math.floor(length /2);
    for(let i=0;i<halfLength; i++){
        if(event.name[i] !== event.name[length-1-i]){
            return false;
        }
    }
    return true;
 }
     