import { Injectable } from '@angular/core';
import { Credentials} from '../models/credentials';
import { environment as ENV } from '../../../environments/environment';
import { HTTPMessage } from '../models/http-message';

@Injectable()
export class SessionService {
    
    login(user: string, pass: string): Promise<Credentials> {
        return fetch(
            `${ENV.apiSession}/apilogin?e=${user}&p=${pass}`,
            {credentials: 'include'})
        .then(res => res.json());
    }

    logout(): Promise<HTTPMessage> {
        return fetch(`${ENV.apiSession}/apilogout`)
        .then(res => res.json());
    }
}