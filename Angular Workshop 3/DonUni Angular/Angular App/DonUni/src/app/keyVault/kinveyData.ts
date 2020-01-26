import { kinveyInfo as ki } from './appSecretKey';
import { Injectable } from '@angular/core';
//ki: IKinveyInfo must fit the interface so the app can work

const guestUserInfo={
    username:'guest',
    pessword:'guest'
}//Set role permissions and make such user to be able to access things

export const kinveySettings = {
    appKey: ki.appKey,
    appAuth: "Basic " + btoa(`${ki.appKey}:${ki.appSecret}`),
    guestAuth: "Basic " + btoa(`${guestUserInfo.username}:${guestUserInfo.pessword}`),
}

const userNameExistingCheckPath = `${ki.baseUrlPath}/rpc/${ki.appKey}/check-username-exists/`; // post "username": "the-username-to-check"
const userRegisterPath = `${ki.baseUrlPath}/user/${ki.appKey}/`;
const userLoginPath = `${ki.baseUrlPath}/user/${ki.appKey}/login`;
const userLogoutPath = `/${ki.baseUrlPath}/user/${ki.appKey}/_logout`;

export const apiUserPaths = {
    userLogoutPath,
    userNameExistingCheckPath,
    userLoginPath,
    userRegisterPath,
};

export class CollectionPathsAPI {
    constructor(private collectionName: string) {
    }
    get SubmitPath() {
        return `${ki.baseUrlPath}/appdata/${ki.appKey}/${this.collectionName}`;//POST
    }
    getAllEntities() {
        return `${ki.baseUrlPath}/appdata/${ki.appKey}/${this.collectionName}`;//GET
    }
    getEntityById(id: string) {
        return `${this.getAllEntities()}/${id}`;//GET
    }
    updateEntityById(id: string) {
        return this.getEntityById(id);//PUT
    }
    deleteEntityById(id: string) {
        return this.getEntityById(id);//DELETE
    }
    deleteEntitiesByQuery(query: string) {
        return `${ki.baseUrlPath}/appdata/${ki.appKey}/${this.collectionName}/?query=${query}`//DELETE
    }
}
/*       ----- Query Examples -----
# find the first 5 entities in the collection
    ?query={}&limit=5
# find only the first 10 entities with first name James
    ?query={"firstName":"James"}&limit=10
# sort results by age (ascending)
    ?query={}&sort=age
# or, equivalently
    ?query={}&sort={"age": 1}
# sort results by age (descending)
    ?query={}&sort={"age": -1}
# find all entities with the first name James, and sort results by
# first name (ascending), and then by last name (descending) -- "James Zoo" will
# come before "James Bond", but "Abraham Lincoln" will come before both
    ?query={"firstName":"James"}&sort={"firstName": 1, "lastName": -1}
*/