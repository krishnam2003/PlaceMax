import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "companies",

  initialState: {
    companies: [],
  },

  reducers: {
    getCompanies: (state, action) => {
      const data = action.payload;

      // CASE 1: API returns array of companies
      if (Array.isArray(data)) {
        state.companies = data.map((company) => ({
          id: company._id,
          companyname: company.companyname,
          jobprofile: company.jobprofile,
          ctc: company.ctc,
          doi: company.doi,
          eligibilityCriteria: company.eligibilityCriteria,
          jobdescription: company.jobdescription,
          tenthPercentage: company.tenthPercentage,
          twelfthPercentage: company.twelfthPercentage,
          graduationCGPA: company.graduationCGPA,
          sixthSemesterCGPA: company.sixthSemesterCGPA,
        }));
      }

      // CASE 2: API returns single company object
      else if (typeof data === "object" && data !== null) {
        state.companies = [
          {
            id: data._id,
            companyname: data.companyname,
            jobprofile: data.jobprofile,
            ctc: data.ctc,
            doi: data.doi,
            eligibilityCriteria: data.eligibilityCriteria,
            jobdescription: data.jobdescription,
            tenthPercentage: data.tenthPercentage,
            twelfthPercentage: data.twelfthPercentage,
            graduationCGPA: data.graduationCGPA,
            sixthSemesterCGPA: data.sixthSemesterCGPA,
          },
        ];
      } else {
        console.error("Invalid companies payload:", data);
      }
    },

    updateCompany: (state, action) => {
      const index = state.companies.findIndex(
        (c) => c.id === action.payload.id
      );

      if (index !== -1) {
        state.companies[index] = {
          ...state.companies[index],
          ...action.payload,
        };
      }
    },

    deleteCompany: (state, action) => {
      state.companies = state.companies.filter(
        (c) => c.id !== action.payload.id
      );
    },
  },
});

export const { getCompanies, updateCompany, deleteCompany } =
  companySlice.actions;

export default companySlice.reducer;
