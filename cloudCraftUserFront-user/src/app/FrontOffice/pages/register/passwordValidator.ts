import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    if (!control.value) {
      resolve({ required: true });
    } else if (control.value.length < 8) {
      resolve({ minLength: true });
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(control.value)) {
      resolve({ pattern: true });
    } else {
      resolve(null); // No errors
    }
  });
}
