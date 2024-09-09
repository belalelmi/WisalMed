export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Driver's License",
  "Passport",
  "Birth Certificate",
  "Citizenship Card",
  "Social Security Card",
  "Permanent Residence Card (PR Card)",
  "Resident Alien Card (Green Card)",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Student ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dr. John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr. Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr. David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr. Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Dr. Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Dr. Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Dr. Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Dr. Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dr. Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
