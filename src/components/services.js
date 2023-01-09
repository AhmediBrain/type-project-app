// import { Users } from "./Users";

import { Users } from "./Users";


export function getSearchData() {
    const searchList = Users;
    return searchList;
}

export function filterSearchData(filterType) {

    let filterdData = getSearchData().filter(type => type.typeOf === filterType);
    //console.log(filterdData)
    return filterdData;
}

// export function getSearchData() {
//     const searchList = Users;
//     return searchList;
// }

// export function filterSearchData(filterType) {
//     let filterdData = getSearchData().filter(type => type.serviceType)
// }