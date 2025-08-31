import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import navLogo from "../assets/Images/navbar-logo.svg";

import cartIcon from "../assets/Images/cart-icon.png";

import { useEffect, useRef, useState } from "react";


const NavigationBar = () => {
  const { scrollY } = useScroll();

  const [open, setOpen] = useState(false);

  const [sticky, setSticky] = useState(false);

  const handleShowCanvas = () => {
    setOpen(true);
  };

  const handleHideCanvas = () => {
    setOpen(false);
  };

  useMotionValueEvent(scrollY, "change", (lastest) => {

    if(lastest >= 74){

        setSticky(true);
    }

    else{

        setSticky(false);
    }

  });

  return (
    <>
      <motion.nav
        className="nav-wrapper"
        style={{
          position: sticky ? "fixed" : "absolute",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 col-md-3 col-lg-7 d-flex align-items-center">
              <div className="row">
                <div className="col-md-8 col-lg-3 d-flex align-items-center">
                  <a href="#" className="navBar-brand">
                    <img src={navLogo} alt="logo image" />
                  </a>
                </div>
                <div className="col-md-4 col-lg-9 d-none d-lg-flex">
                  <ul className="navBar">
                    <li className="navBar-item">
                      <a className="navBar-link" href="#">
                        home
                      </a>
                    </li>
                    <li className="navBar-item">
                      <a className="navBar-link" href="#">
                        about
                      </a>
                    </li>
                    <li className="navBar-item">
                      <a className="navBar-link" href="#">
                        projects
                      </a>
                    </li>
                    <li className="navBar-item">
                      <a className="navBar-link" href="#">
                        contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9 col-md-9 col-lg-5 d-flex justify-content-end align-items-center">
              <div className="cart-box">
                <img src={cartIcon} alt="cart icon" />
                <span className="badge text-bg-secondary cart-quantity">0</span>
              </div>
              <button className="app-btn login-btn">Log in</button>
              <button className="app-btn start-free-btn">Start for free</button>
              <button className="navbar-toggler" id="navbar-toggler">
                <FontAwesomeIcon
                  onClick={handleShowCanvas}
                  icon={faBars}
                  className="navbar-toggler-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      <div className="hero-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          possimus distinctio explicabo harum rerum voluptate ipsa, obcaecati
          omnis non dolorem odit numquam ex, perferendis quibusdam consequuntur
          recusandae illum dolor, fugiat labore laboriosam quasi saepe quisquam?
          Ullam facere tenetur rerum perspiciatis enim ea impedit. Incidunt
          similique deserunt nulla excepturi. Corrupti, placeat optio alias in
          quasi inventore recusandae voluptatem laudantium quia provident ad
          deleniti earum esse consequatur fugit eveniet impedit repudiandae
          reiciendis doloribus iure maiores consequuntur at dolorem beatae? Qui
          consequatur ipsum voluptatum sed dolorum earum, doloribus quis
          perspiciatis laboriosam nulla itaque sapiente! Repudiandae consequatur
          beatae itaque illum, dolores quo delectus unde iure eveniet ullam rem
          culpa in blanditiis architecto libero maiores praesentium et suscipit
          sapiente perferendis expedita! Voluptatibus perspiciatis ad error
          distinctio assumenda. Eveniet eligendi dicta mollitia illum cum soluta
          omnis molestiae exercitationem, ipsam illo ratione ipsum rem impedit,
          laboriosam fuga odio accusantium amet modi a nostrum enim ducimus,
          voluptatibus voluptatum. Obcaecati nisi nostrum laborum recusandae, ea
          ipsam quis soluta quasi magni officia, delectus cum. Labore, quidem!
          Fugit cupiditate culpa excepturi ipsam sapiente, veritatis ab quis
          enim ex neque nobis voluptatem reprehenderit non voluptates dolorem,
          beatae voluptate qui sunt eum odit expedita consectetur commodi
          debitis modi? Aliquid, fugit tempora commodi soluta quos facere id
          consequuntur iste possimus laborum ipsum aperiam reprehenderit, saepe
          odio itaque. Vitae fugit quaerat rem obcaecati soluta, accusantium
          ullam quasi eligendi, id, itaque quos rerum officia explicabo
          asperiores harum assumenda dolorem omnis exercitationem maiores libero
          quia aut delectus consequuntur voluptas. Non cum tempora nesciunt
          omnis culpa qui laborum nulla sit quam numquam magni eum laboriosam
          nostrum, repellendus laudantium sequi. Itaque nam voluptas vitae
          consequatur sed, omnis iusto tempora recusandae deserunt, repudiandae
          eum doloremque possimus maiores ullam explicabo magnam rerum atque
          cumque porro quam cupiditate? Autem adipisci incidunt possimus
          blanditiis, eligendi odio vel aperiam! Illo, cupiditate. Rerum itaque
          quasi laudantium distinctio dolorum. Officiis, doloremque? Officia
          earum nam voluptas veniam. Porro ea sequi dolor dignissimos quaerat
          eum possimus perspiciatis hic consectetur, vero ex, quidem aspernatur
          necessitatibus animi, adipisci quas quasi quod dolorum! Quod officia
          ipsum saepe ducimus cumque qui placeat libero incidunt inventore? Illo
          tempore ducimus eos praesentium vel asperiores maxime facere cumque
          tempora iste eveniet omnis temporibus expedita, mollitia aperiam,
          minus sequi doloremque aliquid eligendi quasi dolorem, modi provident?
          Nobis sint nihil eum sequi repudiandae quaerat earum rerum id possimus
          quis asperiores, officia sed corrupti, maiores officiis magni fugiat
          laudantium saepe ipsum qui autem, reprehenderit exercitationem labore
          sunt. Enim voluptatibus nobis officia quo repellendus. Nobis, deserunt
          tempore assumenda praesentium asperiores repellendus commodi odio
          molestias pariatur nam possimus voluptas maiores odit modi fugiat
          doloremque veritatis officia et similique dolor. Sit nam deserunt,
          voluptatum hic cupiditate vero nemo voluptas amet! Sunt, officiis
          cumque obcaecati sed assumenda autem, voluptatum quisquam qui commodi
          provident non totam dolorem nihil ipsum nobis odit repellat tenetur
          maiores! Earum beatae quaerat esse, molestias officiis illo odio
          ducimus aliquam error consectetur. Ipsa aperiam fugit enim. Obcaecati
          repellat error, nihil harum fugiat alias ratione, quasi nam dolores
          quisquam neque unde eum. Quidem excepturi quae blanditiis! Cupiditate
          error nemo officiis quia facere voluptatibus laboriosam
          necessitatibus? Ea expedita doloremque in enim modi reprehenderit
          maxime debitis recusandae ut rem doloribus sint, ipsa illum? Tempora
          illum repudiandae doloremque, atque earum quod et corporis vel
          molestias illo alias nostrum pariatur sint, reprehenderit eveniet quis
          adipisci perspiciatis ex! Ex, harum iure enim totam expedita dolore
          tenetur libero minima, eius dicta at veniam porro, placeat commodi
          pariatur id doloribus illo aliquam unde fugit debitis voluptatem quis
          vitae! Esse enim quae voluptatem dolores rerum mollitia id aut
          doloremque illum quidem repudiandae blanditiis repellendus tempore
          fuga officiis amet, cumque ducimus temporibus eos adipisci? Quo
          veritatis sapiente officia ea et nulla, amet alias quae, voluptates
          repellat sed laborum voluptatem placeat id cumque minima nihil
          voluptatum, quibusdam error! Corrupti at ipsa quam numquam, adipisci
          odio laudantium ad. Sapiente necessitatibus porro error eaque,
          molestias enim tenetur quo repellendus exercitationem explicabo
          incidunt distinctio amet maxime, cupiditate optio aut fugit in
          reprehenderit perspiciatis. Nulla, quasi eveniet id recusandae ex,
          animi libero quibusdam nisi saepe odit earum numquam esse
          exercitationem ab similique? Porro debitis incidunt laborum explicabo
          perspiciatis minima dignissimos, exercitationem impedit doloremque
          recusandae magni ipsum sequi rerum numquam pariatur commodi ab veniam
          quisquam est non. Mollitia, dolore maxime tempore repellendus magni,
          accusamus reiciendis officiis blanditiis officia dicta ipsum est ut
          esse dolorem! Quas, voluptatum illum recusandae ut quos quaerat quis
          optio sapiente aliquid vitae necessitatibus quisquam soluta nam
          accusantium nemo est? Repellat dolores accusamus nesciunt consequatur
          sapiente perspiciatis neque quod reiciendis dolorum iure excepturi
          fugit temporibus, nisi doloremque officia voluptatum assumenda ipsum
          deleniti a repellendus magni rem quae est velit. Incidunt minus
          accusamus provident exercitationem magnam autem rem omnis ipsum magni,
          nulla iure ratione quo, distinctio non dicta vitae architecto
          corrupti, quod iusto harum quia. Dolorem nihil nam voluptatem
          exercitationem nisi perferendis enim. Deleniti sapiente molestias,
          consectetur delectus ad enim excepturi ab aspernatur fuga, nulla
          voluptatem ipsam ut maxime corporis asperiores distinctio quas ex et
          laudantium commodi? Sed soluta fuga animi illum odit! Accusantium
          delectus nobis omnis ex deleniti repudiandae possimus consequatur quis
          hic at commodi perferendis temporibus ut architecto, quam natus
          aliquam, minus officiis molestiae? Asperiores sequi animi consequatur
          porro dolore aspernatur. Temporibus magnam at obcaecati ab eum nihil
          nam enim expedita dolores. Assumenda amet impedit distinctio
          temporibus, quod nemo nam deserunt doloremque, nostrum hic et totam
          fuga ab pariatur error mollitia vero placeat? Aliquam sunt consectetur
          voluptatibus maiores, ullam modi, numquam iure sit delectus, tempora
          sed recusandae pariatur eveniet error aperiam optio placeat hic culpa
          repellendus minima voluptas et amet eos officiis! Dicta quia provident
          tempore dolorem sed eum ipsam dignissimos maiores voluptatibus cum
          assumenda nulla error quod ipsum mollitia ad, alias sunt? Molestiae,
          aspernatur ipsam quidem architecto ex aperiam porro iure enim ut rerum
          eum, quae similique facere perspiciatis sint inventore atque labore
          libero incidunt rem, explicabo magnam blanditiis earum placeat! Quia
          molestias placeat corporis doloremque natus repudiandae laboriosam
          nobis expedita obcaecati, necessitatibus consequuntur, nemo optio qui,
          cumque sapiente iste. Tempora error ea consectetur, odio itaque libero
          asperiores dignissimos et! Velit officia fugiat impedit saepe, porro
          accusantium non magni debitis.
        </p>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={handleHideCanvas}
            className="offcanvas-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1  }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="mobile-offcanvas"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.5,

                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="canvas-header">
                <img src={navLogo} alt="logo image" />
                <FontAwesomeIcon onClick={handleHideCanvas} icon={faXmark} />
              </div>
              <div className="canvas-body">
                <ul className="canvas-menu">
                  <li>
                    <a href="#home">home</a>
                  </li>
                  <li>
                    <a href="#about">about</a>
                  </li>
                  <li>
                    <a href="#projects">projects</a>
                  </li>
                  <li>
                    <a href="#contact">contact</a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
