export interface UserInfo {
    username: string;
    id: string;
    authToken: string,
    isAdmin: boolean,
}

export interface UserLogin {
    userNameOrEmail: string;
    password: string;
}

export interface UserRegister {
    username: string;
    userEmail: string;
    password: string;
}


