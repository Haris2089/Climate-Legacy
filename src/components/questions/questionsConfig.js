export const questions = [
  { step: 1, name: 'name', label: "What's your name?", placeholder: 'Enter your name', validation: value => value.trim() !== '' },
  { step: 2, name: 'email', label: 'Please provide an email address for us to contact you.', placeholder: 'Enter your email', type: "email", validation: value => /\S+@\S+\.\S+/.test(value) },
  { step: 3, name: 'birthYear', label: 'Please indicate your birth year?', placeholder: 'Enter your birth year', type: "date", validation: value => /^\d{4}$/.test(value) },
  { step: 4, name: 'age', label: 'Age?', placeholder: 'Enter your age', type: "number", validation: value => /^\d+$/.test(value) },
  { step: 5, name: 'infoType', label: 'Are you providing information on behalf of yourself or your entire household?', placeholder: 'Yourself or household?', validation: value => value.trim() !== '' },
  { step: 6, name: 'adultsInHousehold', label: 'How many adults live in your household?', placeholder: 'Enter number of adults', type: "number", validation: value => /^\d+$/.test(value) },
  { step: 7, name: 'childrenInHousehold', label: 'How many children live in your household?', placeholder: 'Enter number of children', type: "number", validation: value => /^\d+$/.test(value) },
  { step: 8, name: 'primaryResidence', label: 'What is your primary residence?', placeholder: 'Describe your residence', validation: value => value.trim() !== '' },
  { step: 9, name: 'postalCode', label: 'Please indicate your postal or ZIP code.', placeholder: 'Enter postal/ZIP code', validation: value => value.trim() !== '' },
  { step: 10, name: 'homeAge', label: 'How old is your home?', placeholder: 'Enter age of home',  type: "number", validation: value => /^\d+$/.test(value) },
  { step: 11, name: 'insulationUpdated', label: 'Has the insulation been updated in the last 10 years?', placeholder: 'Yes or No', validation: value => value.trim() !== '' },
  { step: 12, name: 'propertyOwnership', label: 'Do you own this property?', placeholder: 'Yes or No', validation: value => value.trim() !== '' },
  { step: 13, name: 'ownershipDuration', label: 'How long have you owned this property?', placeholder: 'Enter duration', validation: value => value.trim() !== '' },
  { step: 14, name: 'bedrooms', label: 'How many bedrooms are there?', placeholder: 'Enter number of bedrooms', type: "number", validation: value => /^\d+$/.test(value) },
  { step: 15, name: 'houseSquareFootage', label: 'What is the square footage of your house?', placeholder: 'Enter square footage', validation: value => /^\d+$/.test(value) },
  { step: 16, name: 'heatingSource', label: 'What heating source does your building use?', placeholder: 'Enter heating source', validation: value => value.trim() !== '' },
  { step: 17, name: 'electricityConsumption', label: 'Electricity consumption in this residence for each month (January to December) in kWh.', placeholder: 'Enter kWh values', validation: value => value.trim() !== '' },
  { step: 18, name: 'energyBillEstimate', label: "If you don't have an energy bill available, can you estimate annual spend on energy?", placeholder: 'Enter estimated spend', validation: value => value.trim() !== '' },
  { step: 19, name: 'energyInitiatives', label: 'Please describe any energy-saving initiatives you have implemented in your home.', placeholder: 'Describe initiatives', validation: value => value.trim() !== '' },
  { step: 20, name: 'secondProperty', label: 'Do you have a second property?', placeholder: 'Yes or No', validation: value => value.trim() !== '' },
  { step: 21, name: 'secondPropertyDescription', label: 'Please describe this property.', placeholder: 'Describe property', validation: value => value.trim() !== '' },
  { step: 22, name: 'secondPropertyPostalCode', label: 'Please indicate the postal or ZIP code.', placeholder: 'Enter postal/ZIP code', validation: value => value.trim() !== '' },
  { step: 23, name: 'secondHomeAge', label: 'How old is your home?', placeholder: 'Enter age of home', validation: value => /^\d+$/.test(value) },
  { step: 24, name: 'secondInsulationUpdated', label: 'Has the insulation been updated in the last 10 years?', placeholder: 'Yes or No', validation: value => value.trim() !== '' },
  { step: 25, name: 'secondPropertyOwnership', label: 'Do you own this property?', placeholder: 'Yes or No', validation: value => value.trim() !== '' },
  { step: 26, name: 'secondOwnershipDuration', label: 'How long have you owned this property?', placeholder: 'Enter duration', validation: value => value.trim() !== '' },
  { step: 27, name: 'secondPropertyUsage', label: 'How much time do you spend in this property?', placeholder: 'Enter time spent', validation: value => value.trim() !== '' },
  { step: 28, name: 'secondPropertyPrimaryUse', label: 'What is the primary use of your second property?', placeholder: 'Describe use', validation: value => value.trim() !== '' },
  { step: 29, name: 'publicTransportUsage', label: 'How many kilometers do you travel using public transport per month?', placeholder: 'Enter km', validation: value => /^\d+$/.test(value) },
  { step: 30, name: 'carCount', label: 'With driving as one of your modes of transport, how many cars do you or your household have?', placeholder: 'Enter number of cars', validation: value => /^\d+$/.test(value) },
  { step: 31, name: 'vehicleType', label: 'What type of vehicle is it?', placeholder: 'Enter vehicle type', validation: value => value.trim() !== '' },
  { step: 32, name: 'vehicleKilometers', label: 'How many kilometers is this vehicle driven per year?', placeholder: 'Enter km', validation: value => /^\d+$/.test(value) },
  { step: 33, name: 'vehicleEngine', label: 'What kind of engine does the vehicle have?', placeholder: 'Enter engine type', validation: value => value.trim() !== '' },
  { step: 34, name: 'vehicleYear', label: 'What year was your vehicle built?', placeholder: 'Enter year', validation: value => /^\d{4}$/.test(value) },
  { step: 35, name: 'flightShort', label: 'How many short-haul (under 3 hours) flights did you take last year?', placeholder: 'Enter number', validation: value => /^\d+$/.test(value) },
  { step: 36, name: 'flightMedium', label: 'How many medium-haul (3-6 hours) flights did you take last year?', placeholder: 'Enter number', validation: value => /^\d+$/.test(value) },
  { step: 37, name: 'flightLong', label: 'How many long-haul (6+ hours) flights did you take last year?', placeholder: 'Enter number', validation: value => /^\d+$/.test(value) },
  { step: 38, name: 'travelDescription', label: 'Please describe your travel. Where do you fly most often? Which airline do you travel with most?', placeholder: 'Describe travel', validation: value => value.trim() !== '' },
  { step: 39, name: 'monthlySpending', label: 'How much do you spend each month (outside of housing and transportation)?', placeholder: 'Enter amount', validation: value => value.trim() !== '' },
  { step: 40, name: 'climateConcern', label: 'How do you feel about climate change?', placeholder: 'Enter your feelings', validation: value => value.trim() !== '' },
  { step: 41, name: 'environmentalRole', label: 'How would you describe your role in reducing environmental impact?', placeholder: 'Describe your role', validation: value => value.trim() !== '' },
  { step: 42, name: 'stayInTouch', label: 'Can we stay in touch as Climate Legacy grows?', placeholder: 'Yes or No', validation: value => value.trim() !== '' }
];
