const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>SS Shop &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
