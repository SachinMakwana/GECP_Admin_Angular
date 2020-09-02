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
import { AddComponent } from './about-college/add/add.component';

import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { AddSubjectsComponent } from './subjects/add-subjects/add-subjects.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { AddEventsGallaryComponent } from './events-gallary/add-events-gallary/add-events-gallary.component';
import { AddCampusComponent } from './campus/add-campus/add-campus.component';
import { AddAttachmentsComponent } from './attachments/add-attachments/add-attachments.component';
import { AddContactInfoComponent } from './contact-info/add-contact-info/add-contact-info.component';
import { AddAchievementsComponent } from './achievements/add-achievements/add-achievements.component';
import { ViewAchievementsComponent } from './achievements/view-achievements/view-achievements.component';
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
  { path: 'addabout', component: AddComponent },
  { path: 'department/add', component: AddDepartmentComponent },
  { path: 'department/view-department', component: ViewDepartmentComponent },
  { path: 'subjects/add', component: AddSubjectsComponent },
  { path: 'news/add', component: AddNewsComponent },
  { path: 'events-gallary/add', component: AddEventsGallaryComponent },
  { path: 'campus/add', component: AddCampusComponent },
  { path: 'attachments/add', component: AddAttachmentsComponent },
  { path: 'contact-info/add', component: AddContactInfoComponent },
  { path: 'achievements/add', component: AddAchievementsComponent},
  { path: 'achievements/view-achievements', component: ViewAchievementsComponent}
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
  ContactInfoComponent,
  AddComponent,
  AddDepartmentComponent,
  ViewDepartmentComponent,
  AddSubjectsComponent,
  AddNewsComponent,
  AddEventsGallaryComponent,
  AddCampusComponent,
  AddAchievementsComponent,
  AddAttachmentsComponent,
  AddContactInfoComponent,
  ViewAchievementsComponent
]
