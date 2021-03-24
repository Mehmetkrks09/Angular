import { ResponseModel } from "./ResponseModel";

export interface listResponseModul<T>extends ResponseModel
{

    data:T[]
};