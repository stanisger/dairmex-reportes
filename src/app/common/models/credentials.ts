
export class Credentials {
    is_logued_in:    boolean = false;
    id_usuario:      number;
    perfil:          string;
    username:        string;
    email:           string;
    files_api_token: string;
    session_token:   string;
    error?:          String;
    codigo?:         number;
}