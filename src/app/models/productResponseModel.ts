import {product} from "./product";
import { ResponseModel } from "./ResponseModel";
export interface productResponseModel extends ResponseModel  {
data:product[],



}