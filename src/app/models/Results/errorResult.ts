import { BaseResult } from "./baseResult";

export class ErrorResult extends BaseResult {
   constructor(message: string) {
      super(false, message);
   }
}