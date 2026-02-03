import { Company } from "../models/Company.js";

/* ADD COMPANY */
export const addCompany = async (req, res) => {
  const {
    companyname,
    jobprofile,
    jobdescription,
    website,
    ctc,
    doi,
    eligibilityCriteria,
    tenthPercentage,
    twelfthPercentage,
    graduationCGPA,
    sixthSemesterCGPA,
  } = req.body;

  try {
    const newCompany = new Company({
      companyname,
      jobprofile,
      jobdescription,
      website,
      ctc,
      doi,
      eligibilityCriteria,
      tenthPercentage,
      twelfthPercentage,
      graduationCGPA,
      sixthSemesterCGPA,
    });

    await newCompany.save();
    console.log(newCompany);
    return res.json({ message: "Company Registered" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/* GET COMPANIES */
export const getCompanies = async (req, res) => {
  try {
    const allCompanies = await Company.find({});

    res.send({ data: allCompanies });
  } catch (error) {
    console.log(error);
  }
};

/* GET COMPANY BY ID */
export const getCompanyById = async (req, res) => {
  const id = req.params.id;
  try {
    const company = await Company.findById(id);

    res.send({ data: company });
  } catch (error) {
    console.log(error);
  }
};

/* UPDATE COMPANY */
export const updateCompanyById = (req, res) => {
  const id = req.params.id;
  Company.findByIdAndUpdate(id, {
    companyname: req.body.companyname,
    jobprofile: req.body.jobprofile,
    ctc: req.body.ctc,
    doi: req.body.doi,
    tenthPercentage: req.body.tenthPercentage,
    twelfthPercentage: req.body.twelfthPercentage,
    graduationCGPA: req.body.graduationCGPA,
    sixthSemesterCGPA: req.body.sixthSemesterCGPA,
  })
    .then((company) => res.json(company))
    .catch((err) => res.json(err));
}

/* DELETE COMPANY */
export const deleteCompanyById = (req, res) => {
  const id = req.params.id;
  Company.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};
