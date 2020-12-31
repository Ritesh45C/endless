import React, { Fragment, useState, useEffect, useCallback } from "react";
import Breadcrumb from "../../common/breadcrumb";
import FilterTable from "./datatable/lead-filter";
import { useHistory } from "react-router-dom";
import AccordionTwo from "../../base/accordionComponent/accordianTwo";
const Leads = () => {
  const [data, setData] = useState([]); // will fetch data from api and
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/dashboard/create-lead"),
    [history]
  );

  // useEffect(() => {
  //   fetch("https://devmentor.live/api/examples/contacts?api_key=b7c58b") // input url
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);
  var leadsData = {
    leads: [
      {
        _id: "5fd302ce44986240cc1d5832",
        campaign_id: "32432sdf",
        leadchannel_id: "sdfdfs324",
        leadtype_id: "sdfdfs324",
        Lead_Source: "sdfdfs324",
        First_Name: "dummy",
        Last_Name: "dummy",
        Gender: "Female",
        Birthday: "3-3-22",
        Age: "33",
        Marital_Status: "married",
        Spouse_Name: "spouse name",
        Anniversary: "3-3-22",
        Fax_Number: "sdfdfs324",
        Favourite_Colour: "married",
        Employment_Status: "married",
        Job_Type: "married",
        Yearly_Income: "3444334",
        Working_since: "2000",
        Department: "married",
        Managers_Name: "married",
        Managers_Phone_Number: "married",
        Assistant_Name: "married",
        Assistant_Phone_Number: "33323434",
        Credit_Limit: "married",
        Preferred_Contact_Time: "23:23",
        Preferred_Contact_Day: "monday",
        Interested_in_Product: "car, bike",
        Owns_Product: "car, bike",
        LinkedIn_Profile_URL: "www.product.in",
        Facebook_Profile_URL: "www.product.in",
        Twitter_Handle: "www.product.in",
        School_Attended: "www.product.in",
        School_City_Name: "www.product.in",
        Hometown: "Kanpur",
        Credit_Score: "33333",
        Loan_Amount: "5555555",
        Likes_Travelling: "True",
        Attends_events: "True",
        products_uses_frequency: "2",
        Language_Preference: "english",
        Products_Liked: "car",
        productsbought: "bike",
        accounttype: "current",
        accountbalance: "344434",
        Existing_Loans: "sdf",
        Account_Rating: "sdf",
        Flat_Number: "sdsdf",
        Society_Name: "sdsdf",
        Street_Name: "sdsdf",
        Area: "sdsdf",
        Postcode: "sdsdf",
        City: "Delhi",
        State: "Delhi",
        Country: "India",
        Company_Name: "Amazon",
        Location: "India",
        Company_Size: "23",
        Designation: "Manager",
        Pipeline_Value: "2323",
        Competitors_: "Adobe",
        Won_Loss_Reasons: "Any reason",
        isDelete: true,
        Lead_score: "323",
        companyrevenue: "2323",
        companytype: "Fintech",
        userid: "23323sd",
        lead_stage: "sdfsfd23",
        assigned_tags: "sd,sdf",
        customer_id: "2343sdf",
        __v: 0,
      },
      {
        _id: "5fd45e9a2e54211c6812e986",
        campaign_id: "3sd432sdf",
        leadchannel_id: "sdfdsffs324",
        leadtype_id: "sdfdfs324",
        Lead_Source: "sdfdfs324",
        First_Name: "dummy Name",
        Last_Name: "test",
        Gender: "male",
        Birthday: "3-3-22",
        Age: "33",
        Marital_Status: "married",
        Spouse_Name: "spouse name",
        Anniversary: "3-3-22",
        Fax_Number: "sdfdfs324",
        Favourite_Colour: "married",
        Employment_Status: "employed",
        Job_Type: "Engineer",
        Yearly_Income: "3444334",
        Working_since: "2000",
        Department: "married",
        Managers_Name: "married",
        Managers_Phone_Number: "married",
        Assistant_Name: "married",
        Assistant_Phone_Number: "33323434",
        Credit_Limit: "married",
        Preferred_Contact_Time: "23:23",
        Preferred_Contact_Day: "monday",
        Interested_in_Product: "car, bike",
        Owns_Product: "car, bike",
        LinkedIn_Profile_URL: "www.product.in",
        Facebook_Profile_URL: "www.product.in",
        Twitter_Handle: "www.product.in",
        School_Attended: "www.product.in",
        School_City_Name: "www.product.in",
        Hometown: "Kanpur",
        Credit_Score: "33333",
        Loan_Amount: "5555555",
        Likes_Travelling: "True",
        Attends_events: "True",
        products_uses_frequency: "2",
        Language_Preference: "english",
        Products_Liked: "car",
        productsbought: "bike",
        accounttype: "current",
        accountbalance: "344434",
        Existing_Loans: "sdf",
        Account_Rating: "sdf",
        Flat_Number: "sdsdf",
        Society_Name: "sdsdf",
        Street_Name: "sdsdf",
        Area: "sdsdf",
        Postcode: "sdsdf",
        City: "jhansi",
        State: "up",
        Country: "India",
        Company_Name: "Amazon",
        Location: "India",
        Company_Size: "23",
        Designation: "Manager",
        Pipeline_Value: "2323",
        Competitors_: "Adobe",
        Won_Loss_Reasons: "Any reason",
        isDelete: true,
        Lead_score: "323",
        companyrevenue: "2323",
        companytype: "Fintech",
        userid: "23323sd",
        lead_stage: "sdfsfd23",
        assigned_tags: "sd,sdf",
        customer_id: "2343sdf",
        __v: 0,
      },
      {
        _id: "5fd45ec62e54211c6812e987",
        campaign_id: "3sd432sdf",
        leadchannel_id: "sdfdsffs324",
        leadtype_id: "sdfdfs324",
        Lead_Source: "sdfdfs324",
        First_Name: "Name 1",
        Last_Name: "test 1",
        Gender: "Male",
        Birthday: "3-3-22",
        Age: "33",
        Marital_Status: "married",
        Spouse_Name: "spouse name",
        Anniversary: "3-3-22",
        Fax_Number: "sdfdfs324",
        Favourite_Colour: "married",
        Employment_Status: "employed",
        Job_Type: "Engineer",
        Yearly_Income: "3444334",
        Working_since: "2000",
        Department: "married",
        Managers_Name: "married",
        Managers_Phone_Number: "married",
        Assistant_Name: "married",
        Assistant_Phone_Number: "33323434",
        Credit_Limit: "married",
        Preferred_Contact_Time: "23:23",
        Preferred_Contact_Day: "monday",
        Interested_in_Product: "car, bike",
        Owns_Product: "car, bike",
        LinkedIn_Profile_URL: "www.product.in",
        Facebook_Profile_URL: "www.product.in",
        Twitter_Handle: "www.product.in",
        School_Attended: "www.product.in",
        School_City_Name: "www.product.in",
        Hometown: "Kanpur",
        Credit_Score: "33333",
        Loan_Amount: "5555555",
        Likes_Travelling: "True",
        Attends_events: "True",
        products_uses_frequency: "2",
        Language_Preference: "english",
        Products_Liked: "car",
        productsbought: "bike",
        accounttype: "current",
        accountbalance: "344434",
        Existing_Loans: "sdf",
        Account_Rating: "sdf",
        Flat_Number: "sdsdf",
        Society_Name: "sdsdf",
        Street_Name: "sdsdf",
        Area: "sdsdf",
        Postcode: "sdsdf",
        City: "Mumbai",
        State: "MH",
        Country: "India",
        Company_Name: "Amazon",
        Location: "India",
        Company_Size: "23",
        Designation: "Manager",
        Pipeline_Value: "2323",
        Competitors_: "Adobe",
        Won_Loss_Reasons: "Any reason",
        isDelete: true,
        Lead_score: "323",
        companyrevenue: "2323",
        companytype: "Fintech",
        userid: "23323sd",
        lead_stage: "sdfsfd23",
        assigned_tags: "sd,sdf",
        customer_id: "2343sdf",
        __v: 0,
      },
      {
        _id: "5fd46ea5348abb1a84d9d982",
        campaign_id: "gsd4d32sdf",
        leadchannel_id: "sdfdsffs324",
        leadtype_id: "sdfdfs324",
        Lead_Source: "sdfdfs324",
        First_Name: "Name 2",
        Last_Name: "test 2",
        Gender: "Female",
        Birthday: "3-3-22",
        Age: "33",
        Marital_Status: "married",
        Spouse_Name: "spouse name",
        Anniversary: "3-3-22",
        Fax_Number: "sdfdfs324",
        Favourite_Colour: "married",
        Employment_Status: "employed",
        Job_Type: "Engineer",
        Yearly_Income: "3444334",
        Working_since: "2000",
        Department: "married",
        Managers_Name: "married",
        Managers_Phone_Number: "married",
        Assistant_Name: "married",
        Assistant_Phone_Number: "33323434",
        Credit_Limit: "married",
        Preferred_Contact_Time: "23:23",
        Preferred_Contact_Day: "monday",
        Interested_in_Product: "car, bike",
        Owns_Product: "car, bike",
        LinkedIn_Profile_URL: "www.product.in",
        Facebook_Profile_URL: "www.product.in",
        Twitter_Handle: "www.product.in",
        School_Attended: "www.product.in",
        School_City_Name: "www.product.in",
        Hometown: "Kanpur",
        Credit_Score: "33333",
        Loan_Amount: "5555555",
        Likes_Travelling: "True",
        Attends_events: "True",
        products_uses_frequency: "2",
        Language_Preference: "english",
        Products_Liked: "car",
        productsbought: "bike",
        accounttype: "current",
        accountbalance: "344434",
        Existing_Loans: "sdf",
        Account_Rating: "sdf",
        Flat_Number: "sdsdf",
        Society_Name: "sdsdf",
        Street_Name: "sdsdf",
        Area: "sdsdf",
        Postcode: "sdsdf",
        City: "Kanpur",
        State: "up",
        Country: "India",
        Company_Name: "Amazon",
        Location: "India",
        Company_Size: "23",
        Designation: "Manager",
        Pipeline_Value: "2323",
        Competitors_: "Adobe",
        Won_Loss_Reasons: "Any reason",
        isDelete: true,
        Lead_score: "323",
        companyrevenue: "2323",
        companytype: "Fintech",
        userid: "23323sd",
        lead_stage: "sdfsfd23",
        assigned_tags: "sd,sdf",
        customer_id: "2343sdf",
        __v: 0,
      },
    ],
  };
  useEffect(() => {
    setData(leadsData.leads);
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:8080/leads").then((res) =>
  //     res.json().then((data) => setData(data.leads))
  //   );
  // }, []);
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Leads" />
      <div style={{ paddingBottom: "59px" }}>
        <button
          style={{ width: "181px", marginRight: "16px" }}
          className="btn btn-block btn-secondary btn-outline-secondary  "
          class="btn pull-right btn-block btn-primary text-center"
          type="button"
          onClick={handleOnClick}
        >
          Create Lead
        </button>
      </div>

      <div className="container-fluid  ">
        <FilterTable data={data} />
      </div>
    </Fragment>
  );
};

export default Leads;
