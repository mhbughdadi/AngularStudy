import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit{

  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
    this._route
      .paramMap.subscribe(paramMap => {
        let id = +paramMap.get('username');
        console.log(paramMap);
        console.log(id);
      });

  }

  

}
