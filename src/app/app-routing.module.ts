import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutCollegeComponent } from './about-college/about-college.component';
import { CampusComponent } from './campus/campus.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { DepartmentComponent } from './department/department.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { LabWorkshopComponent } from './lab-workshop/lab-workshop.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { CompanyComponent } from './company/company.component';
import { PlacementComponent } from './placement/placement.component';
import { WomenCellComponent } from './women-cell/women-cell.component';
import { SsipCellComponent } from './ssip-cell/ssip-cell.component';
import { AntiRaggingCellComponent } from './anti-ragging-cell/anti-ragging-cell.component';
import { GrievanceCellComponent } from './grievance-cell/grievance-cell.component';
import { NewsComponent } from './news/news.component';
import { EventsGallaryComponent } from './events-gallary/events-gallary.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutCollege', component: AboutCollegeComponent },
  { path: 'campus', component: CampusComponent },
  { path: 'faculty', component: FacultyDetailsComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'labandworkshop', component: LabWorkshopComponent },
  { path: 'attachments', component: AttachmentsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'placementcell', component: PlacementComponent },
  { path: 'womencell', component: WomenCellComponent },
  { path: 'ssipcell', component: SsipCellComponent },
  { path: 'antiRaggingcell', component: AntiRaggingCellComponent },
  { path: 'grievancecell', component: GrievanceCellComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsGallaryComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'contactinfo', component: ContactInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DashboardComponent,
  AboutCollegeComponent,
  CampusComponent,
  FacultyDetailsComponent,
  DepartmentComponent,
  SubjectsComponent,
  LabWorkshopComponent,
  AttachmentsComponent,
  CompanyComponent,
  PlacementComponent,
  WomenCellComponent,
  SsipCellComponent,
  AntiRaggingCellComponent,
  GrievanceCellComponent,
  NewsComponent,
  EventsGallaryComponent,
  AchievementsComponent,
  ContactInfoComponent
]
