import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MediaFile } from '../models/media-file';
import { User } from '../models/user';

@Injectable()
export class MediaService {

  private baseUrl = 'http://media.mw.metropolia.fi/wbma';
  public  loggedIn: boolean;

  constructor(private http: HttpClient) { }

  /**
   * Get a list of new files
   * (http://media.mw.metropolia.fi/wbma/docs/#api-Media-GetMediaFiles)
   *
   * @param {number} limit
   * @returns {Observable<MediaFile[]>}
   */
  public getFiles(limit: number): Observable<MediaFile[]> {
    // TODO: limit the amount of response's mediafiles based on value of the limit variable
    return this.http.get<MediaFile[]>(this.baseUrl + '/media');
  }

  /**
   * Login
   *
   * @param {User} user
   * @returns {Observable<any>}
   */
  public login(user: User): Observable<any> {
    interface LoginResponse {
      message: string;
      token: string;
      user: User;
    }
    return this.http.post<LoginResponse>(this.baseUrl + '/login', user);
  }

  //Todo: method for validating token

}
