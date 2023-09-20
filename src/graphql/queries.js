/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDonor = /* GraphQL */ `
  query GetDonor($Donor_ID: ID!) {
    getDonor(Donor_ID: $Donor_ID) {
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
export const getDonationsByDonor = /* GraphQL */ `
  query GetDonationsByDonor($Donor_ID: ID!) {
    getDonationsByDonor(Donor_ID: $Donor_ID) {
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
export const getTransactionsByDonor = /* GraphQL */ `
  query GetTransactionsByDonor($Donor_ID: ID!) {
    getTransactionsByDonor(Donor_ID: $Donor_ID) {
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
export const getTransaction = /* GraphQL */ `
  query GetTransaction($Transaction_ID: ID!) {
    getTransaction(Transaction_ID: $Transaction_ID) {
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
