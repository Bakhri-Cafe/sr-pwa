import { Component } from '@angular/core';
import { BlogGroupComponent } from '../../blog/blog-group/blog-group.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'sr-welcome',
  standalone: true,
  imports: [BlogGroupComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  constructor(private activatedRoute: ActivatedRoute) { }
  result: any
  admitCards: any
  latestJobs: any
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ blogs }) => {
        this.result = blogs[0].blogs
        this.admitCards = blogs[1].blogs
        this.latestJobs = blogs[2].blogs
      });
      console.log(this.result, this.admitCards, this.latestJobs)
  }
}
