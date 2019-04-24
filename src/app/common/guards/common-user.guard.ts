import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CommonUserGuard implements CanActivate {

    constructor(
        private _auth: AuthService,
        private _router: Router
    ){}

    canActivate(): boolean {
        if (!this._auth.isAuthenticated()) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    }
}