import request from '../utils/request';

const moduleUrl = '/user';

const user = {
    // 查询某个用户的详细信息
    getWordDetal(data) {
        return request(`${moduleUrl}/getWordDetal`, data);
    },
    getWord(){
        return request(`${moduleUrl}/getWord`)
    },
    getWord2(){
        return request(`${moduleUrl}/getWord2`)
    },
    //获取用户密码
    getUserPassword(userId){
        return request(`${moduleUrl}/getUserPassword`,{ userId });
    },
    //用户注册
    addUser(userId,password){
        return request(`${moduleUrl}/addUser`,{ userId, password})
    }
};

export default user;
