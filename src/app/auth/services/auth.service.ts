import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private _http: HttpClient) {
  }

  public login(): void {
  }

  public logout(): void {
  }

}
