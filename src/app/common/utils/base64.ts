import { File } from '../models/file';

export class Base64Utils {
    static utf8_to_b64( str ) {
        return window.btoa(unescape(encodeURIComponent( str )));
    }
      
    static b64_to_utf8( str ) {
        return decodeURIComponent(escape(window.atob( str )));
    }
    
    static file2Base64 (fileDescriptor) {
        return new Promise( rs => {
            var fRead = new FileReader();
            fRead.onload  = (evt: any) => rs(
                new File(fileDescriptor, evt.target.result)
            );
            fRead.readAsDataURL(fileDescriptor);
        });
    }
}