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

import { AddComponent } from './about-college/add/add.component';

import { WomenCellComponent } from './women-cell/women-cell.component';
import { AddWomenCellComponent } from './women-cell/add-women-cell/add-women-cell.component';
import { AddWomenCellAttachmentsComponent } from './women-cell/attachments/add-women-cell-attachments/add-women-cell-attachments.component';
import { ViewWomenCellAttachmentsComponent } from './women-cell/attachments/view-women-cell-attachments/view-women-cell-attachments.component';
import { AddWomenCellMembersComponent } from './women-cell/members/add-women-cell-members/add-women-cell-members.component';
import { ViewWomenCellMembersComponent } from './women-cell/members/view-women-cell-members/view-women-cell-members.component';


import { SsipCellComponent } from './ssip-cell/ssip-cell.component';
import { AddSsipComponent } from './ssip-cell/add-ssip/add-ssip.component';
import { AddSsipAttachmentsComponent } from './ssip-cell/attachments/add-ssip-attachments/add-ssip-attachments.component';
import { ViewSsipAttachmentsComponent } from './ssip-cell/attachments/view-ssip-attachments/view-ssip-attachments.component';
import { AddSsipMemberComponent } from './ssip-cell/members/add-ssip-member/add-ssip-member.component';
import { ViewSsipMemberComponent } from './ssip-cell/members/view-ssip-member/view-ssip-member.component';

import { AntiRaggingCellComponent } from './anti-ragging-cell/anti-ragging-cell.component';
import { AddAntiRaggingCellComponent } from './anti-ragging-cell/add-anti-ragging-cell/add-anti-ragging-cell.component';
import { AddAntiRaggingCellAttachmentsComponent } from './anti-ragging-cell/attachments/add-anti-ragging-cell-attachments/add-anti-ragging-cell-attachments.component';
import { ViewAntiRaggingCellAttachmentsComponent } from './anti-ragging-cell/attachments/view-anti-ragging-cell-attachments/view-anti-ragging-cell-attachments.component';
import { AddAntiRaggingCellMembersComponent } from './anti-ragging-cell/members/add-anti-ragging-cell-members/add-anti-ragging-cell-members.component';
import { ViewAntiRaggingCellMembersComponent } from './anti-ragging-cell/members/view-anti-ragging-cell-members/view-anti-ragging-cell-members.component';

import { GrievanceCellComponent } from './grievance-cell/grievance-cell.component';
import { AddGrievanceCellComponent } from './grievance-cell/add-grievance-cell/add-grievance-cell.component';
import { AddGrievanceCellAttachmentsComponent } from './grievance-cell/attachments/add-grievance-cell-attachments/add-grievance-cell-attachments.component';
import { ViewGrievanceCellAttachmentsComponent } from './grievance-cell/attachments/view-grievance-cell-attachments/view-grievance-cell-attachments.component';
import { AddGrievanceCellMembersComponent } from './grievance-cell/members/add-grievance-cell-members/add-grievance-cell-members.component';
import { ViewGrievanceCellMembersComponent } from './grievance-cell/members/view-grievance-cell-members/view-grievance-cell-members.component';

import { NewsComponent } from './news/news.component';
import { EventsGallaryComponent } from './events-gallary/events-gallary.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

import { AddComponent } from './about-college/add/add.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { AddFacultyComponent } from './faculty-details/add-faculty/add-faculty.component';
import { DetailFacultyComponent } from './faculty-details/detail-faculty/detail-faculty.component';
import { AddLabWorkshopComponent } from './lab-workshop/add-lab-workshop/add-lab-workshop.component';
import { DetailLabWorkshopComponent } from './lab-workshop/detail-lab-workshop/detail-lab-workshop.component';
import { AddPlacementComponent } from './placement/add-placement/add-placement.component';
import { DetailPlacementComponent } from './placement/detail-placement/detail-placement.component';
import { AddPlacementMemberComponent } from './placement/members/add-placement-member/add-placement-member.component';
import { ViewPlacementMemberComponent } from './placement/members/view-placement-member/view-placement-member.component';
import { ViewPlacementAttachmentComponent } from './placement/attachments/view-placement-attachment/view-placement-attachment.component';
import { AddPlacementAttachmentComponent } from './placement/attachments/add-placement-attachment/add-placement-attachment.component';

 
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutCollege', component: AboutCollegeComponent },
  { path: 'campus', component: CampusComponent },

  { path: 'faculty', component: FacultyDetailsComponent },
  { path: 'faculty/add', component: AddFacultyComponent },
  { path: 'faculty/details', component: DetailFacultyComponent },

  { path: 'department', component: DepartmentComponent },
  { path: 'subjects', component: SubjectsComponent },

  { path: 'labandworkshop', component: LabWorkshopComponent },
  { path: 'labandworkshop/add', component: AddLabWorkshopComponent },
  { path: 'labandworkshop/details', component: DetailLabWorkshopComponent },

  { path: 'attachments', component: AttachmentsComponent },

  { path: 'company', component: CompanyComponent },
  { path: 'company/add', component: AddCompanyComponent },
  
  { path: 'placementcell', component: PlacementComponent },
  { path: 'placementcell/add', component: AddPlacementComponent },
  { path: 'placementcell/details', component: DetailPlacementComponent },
  { path: 'placementcell/add-attachment', component: AddPlacementAttachmentComponent },
  { path: 'placementcell/view-attachment', component: ViewPlacementAttachmentComponent },
  { path: 'placementcell/add-member', component: AddPlacementMemberComponent },
  { path: 'placementcell/view-member', component: ViewPlacementMemberComponent },

  { path: 'womencell', component: WomenCellComponent },
  { path: 'womencell/add', component: AddWomenCellComponent },
  { path: 'womencell/add-attachments', component: AddWomenCellAttachmentsComponent },
  { path: 'womencell/view-attachments', component: ViewWomenCellAttachmentsComponent },
  { path: 'womencell/add-member', component: AddWomenCellMembersComponent },
  { path: 'womencell/view-member', component: ViewWomenCellMembersComponent },

  { path: 'ssipcell', component: SsipCellComponent },
  { path: 'ssipcell/add', component: AddSsipComponent },
  { path: 'ssipcell/add-attachments', component: AddSsipAttachmentsComponent },
  { path: 'ssipcell/view-attachments', component: ViewSsipAttachmentsComponent },
  { path: 'ssipcell/add-member', component: AddSsipMemberComponent },
  { path: 'ssipcell/view-member', component: ViewSsipMemberComponent },

  { path: 'antiRaggingcell', component: AntiRaggingCellComponent },
  { path: 'antiRaggingcell/add', component: AddAntiRaggingCellComponent },
  { path: 'antiRaggingcell/add-attachments', component: AddAntiRaggingCellAttachmentsComponent },
  { path: 'antiRaggingcell/view-attachments', component: ViewAntiRaggingCellAttachmentsComponent },
  { path: 'antiRaggingcell/add-member', component: AddAntiRaggingCellMembersComponent },
  { path: 'antiRaggingcell/view-member', component: ViewAntiRaggingCellMembersComponent },

  { path: 'grievancecell', component: GrievanceCellComponent },
  { path: 'grievancecell/add', component: AddGrievanceCellComponent },
  { path: 'grievancecell/add-attachments', component: AddGrievanceCellAttachmentsComponent },
  { path: 'grievancecell/view-attachments', component: ViewGrievanceCellAttachmentsComponent },
  { path: 'grievancecell/add-member', component: AddGrievanceCellMembersComponent },
  { path: 'grievancecell/view-member', component: ViewGrievanceCellMembersComponent },

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

  AddComponent,

  WomenCellComponent,
  AddWomenCellComponent,
  AddWomenCellAttachmentsComponent,
  ViewWomenCellAttachmentsComponent,
  AddWomenCellMembersComponent,
  ViewWomenCellMembersComponent,

  SsipCellComponent,
  AddSsipComponent,
  AddSsipAttachmentsComponent,
  ViewSsipAttachmentsComponent,
  AddSsipMemberComponent,
  ViewSsipMemberComponent,

  AntiRaggingCellComponent,
  AddAntiRaggingCellComponent,
  AddAntiRaggingCellAttachmentsComponent,
  ViewAntiRaggingCellAttachmentsComponent,
  AddAntiRaggingCellMembersComponent,
  ViewAntiRaggingCellMembersComponent,

  GrievanceCellComponent,
  AddGrievanceCellComponent,
  AddGrievanceCellAttachmentsComponent,
  ViewGrievanceCellAttachmentsComponent,
  AddGrievanceCellMembersComponent,
  ViewGrievanceCellMembersComponent,

  NewsComponent,
  EventsGallaryComponent,
  AchievementsComponent,
  ContactInfoComponent,

  AddComponent,
  AddCompanyComponent,
  AddFacultyComponent,
  DetailFacultyComponent,
  AddLabWorkshopComponent,
  DetailLabWorkshopComponent,
  AddPlacementComponent,
  DetailPlacementComponent,
  AddPlacementMemberComponent,
  ViewPlacementMemberComponent,
  ViewPlacementAttachmentComponent,
  AddPlacementAttachmentComponent
]

