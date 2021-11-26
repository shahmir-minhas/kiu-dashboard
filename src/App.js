import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import './Styles/_typography.scss';
import Index from "./Pages/Dashboard/index";
import StudyingStudents from "./Pages/StudyingStudents/StudyingStudents";
import GraduteStudents from "./Pages/GraduateStudents/GraduateStudents";
import AcademicCalendar from "./Pages/AcademicCylendar/AcademicCalendar";
import StudentDetails from "./Pages/StudentDetails/StudentDetails";

import Layout from "./Layout/Layout";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/student-details/:id" component={StudentDetails} />
          <Route path="/academic-calendar" component={AcademicCalendar} />
          <Route path="/graduate-students" component={GraduteStudents} />
          <Route path="/studying-students" component={StudyingStudents} />
          <Route path="/home" component={Index} />
          <Redirect exact from="/" to="/home" component={Index} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
