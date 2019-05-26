import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {

     static validPassword(password: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if(password.value !== '123') {
                    resolve({invalidPassword: true});
                } else {
                    resolve(null);
                }
            }, 500);
        });
     }

     static passwordsShoulMatch(control: AbstractControl) {
         let newPassword = control.get("new");
         let confirmPassword = control.get("repeat");
         if(newPassword.value !== confirmPassword.value)
            return { passwordNotMatch: true};
        return null;
     }
}