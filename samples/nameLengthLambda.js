
exports.handler = async (event) => {
    const nameLen = await getLength(event);
    return {
      statsCode: 200,
      body: JSON.stringify(nameLen),
    };
  };

 async function getLength(event){
     return  event.name.length;
 } 

 