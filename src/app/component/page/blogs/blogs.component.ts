import { Component, Input } from '@angular/core';
import { BlogGroupComponent } from '../../blog/blog-group/blog-group.component';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { IBlog, IPagination } from '../../../../util/dataModel';
import { BlogService } from '../../../service/microservice/blog.service';
import { getCriteria } from '../../../../util/resolver';

@Component({
  selector: 'sr-blogs',
  standalone: true,
  imports: [BlogGroupComponent, PaginationComponent, RouterOutlet],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  blogs!: IBlog[];
  pagination!: IPagination;
  _blogType!: string;

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ blogs }) => {
        this.blogs = blogs.blogs
        this.pagination = blogs.pagination
      });
    this.activatedRoute.paramMap.subscribe((r: any) => this._blogType = r.params['blogType'])
  }
  getDataEmitterHandler(pageNumber: number){
    this.blogService.getAll(getCriteria(this._blogType,pageNumber)).subscribe((res)=>{
      this.blogs= res.blogs
      this.pagination= res.pagination
    })
  }
}