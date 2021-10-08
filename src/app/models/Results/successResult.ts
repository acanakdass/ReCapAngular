import { BaseResult } from "./baseResult";

export class SuccessResult extends BaseResult {
   constructor(message: string) {
      super(true, message);
   }
}