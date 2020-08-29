if(process.env.NODE_ENV === 'production'){
    // NODE_ENV는 환경 변수
    module.exports = require('./prod');
}
else{
    module.exports = require('./dev');
}