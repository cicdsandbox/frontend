export class PhoneNumber {
  number_format: string;
  phone_type: string;
  number: string;
  extension: string;
}

export class ApplicationData {
  id: number;
  last_name: string;
  suffix: string;
  first_name: string;
  middle_name: string;
  date_of_birth: string;
  city_of_birth: string;
  country_of_birth: string;
  state_province_of_birth: string;
  email_address: string;
  gender: string;
  eye_color: string;
  unit_type: string;
  height_ft: number;
  height_in: number;
  height_cm: number;
  notification_language: string;
  used_other_names: string;
  phone_numbers: PhoneNumber[];
}
