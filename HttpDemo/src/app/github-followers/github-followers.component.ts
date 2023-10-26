import { Component } from '@angular/core';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent {
  followers: any;

  constructor(private _followersService: FollowersService){

    this.followers = _followersService.getAllFollowers();
  }

}
