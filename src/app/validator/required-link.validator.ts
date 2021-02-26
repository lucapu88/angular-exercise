import { AbstractControl, ValidationErrors } from '@angular/forms';

export function RequiredLinkValidator(
  control: AbstractControl
): ValidationErrors | null {
  const isValid = control.value && control.value.includes('http');

  return !isValid ? { error: true } : null;
}
