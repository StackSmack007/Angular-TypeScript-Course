import { CollectionPathsAPI } from '../keyVault/kinveyData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseCollectionService<T>{
    private paths: CollectionPathsAPI
    constructor(private colectionName: string, private http: HttpClient) {
        this.paths = new CollectionPathsAPI(colectionName)
    }
    createOne<RT=any>(entity: T): Observable<RT> {
        return this.http.post<RT>(this.paths.SubmitPath, entity)
    }

    getAll<RT=any>(): Observable<RT> {//RT is not set because we might want to know creator or date of creation...
        return this.http.get<RT>(this.paths.SubmitPath)
    }

    getById<RT=any>(id: string): Observable<RT> {
        return this.http.get<RT>(this.paths.getEntityById(id))
    }

    update(id: string, updatedEntity: T): Observable<T> {
        return this.http.put<T>(this.paths.updateEntityById(id), updatedEntity)
    }

    deleteById(id: string): Observable<any> {
        return this.http.delete(this.paths.deleteEntityById(id))
    }

    deleteByQuery(query: string): Observable<any> {
        return this.http.delete(this.paths.deleteEntitiesByQuery(query))
    }
}