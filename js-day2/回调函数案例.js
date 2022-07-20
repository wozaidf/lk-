function dayfive(msg){
    console.log(msg);
}

const paramsWrap ={
    callback:dayfive
}

handle(paramsWrap)


function handle(object){
    const str ='粘贴内容'
    object.callback(str)
}