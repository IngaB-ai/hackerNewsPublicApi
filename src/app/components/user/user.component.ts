import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppState } from '../../store';
import { User } from '../../store/users';
import { actionGetUser } from '../../store/users/actions';
import { selectUser } from '../../store/users/selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private ngRedux: NgRedux<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public username: string = 'john';
  public user: User | undefined;

  ngOnInit(): void {

    this.username = this.route.snapshot.params["username"]

    this.ngRedux.dispatch(actionGetUser(this.username));

    this.ngRedux.select(selectUser(this.username)).subscribe((data: User | undefined) => {

      if (data != undefined) {
        this.user = data;

      }
    })
  }

}