import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'q';

export class UsernameValidators {
    static cannotContainsSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainsSpace: true }
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolver, reject) => {
            setTimeout(() => {
                if(control.value === 'mosh') 
                    resolver({shouldBeUnique: true});
                else 
                    resolver(null);
            }, 2000);
        });
    }
}