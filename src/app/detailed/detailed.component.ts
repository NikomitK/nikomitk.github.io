import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectserviceService } from '../shared/projectservice.service';
import { Project } from '../shared/project';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent {

  project?: Project;
  project$: Observable<Project>;

  readme?: string;
  readme$: Observable<string>;

  constructor(private route: ActivatedRoute, private projectService: ProjectserviceService) {
    this.project$ = this.route.paramMap.pipe(
      map(params => params.get('title')!.toLowerCase()),
      switchMap(title => this.projectService.getSingleProject(title))
    )

    this.readme$ = this.route.paramMap.pipe(
      map(params => params.get('title')!.toLowerCase()),
      switchMap(title => this.projectService.getProjectReadme(title)),
      switchMap(markdown => this.projectService.convertMarkdownHtml(markdown)),
      map(html => {
        if(html.startsWith('<h1>')){
          html = html.slice(html.indexOf('</h1>') + 5)
        }
        return html;
      })
    )
  }

}
