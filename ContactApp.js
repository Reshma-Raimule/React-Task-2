import React, { useState } from 'react';

function ContactApp() {
    const [selectedOption, setSelectedOption] = useState('none');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <div className='container border border-1 mt-4 p-5'>
                <form >
                    <div className='row '>
                        <div className='col-5 mx-auto'>
                            <div className="form-group">
                                <label for="firstname">First Name</label>
                                <input type="text" className="form-control" id="firstname" />
                            </div>
                        </div>
                        <div className='col-5 mx-auto'>
                            <div className="form-group">
                                <label for="lastname">Last Name</label>
                                <input type="text" className="form-control" id="lastname" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-5 mx-auto'>
                            <p>How should we contact you?</p>
                            <select value={selectedOption} onChange={handleOptionChange}>
                                <option value="none">Choose option</option>
                                <option value="phone">Phone</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                        <div className='col-5 mx-auto'>
                            {selectedOption === 'phone' && (
                                <div>
                                    <div>
                                        <label>Phone Number</label>
                                    </div>
                                    <input type="number" className="form-control" id="phone" />
                                </div>
                            )}

                            {selectedOption === 'email' && (
                                <div>
                                    <div>
                                        <label>Email</label>
                                    </div>
                                    <input type="email" className="form-control" id="email"/>
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactApp;











// // import React, { useState } from 'react';

// // const ContactApp = () => {
// //   const [selectedOption, setSelectedOption] = useState('');

// //   // Additional state variables for phone and email controls
// //   const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);
// //   const [emailAddressVisible, setEmailAddressVisible] = useState(false);

// //   // Handle dropdown selection
// //   const handleDropdownChange = (event) => {
// //     const selectedValue = event.target.value;
// //     setSelectedOption(selectedValue);

// //     // Show/hide phone and email controls based on selection
// //     if (selectedValue === 'phone') {
// //       setPhoneNumberVisible(true);
// //       setEmailAddressVisible(false);
// //     } else if (selectedValue === 'email') {
// //       setPhoneNumberVisible(false);
// //       setEmailAddressVisible(true);
// //     } else {
// //       setPhoneNumberVisible(false);
// //       setEmailAddressVisible(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <select value={selectedOption} onChange={handleDropdownChange}>
// //         <option value="">Select an option</option>
// //         <option value="phone">Phone</option>
// //         <option value="email">Email</option>
// //       </select>

// //       {phoneNumberVisible && <input type="text" placeholder="Phone Number" />}
// //       {emailAddressVisible && <input type="text" placeholder="Email Address" />}
// //     </div>
// //   );
// // };

// // export default ContactApp;
// import React, { useState } from "react";

// const ContactForm = () => {
//     const [option, setOption] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [emailAddress, setEmailAddress] = useState("");

//     const handleOptionChange = (event) => {
//         setOption(event.target.value);
//     };

//     const handlePhoneNumberChange = (event) => {
//         setPhoneNumber(event.target.value);
//     }

//     const handleEmailAddressChange = (event) => {
//         setEmailAddress(event.target.value);
//     }

//     return (
//         <form>
//             <label>First Name</label>
//             <input type="text" />

//             <label>Last Name</label>
//             <input type="text" />

//             <label>Option</label>
//             <select value={option} onChange={handleOptionChange}>
//                 <option value="phone">phone
//                 <input type="number" placeholder="Enter your number"/>
//                 </option>
//                 <option value="email">Email</option >
//             </select>
//         </form>
//     )
// }
// export default ContactForm;