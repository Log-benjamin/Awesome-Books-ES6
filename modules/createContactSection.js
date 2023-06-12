const contact = document.querySelector('.contact-section');

const createContactSection = () => {
  const contactInfo = document.createElement('div');
  contactInfo.innerHTML = `
        <h2>Contact Information</h2>
        <p>Do you have any question or do you want to say "Hello"?</p>
        <p>You can reach out to us!</p>
        <ul>
            <li>Email: <a>binyampowerhc@gmail.com</a></a></li>
            <li>Phone No: +251 9 13 80 58 37</li>
            <li>Address : CH-13/14, Kirkos Subcity-Addis Ababa Ethiopia</li>
        </ul>
    `;
  contact.appendChild(contactInfo);
};

export default createContactSection;