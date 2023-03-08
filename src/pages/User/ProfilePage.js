// import React from "react";
// import {
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBCard,
//   MDBCardText,
//   MDBCardBody,
//   MDBBtn,
//   MDBBreadcrumb,
//   MDBBreadcrumbItem,
// } from "mdb-react-ui-kit";
// import { useState, useEffect } from "react";
// import userApi from "../../api/userApi";
// import { Link } from "react-router-dom";
// import { Select, DatePicker, Space } from "antd";

// export default function ProfilePage() {
//   const [email, setEmail] = useState();
//   const [name, setName] = useState();
//   const [id, setId] = useState();
//   const [ava, setAva] = useState();
//   const [phone, setPhone] = useState();
//   const [gender, setGender] = useState();

//   useEffect(() => {
//     const fetchUser = async () => {
//       const userInfo = await userApi.getUser(2);
//       console.log(userInfo.data.data);
//       setEmail(userInfo.data.data.email);
//       setName(userInfo.data.data.first_name);
//       setId(userInfo.data.data.id);
//       setAva(userInfo.data.data.avatar);
//       setPhone(userInfo.data.data.phone);
//       setGender(userInfo.data.data.gender);
//     };

// // <<<<<<< HEAD
// //     fetchUser();
// //   }, []);
// // =======
// //   useEffect(()=>{
// //       const fetchUser = async ()=>{
// //           const userInfo = await userApi.getUser(2);
// //           console.log(userInfo.data)
// //           setEmail(userInfo.data.data.email)
// //           setName(userInfo.data.data.first_name)
// //           setId(userInfo.data.data.id)
// //           setAva(userInfo.data.data.avatar)

// //       }

// //       fetchUser();
      
// //   },[])
// // >>>>>>> a621de36606fce441813589cfea19f493fdd8591

//   const onChangeGender = (value) => {
//     console.log(`selected ${value}`);
//   };
//   const onSearch = (value) => {
//     console.log("search:", value);
//   };
//   const onChangeDate = (date, dateString) => {
//     console.log(date, dateString);
//   };

//   return (
//     <section style={{ backgroundColor: "#eee" }}>
//       <MDBContainer className="py-5">
//         <MDBRow>
//           <MDBCol>
//             <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
//               <MDBBreadcrumbItem>
//                 <a href="#">Home</a>
//               </MDBBreadcrumbItem>
//               <MDBBreadcrumbItem>
//                 <a href="#">User</a>
//               </MDBBreadcrumbItem>
//               <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
//             </MDBBreadcrumb>
//           </MDBCol>
//         </MDBRow>

//         <MDBRow>
//           <MDBCol lg="3">
//             <MDBCard className="mb-3">
//               <MDBCardBody className="text-left">
//                 <Link
//                   className="d-flex justify-content-left mb-2"
//                   to="/ProfilePage"
//                 >
//                   User Profile
//                 </Link>
//                 <Link
//                   className="d-flex justify-content-left mb-2"
//                   to="/ProfilePage"
//                 >
//                   My Ticket
//                 </Link>{" "}
//                 {/* change link */}
//                 <Link
//                   className="d-flex justify-content-left mb-2"
//                   to="/ProfilePage"
//                 >
//                   Change Password
//                 </Link>
//                 {/* change link */}
//                 <Link
//                   className="d-flex justify-content-left mb-2"
//                   to="/ProfilePage"
//                 >
//                   Log out
//                 </Link>{" "}
//                 {/* change link */}
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>

//           <MDBCol lg="9">
//             <MDBCard className="mb-5">
//               <MDBCardBody>
//                 {/* <MDBRow>
//                   <MDBCol sm="3">
//                     <MDBCardText>Full Name</MDBCardText>
//                   </MDBCol>
//                   <MDBCol sm="9">
//                     <MDBCardText className="text-muted">{name}</MDBCardText>
//                   </MDBCol> 
//                 </MDBRow> */}
//                 <MDBRow>
//                   <MDBCol sm="3">
//                     <MDBCardText>First and last name</MDBCardText>
//                   </MDBCol>
//                   <MDBCol sm="9">
//                     <div className="input-group">
//                       <input
//                         type="text"
//                         aria-label="First name"
//                         class="form-control"
//                       />
//                       <input
//                         type="text"
//                         aria-label="Last name"
//                         class="form-control"
//                       />
//                     </div>
//                   </MDBCol>
//                 </MDBRow>
//                 <hr />
//                 <MDBRow>
//                   <MDBCol sm="3">
//                     <MDBCardText>Email</MDBCardText>
//                   </MDBCol>
//                   <MDBCol sm="9">
//                     <input type="text" class="form-control" />
//                   </MDBCol>
//                 </MDBRow>
//                 <hr />
//                 <MDBRow>
//                   <MDBCol sm="3">
//                     <MDBCardText>Phone</MDBCardText>
//                   </MDBCol>
//                   <MDBCol sm="9">
//                     <input type="text" value={phone} class="form-control" />
//                   </MDBCol>
//                 </MDBRow>
//                 <hr />
//                 <MDBRow>
//                   <MDBCol sm="3">
//                     <MDBCardText>Date of birth</MDBCardText>
//                   </MDBCol>
//                   <MDBCol sm="9">
//                     {/* <MDBCardText className="text-muted">01-01-1990</MDBCardText> */}
//                     <Space direction="vertical">
//     <DatePicker onChange={onChangeDate} />

//   </Space>
//                   </MDBCol>
//                 </MDBRow>
//                 <hr />
//                 <MDBRow>
//                   <MDBCol sm="3">
//                     <MDBCardText>Gender</MDBCardText>
//                   </MDBCol>
//                   <MDBCol sm="9">
//                     {/* <MDBCardText className="text-muted">{gender}</MDBCardText> */}
//                     <Select
//                       showSearch
//                       placeholder="Select a person"
//                       optionFilterProp="children"
//                       onChange={onChangeGender}
//                       onSearch={onSearch}
//                       filterOption={(input, option) =>
//                         (option?.label ?? "")
//                           .toLowerCase()
//                           .includes(input.toLowerCase())
//                       }
//                       options={[
//                         {
//                           value: "male",
//                           label: "Male",
//                         },
//                         {
//                           value: "female",
//                           label: "Female",
//                         },
//                         {
//                           value: "other",
//                           label: "Other",
//                         },
//                       ]}
//                     />
//                   </MDBCol>
//                 </MDBRow>
//               </MDBCardBody>
//             </MDBCard>
//             <div className="d-grid gap-2 col-6 mx-auto">
//               <MDBBtn>Update</MDBBtn>
//             </div>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }
