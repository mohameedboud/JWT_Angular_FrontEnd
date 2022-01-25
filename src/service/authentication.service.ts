import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable } from "rxjs";
//import {JwtHelper} from "angular2-jwt";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthenticationService {
  private host: string = "http://localhost:8081";
  private jwtToken = null;
  private roles: Array<any> | undefined;

  constructor(private http: HttpClient) {
  }

  login(user: any) {
    return this.http.post(this.host + "/login", user, {observe: 'response'});
  }

  saveToken(jwt: string | null) {

    if (typeof jwt === "string") {
      localStorage.setItem('token', jwt);
      let jwtHelper = new JwtHelperService();
      this.roles = jwtHelper.decodeToken(jwt).roles;
    }

  }

  loadToken() {
    // @ts-ignore
    this.jwtToken = localStorage.getItem('token');
  }

  getTasks() {
    if (this.jwtToken == null) this.loadToken();

    /* return this.http.get(this.host+"/tasks",
      {headers: req.headers.set("Authorization",
          "Bearer " + this.jwtToken)}); */
    return this.http.get(this.host + "/tasks",
      {
        headers: new HttpHeaders({'Authorization': 'Bearer' + this.jwtToken})
      });
  }

  /*intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem("token");

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + idToken)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }*/

  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }

  isAdmin() {
    // @ts-ignore
    for (let r of this.roles) {
      if (r.authority == 'ADMIN') return true;
    }
    return false;
  }

  saveTask(task: any) {
    return this.http.post(this.host + "/tasks", task, {
      headers: new HttpHeaders({'Authorization': 'Bearer' + this.jwtToken})
    });
  }


  register(user: any) {
    console.log(user)
    return this.http.post(this.host + "/register", user);

  }
}




