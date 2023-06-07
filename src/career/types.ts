import { Skill } from '../skills/types';

export enum EmploymentType {
  FULL_TIME = 'Full-time',
  PART_TIME = 'Part-time',
  CONTRACT = 'Contract',
  TEMPORARY = 'Temporary',
}

export enum Month {
  JANUARY = 'Jan',
  FEBRUARY = 'Feb',
  MARCH = 'Mar',
  APRIL = 'Apr',
  MAY = 'May',
  JUNE = 'Jun',
  JULY = 'Jul',
  AUGUST = 'Aug',
  SEPTEMBER = 'Sep',
  OCTOBER = 'Oct',
  NOVEMBER = 'Nov',
  DECEMBER = 'Dec',
}

export enum OfficeModel {
  REMOTE = 'Remote',
  ONSITE = 'Onsite',
  HYBRID = 'Hybrid',
}

type Title =
  | 'Lead Software Engineer'
  | 'Senior Software Engineer'
  | 'Software Engineer'
  | 'Software Test Engineer'
  | 'QA Automation Engineer';

export interface Company {
  name: string;
  linkedInURL: string;
  logoURL: string;
  location: { city: string; state: string };
  roles: Role[];
}

export interface Role {
  title: Title;
  officeModel: OfficeModel;
  teams: string | string[];
  duties: string[];
  employmentType: EmploymentType;
  start: { month: Month; year: number };
  end?: { month: Month; year: number };
  skills: {
    languages: Skill[];
    clientFrameworks: Skill[];
    serverFrameworks: Skill[];
    protocols: Skill[];
    databases: Skill[];
    cloudPlatforms: Skill[];
    tools: Skill[];
  };
}
