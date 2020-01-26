import { Injectable } from '@angular/core';
import { UserInfo, UserLogin, UserRegister } from '../Interfaces/user.info';
import { apiUserPaths } from "../keyVault/kinveyData"
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable(
  { providedIn: 'root' }
)

export class AuthenticationService {

  constructor(private http: HttpClient) { }

  isUserRegistered(username: string): Observable<boolean> {
    return this.http.post<boolean>(apiUserPaths.userNameExistingCheckPath, { username }).pipe(
      tap(console.log),
      map(data => data["usernameExists"]),
      tap(console.log),
    )
  }

  isAuthenticated() {
    return localStorage.getItem("authToken") !== null;
  }

  setUserSession(user: UserInfo) {
    [...Object.keys(user)].forEach(k => {
      localStorage.setItem(k, user[k]);
    });
  }

  registerUser(user: UserRegister): Observable<UserInfo> {
    return this.http.post<UserInfo>(apiUserPaths.userRegisterPath, user).pipe(
      map(x => ({
        username: x["username"],
        id: x["_id"],
        authToken: x["_kmd"]["authtoken"],
        isAdmin: x["isAdmin"]
      })))
  };

  loginUser(user: UserLogin): Observable<UserInfo> {
    return this.http.post<UserInfo>(apiUserPaths.userLoginPath, user).pipe(
      map(x => ({
        username: x["username"],
        id: x["_id"],
        authToken: "Kinvey " + x["_kmd"]["authtoken"],
        isAdmin: x["isAdmin"]
      })))
  };

  logoutUser(): Observable<any> {
    localStorage.clear();
    return this.http.post<any>(apiUserPaths.userLogoutPath, {});
  };

  get currentUser(): UserInfo {
    if (!this.isAuthenticated()) { return null }
    return {
      username: localStorage.getItem("username"),
      id: localStorage.getItem("id"),
      authToken: localStorage.getItem("authToken"),
      isAdmin: localStorage.getItem("isAdmin") === "true",
    }
  }
}