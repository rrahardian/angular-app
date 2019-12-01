import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  accounts;
  username;
  password;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.apiGet().subscribe((res)=>{
      this.accounts = res
      console.log(res)
    })
  }

  public apiGet() {
    return this.httpClient.get(`http://127.0.0.1:3000/getAccount`);
  }

  public apiPost(username, password) {
    let data = {
      username: username,
      password: password
    }
    return this.httpClient.post(`http://127.0.0.1:3000/addAccount`, data)
    .toPromise()
    .then((res) => this.accounts.push(data))
    .catch((err)=> console.error(err))
  }
}
