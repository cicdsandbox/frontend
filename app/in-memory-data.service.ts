import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let applicationdata = [{
      id: 11,
      last_name: 'Rossi',
      suffix: 'III',
      first_name: 'Michael',
      middle_name: 'Christian',
      date_of_birth: '08/01/1960',
      city_of_birth: 'Albuquerque',
      country_of_birth: 'U.S.A',
      state_province_of_birth: 'NM',
      email_address: 'Rossi@email.com',
      phone_numbers: [{ }]
    },
    {
      id: 12,
      last_name: 'Lincoln',
      suffix: '',
      first_name: 'Abraham',
      middle_name: '',
      date_of_birth: '08/01/1960',
      city_of_birth: 'Albuquerque',
      country_of_birth: 'U.S.A',
      state_province_of_birth: 'NM',
      email_address: 'Rossi@email.com',
      gender: 'male',
      eye_color: 'green',
      unit_type: 'metric',
      height_ft: 6,
      height_in: 2,
      height_cm: 120,
      notification_language: 'english',
      used_other_names: 'false',
      phone_numbers: [
        {
          number_format: 'us',
          phone_type: 'mobile',
          number: '123456789',
          extension: '1234'
        }
      ]
    }];
    return {applicationdata};
  }
}
