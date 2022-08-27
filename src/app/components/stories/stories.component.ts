import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store';
import { selectStories } from '../../store/stories/selectors';
import { Story } from '../../store/stories';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  public stories: Story[] = [];

  constructor(
    private ngRedux: NgRedux<AppState>
  ) { }

  ngOnInit(): void {
    this.ngRedux.select(selectStories()).subscribe( (data: Story[]) => {
      this.stories = data;
    })
  }

  public navigateToExternalUrl(url: string | undefined = ''){
    window.location.href = url ;
  }
}
