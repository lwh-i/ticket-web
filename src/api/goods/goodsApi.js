import {dataPostRequest, dataPutRequest, deleteRequest, getRequest,paramsPostRequest} from "../../utils/request";

/**
 * 查询菜单信息
 * @param {*} url 接口路径
 * @returns  菜单信息
 */
export const listMenu = () => {
    return getRequest("/goods/getList");
};

/**
 * 下单接口
 * @param {*} url 接口路径
 * @returns  菜单信息
 */
 export const doSeckill = (goodsId) => {
     console.log("goodsId1="+goodsId)
    return getRequest(`/secKill/doSecKill/${goodsId}`);
};

/**
 * 登录接口
 * @param {*} url 接口路径
 * @returns  菜单信息
 */
 export const ticketLogin = (data) => {
     console.log("data"+data.phone)
    return paramsPostRequest("/login/doLogin",data);
};
/**
 * 注册接口
 * @param {*} url 接口路径
 * @returns  菜单信息
 */
 export const ticketRegister = (data) => {
    console.log("data"+data.phone)
   return paramsPostRequest("/register/doRegister",data);
};


/**
 * 查询父级菜单信息
 * @returns {*}
 */
export const listMenuParent = () => {
    return getRequest('/menu/listParentMenu');
}

/**
 * 查询子集菜单信息
 * @param id 父级id
 * @returns {*}
 */
export const listMenuChildren = (id) => {
    return getRequest(`/menu/listMenu/${id}`);
};

/**
 * 条件查询菜单信息
 * @param param
 */
export const listMenuByCondition = (param) => {
    return getRequest('/menu/listMenuByCondition', param);
};

/**
 * 删除菜单信息
 * @param id 菜单id
 * @returns {AxiosPromise}
 */
export const deleteMenuById = (id) => {
    return deleteRequest('/menu/deleteMenu/' + id);
};

/**
 * 新增菜单信息
 * @param data 菜单信息
 * @returns {AxiosPromise}
 */
export const saveMenu = (data) => {
    return dataPostRequest('/menu/saveMenu', data);
}

/**
 * 修改菜单信息
 * @param data 菜单信息
 * @returns {AxiosPromise}
 */
export const updateMenu = (data) => {
    return dataPutRequest('/menu/updateMenu', data);
}