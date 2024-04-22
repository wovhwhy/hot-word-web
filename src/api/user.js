import request from '../utils/request';

const moduleUrl = '/user';

const user = {
    // 查询某个用户的详细信息
    getWordDetal(data) {
        return request(`${moduleUrl}/getWordDetal`, data);
    },
    getWord(){
        return request(`${moduleUrl}/getWord`)
    }
};

export default user;
