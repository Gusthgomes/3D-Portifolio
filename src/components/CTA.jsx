import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Tem um projeto em mente? <br className='sm:block hidden' />
        Vamos contruir juntos!
      </p>
      <Link to='/contact' className='btn'>
        Entre em contato
      </Link>
    </section>
  );
};

export default CTA;