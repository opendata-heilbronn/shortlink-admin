import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Entry} from "./Entry";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ShortlinkService {

  private loggedIn: boolean = false;
  private httpOptions = {};
  private API_URL = environment.shortlinkApi;

  constructor(private http: HttpClient) {
  }

  public async setLogin(username: string, password: string): Promise<boolean> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${btoa(username + ':' + password)}`
      })
    };
    this.loggedIn = await this.http.get<Entry[]>(this.API_URL, this.httpOptions).toPromise().then(() => true, () => false);
    return this.loggedIn;
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public getAll(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.API_URL, this.httpOptions);
  }

  public set(code: string, dest: string): Observable<void> {
    return this.http.put<void>(this.API_URL + code, {dest}, this.httpOptions);
  }
}
