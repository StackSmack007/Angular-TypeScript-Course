import { Idonator } from './idonator';

export interface ICause{
    "cause": string,
    "donors": Idonator[],
    "pictureURL": string,
    "neededFunds": number,
    "description": string,
    "collectedFunds": number,
}