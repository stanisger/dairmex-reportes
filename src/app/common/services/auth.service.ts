import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './sesion.service';
import { Credentials } from '../models/credentials';

@Injectable()
export class AuthService {

    private userCredentials: Credentials;

    constructor(
        private _servSession: SessionService,
        private _router: Router,
    ){
        this.initCredentials();
    }

    initCredentials() {
        this.userCredentials = JSON.parse(
            localStorage.getItem('credentials') || '{}'
        );
    }

    setCredentials(credentials: Credentials){
        this.userCredentials = credentials;
        localStorage.setItem('credentials', JSON.stringify(credentials));
    }

    destroyCredentials() {
        this.userCredentials = new Credentials();
        localStorage.setItem('credentials', '{}');
    }

    login(user: string, password: string) {
        return this._servSession
        .login(user, password)
        .then( credentials => {
            if (credentials.codigo == 401 ) { 
                alert('Credenciales de acceso incorrectas.'); 
                return;
            }

            this.setCredentials(credentials);
            alert(`Bienvenido ${credentials.username}`);
            this._router.navigate(['/dashboard']);
        })
        .catch(()=>{
            alert('Problemas al validar la sesion.');
        });
    }

    logout() {
        return this._servSession
        .logout()
        .then(()=> {
            this.destroyCredentials();
            this._router.navigate(['/login']);
        })
    }

    isAuthenticated(): boolean {
        return this.userCredentials.is_logued_in;
    }

    getUserName(): string {
        return this.userCredentials.username;
    }
    
    getFileAPIToken() {
        return this.userCredentials.files_api_token;
    }
}