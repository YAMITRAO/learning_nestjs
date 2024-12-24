export interface Resource_data_int {
  category: string;
  resourceLink: string;
}

export interface Resource_response_user_int {
  _id: string;
  createdBy: {
    _id: string;
    userName: string;
    userEmail: string;
  };
  category: string;
  resourceLink: string;
  isResourceMustWatch: boolean;
  isResourceUserFvrt: boolean;
  isResourceAdminFvrt: boolean;
  isResourceWatchLater: boolean;
  isResourceVisitedByAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// view resource interface
export interface ViewResources_int {
  mountState: boolean;
}
