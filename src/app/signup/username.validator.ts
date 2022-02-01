import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {
    static pasdespace( control : AbstractControl ) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') > 0)
            return {
                pasdespace : true
            }

            return null

        
    }
}