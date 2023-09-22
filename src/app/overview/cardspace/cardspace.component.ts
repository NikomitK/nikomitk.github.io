import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from 'src/app/shared/project';
import { ProjectserviceService } from 'src/app/shared/projectservice.service';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-cardspace',
  templateUrl: './cardspace.component.html',
  styleUrls: ['./cardspace.component.css']
})
export class CardspaceComponent {

  projects: Project[] = [];

  constructor(private projectservice: ProjectserviceService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/img/github-mark.svg'));

    projectservice.getProjectList().subscribe(links => {
      links.forEach(link => {
        projectservice.getSingleProject(link).subscribe(project => {
          this.projects.push(project);
          //sort at the end, beause if not the order would always be different each time you reload the page
          if (this.projects.length == links.length) {
            this.projects.sort((a, b) => {
              return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
            }
            )
          }
        }
        )
      })

    });

  }

}
