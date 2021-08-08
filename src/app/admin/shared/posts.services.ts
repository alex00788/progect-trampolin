import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {FbCreateRespons, Post} from './interfaces';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsServices {
    constructor(private http: HttpClient) {}

    create(post: Post): Observable<Post> {
        return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
            .pipe (map((respons: FbCreateRespons) =>{
                return {
                    ...post,
                    id: respons.name,
                    date: new Date(post.date)
                }
            }))
    }
    getAll(): Observable<Post[]> {
        return this.http.get(`${environment.fbDbUrl}/posts.json`)
            .pipe(map((response: {[key: string]: any}) => {
               return Object
                    .keys(response)
                    .map(key => ({
                        ...response [key],
                        id: key,
                        date: new Date(response[key].date)
                    }))
            }))
    }
}

