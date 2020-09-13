import { environment } from '../../environments/environment';

export class Constant {
  Constant() {
  }
  LoadConfigurations(configObj) {
    ConfigurationModel.Configuration = configObj;
  }
}

export class ConfigurationModel {
  static Configuration = {
    BASE_API_URL: environment.API_URL,
    USER_PROFILE: "UserData",
    Employee_Tab: { Personal: 1, General: 2, Bank: 3, Other: 4 }
  };
}
