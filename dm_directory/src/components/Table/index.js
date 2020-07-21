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
        { title: "Phone Number", field: "phoneNumber", type: "numeric" },
        
      ]}
      data={[
        { image: <img src="https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png" alt="Employee" width="150px" height="150px"></img>, firstName: "Michael", lastName:"Scott", email: "theSCARN@gmail.com", birthYear: 1964, phoneNumber: 8675309 },
        { image: <img src="https://vignette.wikia.nocookie.net/theoffice/images/e/e9/Character_-_JimHalpert.PNG/revision/latest?cb=20200414162003" alt="Employee" width="150px" height="150px"></img>, firstName: "Jim", lastName:"Halpert", email: "smirk@gmail.com", birthYear: 1975, phoneNumber: 5553430 },
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