import { AbstractControl, ValidationErrors } from '@angular/forms';

export function MaxNumberValidator(
  control: AbstractControl
): ValidationErrors | null {
  const isValid =
    (control.value <= 5 && control.value >= 1 && control.value % 1 === 0) ||
    control.value === null;

  return !isValid ? { error: true } : null;
}
