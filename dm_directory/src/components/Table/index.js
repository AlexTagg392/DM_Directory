import React from "react";
import MaterialTable from "material-table";

export default function Directory() {
  return (
    <MaterialTable 
      title="Dunder Mifflin Employee Directory"
      columns={[
        { title: "Employee Image", field: "image", cellStyle: { backgroundColor: 'lightblue', color: '#FFF' }, },
      
        { title: "First Name", field: "firstName", cellStyle: { backgroundColor: 'lightblue' }, },
        { title: "Last Name", field: "lastName", cellStyle: { backgroundColor: 'lightblue' }, },
        { title: "Job Title", field: "jobTitle", cellStyle: { backgroundColor: 'lightblue' }, },
        { title: "Email", field: "email", cellStyle: { backgroundColor: 'lightblue' }, },
        { title: "Birth Year", field: "birthYear", type: "numeric", cellStyle: { backgroundColor: 'lightblue' }, },
        
        
      ]}
      data={[
        { image: <img src={process.env.PUBLIC_URL + "/assets/michael.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Michael", lastName:"Scott", email: "theSCARN@gmail.com", birthYear: 1964, jobTitle: "Regional Manager" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/jim.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Jim", lastName:"Halpert", email: "SmirkingThroughthe4thwall@gmail.com", birthYear: 1978, jobTitle: "Assistant Regional Manager" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/andy.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Andy", lastName:"Bernard", email: "NardDog@gmail.com", birthYear: 1973, jobTitle: "Sales Man" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/angela.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Angela", lastName:"Martin", email: "RIPSparkles@gmail.com", birthYear: 1974, jobTitle: "Accountant" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/creed.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Creed", lastName:"Bratton", email: "CreedThoughts@gmail.com", birthYear: 1925, jobTitle: "Quality Assurance" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/darryl.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Darryl", lastName:"Philbin", email: "YallHavinBirthdayCake@gmail.com", birthYear: 1972, jobTitle: "Warehouse Foreman" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/dwight.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Dwight", lastName:"Schrute", email: "bearsbeetsbattlestar@gmail.com", birthYear: 1970, jobTitle: "Assistant To The Regional Manager" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/erin.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Erin", lastName:"Hannon", email: "thecowMoodyesterday@gmail.com", birthYear: 1986, jobTitle: "Secretary" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/gabe.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Gabe Susan", lastName:"Lewis", email: "ICreateSoundScapes@gmail.com", birthYear: 1982, jobTitle: "Corparate Liason(The Noble Toilet)" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/karen.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Karen", lastName:"Filipelli", email: "MydadwasnotaGI@gmail.com", birthYear: 1979, jobTitle: "Sales Woman" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/kelly.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Kelly", lastName:"Kapoor", email: "KardasianWannaBe@gmail.com", birthYear: 1980, jobTitle: "Customer Service" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/kevin.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Kevin", lastName:"Malone", email: "BullfroginLove@gmail.com", birthYear: 1968, jobTitle: "Accountant/Chili Chef" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/toby.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Toby", lastName:"Flenderson", email: "FreetheScrantonStrangler@gmail.com", birthYear: 1963, jobTitle: "Head of Human Resources" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/stanley.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Stanley", lastName:"Hudson", email: "shoveitupyourbutt@gmail.com", birthYear: 1958, jobTitle: "Sales Man" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/pam.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Pam", lastName:"Beesly", email: "wackawacka@gmail.com", birthYear: 1979, jobTitle: "Office Manager" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/robert.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Robert", lastName:"California", email: "IamtheLizardKing@gmail.com", birthYear: 1962, jobTitle: "CEO" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/ryan.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Ryan", lastName:"Howard", email: "WuphfCreator@gmail.com", birthYear: 1980, jobTitle: "Temp" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/phyllis.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Phyllis", lastName:"Vance", email: "wwwhhaattt@gmail.com", birthYear: 1965, jobTitle: "Sales Woman" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/holly.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Holly", lastName:"Flax", email: "NoyouAre@gmail.com", birthYear: 1964, jobTitle: "Human Resources Representative" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/meredith.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Meredith", lastName:"Palmer", email: "Dontcutmythroat@gmail.com", birthYear: 1978, jobTitle: "Quality Assurance" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/nellie.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Nellie", lastName:"Bertram", email: "whatsataco@gmail.com", birthYear: 1973, jobTitle: "Projects Manager" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/oscar.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Oscar", lastName:"Martinez", email: "actually@gmail.com", birthYear: 1974, jobTitle: "Head Accountant" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/pete.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Pete", lastName:"Miller", email: "plop@ploop.com", birthYear: 1988, jobTitle: "Junior Salesman" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/clark.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Clark", lastName:"Green", email: "DwightJunior@DM.net", birthYear: 1988, jobTitle: "Junior Salesman" },
        { image: <img src={process.env.PUBLIC_URL + "/assets/jan.jpg"} alt="Employee" width="150px" height="150px"></img>, firstName: "Jan", lastName:"Levison", email: "SerenitybyJan@DM.net", birthYear: 1965, jobTitle: "Vice President of Sales" },
      ]}        
      options={{
        sorting: true,
        headerStyle: { backgroundColor: "#133950", color: "white" }
      }}
    />
  )
}