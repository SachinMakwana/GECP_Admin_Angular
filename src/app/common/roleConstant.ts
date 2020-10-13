import { Role } from '../models/authorization/role.model'

export const RoleConstant = {
  Dashboard: [
    Role.Admin,
    Role.HOD,
    Role.Faculty
  ],
  AboutCollege: [
    Role.Admin
  ],
  Campus: [
    Role.Admin,
    Role.HOD
  ],
  FacultyDetails: [
    Role.Admin,
    Role.HOD,
    Role.Faculty
  ],
  Department: [
    Role.Admin,
    Role.HOD,
    Role.Faculty
  ],
  Subjects: [
    Role.Admin,
    Role.HOD,
    Role.Faculty
  ],
  LabAndWorkshop: [
    Role.Admin,
    Role.HOD,
    Role.Faculty
  ],
  Attachment: [
    Role.Admin,
    Role.HOD,
    Role.Faculty
  ],
  Company: [
    Role.Admin,
    Role.HOD
  ],
  PlacementDetails: [
    Role.Admin,
    Role.HOD,
    Role.Faculty,
    Role.Placement_Member,
    Role.Placement_Head
  ],
  PlacementAttachment: [
    Role.Admin,
    Role.Placement_Member,
    Role.Placement_Head
  ],
  PlacementMembers: [
    Role.Admin,
    Role.Placement_Head
  ],
  WomenDetails: [
    Role.Admin,
    Role.Women_Cell_Head,
    Role.Women_Cell_Member
  ],
  WomenAttachment: [
    Role.Admin,
    Role.Women_Cell_Head,
    Role.Women_Cell_Member
  ],
  WomenMembers: [
    Role.Admin,
    Role.Women_Cell_Head
  ],
  SSIPDetails: [
    Role.Admin,
    Role.SSIP_Head,
    Role.SSIP_Member
  ],
  SSIPAttachment: [
    Role.Admin,
    Role.SSIP_Head,
    Role.SSIP_Member
  ],
  SSIPMembers: [
    Role.Admin,
    Role.SSIP_Head
  ],
  AntiRaggingDetails: [
    Role.Admin,
    Role.Anti_Ragging_Head,
    Role.Anti_Ragging_Member
  ],
  AntiRaggingAttachment: [
    Role.Admin,
    Role.Anti_Ragging_Head,
    Role.Anti_Ragging_Member
  ],
  AntiRaggingMembers: [
    Role.Admin,
    Role.Anti_Ragging_Head
  ],
  GrievanceDetails: [
    Role.Admin,
    Role.Grievance_Head,
    Role.Grievance_Member
  ],
  GrievanceAttachment: [
    Role.Admin,
    Role.Grievance_Head,
    Role.Grievance_Member
  ],
  GrievanceMembers: [
    Role.Admin,
    Role.Grievance_Head
  ],
  News: [
    Role.Admin,
    Role.HOD,
    Role.Faculty
  ],
  Affiliation: [
    Role.Admin,
    Role.Affiliation_Head
  ],
  NSS: [
    Role.Admin,
    Role.NSS_Head,
    Role.NSS_Member
  ],
  StudentSection: [
    Role.Admin,
    Role.Student_Section_Head
  ],
  CollegeGallary: [
    Role.Admin,
    Role.HOD,
    Role.Faculty
  ],
  Achievements: [
    Role.Admin,
    Role.HOD,
    Role.Faculty
  ],
  ContactInfo: [
    Role.Admin
  ]
}
