const campusDrivesContainer = document.getElementById('campus-drives');

const campusDrives = [
  {
    company: 'Google',
    role: 'Software Engineer',
    location: 'Mountain View, CA',
    date: '2023-06-01'
  },
  {
    company: 'Microsoft',
    role: 'Product Manager',
    location: 'Redmond, WA',
    date: '2023-05-15'
  },
  {
    company: 'Amazon',
    role: 'Operations Manager',
    location: 'Seattle, WA',
    date: '2023-04-30'
  },
  // Add more campus drives here
];

campusDrives.forEach(drive => {
  const driveElement = document.createElement('div');
  driveElement.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md');

  const companyElement = document.createElement('h2');
  companyElement.classList.add('text-xl', 'font-bold', 'mb-2');
  companyElement.textContent = drive.company;

  const roleElement = document.createElement('p');
  roleElement.classList.add('text-gray-600', 'mb-2');
  roleElement.textContent = drive.role;

  const locationElement = document.createElement('p');
  locationElement.classList.add('text-gray-600', 'mb-2');
  locationElement.textContent = drive.location;

  const dateElement = document.createElement('p');
  dateElement.classList.add('text-gray-600');
  dateElement.textContent = `Date: ${drive.date}`;

  driveElement.appendChild(companyElement);
  driveElement.appendChild(roleElement);
  driveElement.appendChild(locationElement);
  driveElement.appendChild(dateElement);

  campusDrivesContainer.appendChild(driveElement);
});