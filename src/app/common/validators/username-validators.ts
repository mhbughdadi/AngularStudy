import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{

    static cannotContainSpaces(control: AbstractControl):ValidationErrors | null{
        
        if((control.value as string).indexOf(' ') >= 0 ){
            return {cannotContainSpaces:true};
        }
        return null;
        
    }
}