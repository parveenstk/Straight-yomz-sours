// // Form elements
// const form = document.getElementById('cancel-subscription-form');
// const firstName = document.getElementById('first-name');
// const lastName = document.getElementById('last-name');
// const emailAddress = document.getElementById('email-address');
// const phoneNumber = document.getElementById('phone-number');
// const orderId = document.getElementById('order-id');
// const commentsBox = document.getElementById('comments-box');

// const allFields = [firstName, lastName, emailAddress, phoneNumber, orderId, commentsBox];
// const requiredFields = [firstName, emailAddress, phoneNumber, orderId];

// // regex patterns for input
// const regexPatterns = {
//     'full-name': {
//         regex: /^[a-zA-ZÀ-ÿ' -]{2,50}$/,
//         clean: /[^a-zA-ZÀ-ÿ' -]/g,
//         error: "Please enter a valid name."
//     },

//     'email-address': {
//         regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         clean: /[^a-zA-Z0-9@._%+-]/g,
//         error: "Please enter a valid email address."
//     },

//     'phone-number': {
//         regex: /^\d{10,15}$/,
//         clean: /[^\d]/g,
//         error: "Please enter a valid phone number (10–15 digits)."
//     },

//     'order-id': {
//         regex: /^[a-zA-Z0-9#$\[\]]+$/,
//         clean: /[^a-zA-Z0-9#$\[\]]/g,
//         error: "Please see on the invoice."
//     },
// };

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     console.log("form submit triggered.");

//     const formData = {};
//     let isValid = true;

//     // Validate required fields
//     requiredFields.forEach((field) => {
//         const valid = checkValue(field);
//         if (!valid) isValid = false;
//     });

//     // Stop submission if any required field is invalid
//     if (!isValid) {
//         console.error("Form has errors. Please, fill required fields.");
//         return;
//     }

//     // Collect all field values
//     allFields.forEach(field => {
//         formData[field.id] = field.value;
//     });

//     console.log("✅ : Form is submitted successfully. ");
//     console.log('formData', formData);

//     resetForm(); // reset form values
// });

// // Reset values of inputs
// const resetForm = () => {
//     allFields.forEach((field => {
//         field.value = '';
//         field.classList.remove('is-valid', 'is-invalid');
//         const errorSpan = document.getElementById(`${field.id}-error`);
//         if (errorSpan) {
//             addCls(errorSpan, 'hide');
//             errorSpan.innerText = '';
//         }
//     }));
// };

// // Validate field and show errors
// const checkValue = (field) => {
//     const value = field.value.trim();
//     const errorSpan = document.getElementById(`${field.id}-error`);

//     if (value.length > 0) {
//         removeCls(field, 'is-invalid');
//         addCls(field, 'is-valid');
//         if (errorSpan) {
//             addCls(errorSpan, 'hide');
//             errorSpan.innerText = '';
//         }
//         return true;
//     } else {
//         addCls(field, 'is-invalid');
//         removeCls(field, 'is-valid');
//         if (errorSpan) {
//             removeCls(errorSpan, 'hide');
//             errorSpan.innerText = 'This field is required';
//         }
//         return false;
//     }
// };

// // Utility functions
// const addCls = (el, cls) => {
//     if (el && !el.classList.contains(cls)) el.classList.add(cls);
// };

// const removeCls = (el, cls) => {
//     if (el && el.classList.contains(cls)) el.classList.remove(cls);
// };

// Form elements
const form = document.getElementById('cancel-subscription-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email-address');
const phoneNumber = document.getElementById('phone-number');
const orderId = document.getElementById('order-id');
const commentsBox = document.getElementById('comments-box');

const allFields = [firstName, lastName, emailAddress, phoneNumber, orderId, commentsBox];
const requiredFields = [firstName, emailAddress, phoneNumber, orderId];

// regex patterns for input
const regexPatterns = {
    'first-name': {
        regex: /^[a-zA-ZÀ-ÿ' -]{2,50}$/,
        clean: /[^a-zA-ZÀ-ÿ' -]/g,
        error: "Please enter a valid first name."
    },

    'last-name': {
        regex: /^[a-zA-ZÀ-ÿ' -]{2,50}$/,
        clean: /[^a-zA-ZÀ-ÿ' -]/g,
        error: "Please enter a valid last name."
    },

    'email-address': {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        clean: /[^a-zA-Z0-9@._%+-]/g,
        error: "Please enter a valid email address."
    },

    'phone-number': {
        regex: /^\d{10,15}$/,
        clean: /[^\d]/g,
        error: "Please enter a valid phone number (10–15 digits)."
    },

    'order-id': {
        regex: /^[a-zA-Z0-9#$\[\]]+$/,
        clean: /[^a-zA-Z0-9#$\[\]]/g,
        error: "Please see on the invoice."
    },
};

// Add input listeners for validation and cleaning
allFields.forEach(field => {
    field.addEventListener('input', () => {
        const regex = regexPatterns[field.id];
        if (regex) {
            const cleanedValue = field.value.replace(regex.clean, '');
            field.value = cleanedValue;
            checkValue(field); // validate on input
        } else {
            checkValue(field); // fallback for fields without regex
        }
    });
});

// Form submit handler
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("form submit triggered.");

    const formData = {};
    let isValid = true;

    // Validate required fields
    requiredFields.forEach((field) => {
        const valid = checkValue(field);
        if (!valid) isValid = false;
    });

    // Stop submission if any required field is invalid
    if (!isValid) {
        console.error("Form has errors. Please, fill required fields.");
        return;
    }

    // Collect all field values
    allFields.forEach(field => {
        formData[field.id] = field.value;
    });

    console.log("✅ : Form is submitted successfully. ");

    // Saved value in localStorage
    window.localStorage.setItem('CancelSubsData', JSON.stringify(formData));
    const cancelDetails = JSON.parse(localStorage.getItem('CancelSubsData'));
    console.log('cancelDetails:', cancelDetails);

    resetForm(); // reset form values
});

// Validate field and show errors
const checkValue = (field) => {
    const value = field.value.trim();
    const errorSpan = document.getElementById(`${field.id}-error`);
    const regex = regexPatterns[field.id];

    // Required field check
    if (requiredFields.includes(field) && value.length === 0) {
        addCls(field, 'is-invalid');
        removeCls(field, 'is-valid');
        if (errorSpan) {
            errorSpan.innerText = 'This field is required';
            removeCls(errorSpan, 'hide');
        }
        return false;
    }

    // Regex check (if configured)
    if (regex && !regex.regex.test(value)) {
        addCls(field, 'is-invalid');
        removeCls(field, 'is-valid');
        if (errorSpan) {
            errorSpan.innerText = regex.error;
            removeCls(errorSpan, 'hide');
        }
        return false;
    }

    // Valid input
    removeCls(field, 'is-invalid');
    addCls(field, 'is-valid');
    if (errorSpan) {
        addCls(errorSpan, 'hide');
        errorSpan.innerText = '';
    }
    return true;
};

// Reset values of inputs
const resetForm = () => {
    allFields.forEach((field => {
        field.value = '';
        field.classList.remove('is-valid', 'is-invalid');
        const errorSpan = document.getElementById(`${field.id}-error`);
        if (errorSpan) {
            addCls(errorSpan, 'hide');
            errorSpan.innerText = '';
        }
    }));
};

// Utility functions
const addCls = (el, cls) => {
    if (el && !el.classList.contains(cls)) el.classList.add(cls);
};

const removeCls = (el, cls) => {
    if (el && el.classList.contains(cls)) el.classList.remove(cls);
};
