import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  private listUrl = 'https://raw.githubusercontent.com/NikomitK/nikomitk.github.io/main/projectnamelist.json'
  private apiUrl = 'https://api.github.com/repos/nikomitk/'
  private rawContentUrl = 'https://raw.githubusercontent.com/nikomitk/'
  private readmeUrl = '/master/README.md'
  projectList: Project[] = [];

  constructor(private http: HttpClient) { }

  getProjectList(): Observable<string[]> {
    return this.http.get<string[]>(this.listUrl);
  }

  //TODO what the hell am i supposed to do if the title is not found?
  getSingleProject(link: string): Observable<Project> {
    return this.http.get<Project>(this.apiUrl + link);
  }

  getProjectReadme(link: string): Observable<string> {
    return this.http.get(this.rawContentUrl + link + this.readmeUrl, { responseType: 'text' });
  }

  convertMarkdownHtml(markdown: string): Observable<string> {
    return this.http.post('https://api.github.com/markdown/raw', markdown , { responseType: 'text' });
  }
}
