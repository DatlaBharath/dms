/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDonor = /* GraphQL */ `
  mutation CreateDonor($input: DonorInput) {
    createDonor(input: $input) {
      Donor_ID
      First_Name
      Last_Name
      Email
      Phone_Number
      Address
      Username
      Registration_Date
      Total_Donation_Amount
      Donations {
        Donation_ID
        Donor_ID
        Amount
        Donation_Date
        Status
        Payment_Method
        Payment_Date
        Comments
        Donor {
          Donor_ID
          First_Name
          Last_Name
          Email
          Phone_Number
          Address
          Username
          Registration_Date
          Total_Donation_Amount
          __typename
        }
        __typename
      }
      Transactions {
        Transaction_ID
        From_Account_ID
        To_Account_ID
        Amount
        Transaction_Date
        Description
        From_Account {
          Donor_ID
          First_Name
          Last_Name
          Email
          Phone_Number
          Address
          Username
          Registration_Date
          Total_Donation_Amount
          __typename
        }
        To_Account {
          Donor_ID
          First_Name
          Last_Name
          Email
          Phone_Number
          Address
          Username
          Registration_Date
          Total_Donation_Amount
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const createDonation = /* GraphQL */ `
  mutation CreateDonation($input: DonationInput) {
    createDonation(input: $input) {
      Donation_ID
      Donor_ID
      Amount
      Donation_Date
      Status
      Payment_Method
      Payment_Date
      Comments
      Donor {
        Donor_ID
        First_Name
        Last_Name
        Email
        Phone_Number
        Address
        Username
        Registration_Date
        Total_Donation_Amount
        Donations {
          Donation_ID
          Donor_ID
          Amount
          Donation_Date
          Status
          Payment_Method
          Payment_Date
          Comments
          __typename
        }
        Transactions {
          Transaction_ID
          From_Account_ID
          To_Account_ID
          Amount
          Transaction_Date
          Description
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction($input: TransactionInput) {
    createTransaction(input: $input) {
      Transaction_ID
      From_Account_ID
      To_Account_ID
      Amount
      Transaction_Date
      Description
      From_Account {
        Donor_ID
        First_Name
        Last_Name
        Email
        Phone_Number
        Address
        Username
        Registration_Date
        Total_Donation_Amount
        Donations {
          Donation_ID
          Donor_ID
          Amount
          Donation_Date
          Status
          Payment_Method
          Payment_Date
          Comments
          __typename
        }
        Transactions {
          Transaction_ID
          From_Account_ID
          To_Account_ID
          Amount
          Transaction_Date
          Description
          __typename
        }
        __typename
      }
      To_Account {
        Donor_ID
        First_Name
        Last_Name
        Email
        Phone_Number
        Address
        Username
        Registration_Date
        Total_Donation_Amount
        Donations {
          Donation_ID
          Donor_ID
          Amount
          Donation_Date
          Status
          Payment_Method
          Payment_Date
          Comments
          __typename
        }
        Transactions {
          Transaction_ID
          From_Account_ID
          To_Account_ID
          Amount
          Transaction_Date
          Description
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
