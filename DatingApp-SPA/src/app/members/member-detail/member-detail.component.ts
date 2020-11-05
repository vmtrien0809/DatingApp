import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  user: User = {
    age: null, city: null, country: null, created: null,
    gender: null, id: null, knownAs: null, lastActive: null,
    photoUrl: null, username: null, interests: null, introduction: null, lookingFor: null, photos: null
  };
  imageObject = [];
  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data.user;
      data.user.photos.forEach(photo => {
        const item = {
          image: photo.url,
          thumbImage: photo.url,
          alt: photo.description
        };
        this.imageObject.push(item);
      });
    }, error => {
      console.log(error);
    });

  }
}


