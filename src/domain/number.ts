import { ValidationError } from "../errors/validation-error";

export class NumberValid {
  number: number;
  constructor(props: string) {
    const isNumber = /^-?\d*\.?\d*$/.test(props);
    if (!props || !isNumber) throw new ValidationError("not-number");
    this.number = Number(props);
  }
}
