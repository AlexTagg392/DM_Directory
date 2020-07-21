import React from "react";
import MaterialTable from "material-table";

export default function Directory() {
  return (
    <MaterialTable
      title="Dunder Mifflin Employee Directory"
      columns={[
        { title: "Employee Image", field: "image" },
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName" },
        { title: "Email", field: "email" },
        { title: "Birth Year", field: "birthYear", type: "numeric" },
        { title: "Job Title", field: "jobTitle" },
        
      ]}
      data={[
        { image: <img src="*" alt="Employee" width="150px" height="150px"></img>, firstName: "Michael", lastName:"Scott", email: "theSCARN@gmail.com", birthYear: 1964, jobTitle: "Regional Manager" },
        { image: <img src="../assets/jim.jpg" alt="Employee" width="150px" height="150px"></img>, firstName: "Jim", lastName:"Halpert", email: "Smirk@gmail.com", birthYear: 1978, jobTitle: "Assistant Regional Manager" },
        { image: <img src="./assets/andy.jpg" alt="Employee" width="150px" height="150px"></img>, firstName: "Andy", lastName:"Bernard", email: "NardDog@gmail.com", birthYear: 1973, jobTitle: "Sales Man" },
        { image: <img src="./assets/angela.jpg" alt="Employee" width="150px" height="150px"></img>, firstName: "Angela", lastName:"Martin", email: "RIPSparkles@gmail.com", birthYear: 1974, jobTitle: "Accountant" },
        { image: <img src="./assets/creed.jpg" alt="Employee" width="150px" height="150px"></img>, firstName: "Creed", lastName:"Bratton", email: "CreedThoughts@gmail.com", birthYear: 1925, jobTitle: "Quality Assurance" },
        { image: <img src="./assets/darryl.jpg" alt="Employee" width="150px" height="150px"></img>, firstName: "Darryl", lastName:"Philbin", email: "YallHavinBirthdayCake@gmail.com", birthYear: 1972, jobTitle: "Warehouse Foreman" },

      ]}        
      options={{
        sorting: true
      }}
    />
  )
}


// function createData(image, firstName, lastName, email, phoneNumber) {
//   return { image, firstName, lastName, email, phoneNumber };
// }

// const rows = [
//   createData("https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png", "Michael", "Scott", "theScarnMan@dm.net", 6158675309),
//   createData("https://img.buzzfeed.com/buzzfeed-static/static/2017-08/9/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-22381-1502291405-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*", "Jim", "Halpert", "smirk@gmail.com", 5555550001),
// ];