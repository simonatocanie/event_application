import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser!: User;
    constructor() { }

    loginUser(userName: string, password: string): void {
        this.currentUser = {
            id: 1,
            firstName: 'simo',
            lastName: 't',
            userName: userName
        };
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    updateCurrentUser(user: User) {
        console.log(user)

        this.currentUser = { ...this.currentUser, ...user };
        console.log(this.currentUser)
    }
}