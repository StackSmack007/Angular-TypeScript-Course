import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICause } from '../Interfaces/Icause';
import { BaseCollectionService } from './base.collection.service';

@Injectable(
    { providedIn: 'root' }
)
export class CausesService extends BaseCollectionService<ICause> {
    constructor(http: HttpClient) {
        super("causes", http);
    }
}