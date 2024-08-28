/* General Styles */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #2A2A2A; /* Updated to match the darker font color */
  margin: 0;
  padding: 0;
  background-color: #f9efef;  /* Background color */
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: #f9efef;  /* Ensure the container background matches */
}

/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  margin-bottom: 10px;
}

.logo-text {
  font-size: 28px;
  font-weight: bold;
  color: #2A2A2A;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #2A2A2A;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #b969d4;
  text-decoration: underline;
}

.get-app-button {
  background-color: #000;
  color: #fff;
  padding: 8px 25px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.get-app-button:hover {
  background-color: #333;
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 50px 20px;
  background-color: #f5eded; /* Updated background color */
}

.hero-content {
  max-width: 600px;
  margin-bottom: 20px;
}

.hero-content h1 {
  font-size: 36px;
  font-weight: bold;
  color: #2A2A2A;
  margin-bottom: 15px;
}

.hero-content h1 span.underline {
  position: relative;
  color: #2A2A2A; /* Ensure text is dark */
}

.hero-content h1 span.underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px; /* Adjusts the vertical position of the underline */
  width: 100%;
  height: 2px; /* Adjust thickness of the underline */
  background-color: #2A2A2A; /* Dark underline color */
  border-bottom: 2px solid #2A2A2A; /* Adds the border beneath */
}

.hero-content p {
  font-size: 18px;
  color: #2A2A2A;
  margin-bottom: 20px;
  line-height: 1.6; /* Improved line spacing */
  border-left: 3px solid #2A2A2A; /* Changed the line color to dark */
  padding-left: 10px; /* Spacing between the line and the text */
}

.cta-button {
  background-color: #000;
  color: #fff;
  padding: 12px 35px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px; /* Spacing between button and icons */
}

.cta-button:hover {
  background-color: #333;
}

.hero-image img {
  max-width: 500px;
  height: auto;
  margin-left: 50px; /* Adjust spacing to position image */
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-icons a {
  color: #000;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #b969d4;
}

/* Community Events Section */
.community-events,
.simple-use {
  background-color: #f5eded;  /* Matching background color */
  padding: 50px 20px;
  margin-bottom: 30px;
  border-radius: 12px;
  text-align: center;
}

.community-events h2,
.simple-use h2 {
  font-size: 28px;
  font-weight: bold;
  color: #2A2A2A;
  margin-bottom: 15px;
}

.community-events p,
.simple-use p {
  font-size: 16px;
  color: #6d6d6d;
  margin-bottom: 20px;
}

.section-image {
  max-width: 70%;
  height: auto;
  margin: 15px 0;
  border-radius: 12px;
}

.cta-button-small {
  background-color: #000; /* Black button color */
  color: #fff;
  padding: 10px 25px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button-small:hover {
  background-color: #333;
}

/* Footer */
.footer {
  background-color: #12002B; /* Dark purple background */
  color: #fff;
  padding: 60px 20px;
  text-align: center;
  border-radius: 40px 40px 0 0; /* Rounded top corners */
  margin-top: 40px;
  position: relative;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer h4 {
  font-size: 24px;
  margin-bottom: 20px;
}

.footer p {
  font-size: 16px;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links ul li {
  margin-bottom: 10px;
}

.footer-links a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #b969d4;
}

/* Footer images */
.footer-image {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 200px; /* Adjust size as needed */
}

.footer-image-left {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 200px; /* Adjust size as needed */
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
      flex-direction: column;
      text-align: center;
      padding: 40px 20px;
  }

  .hero-content h1 {
      font-size: 30px;
  }

  .hero-content p {
      font-size: 14px;
  }

  .cta-button {
      font-size: 14px;
      padding: 10px 25px;
  }

  .hero-image img {
      margin-left: 0;
      max-width: 100%;
  }

  .footer-links {
      flex-direction: column;
      gap: 15px;
  }
}