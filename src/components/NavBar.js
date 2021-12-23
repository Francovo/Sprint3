import styles from "../styles/NavBar.module.css";
import { GoLocation } from "react-icons/go";
import { BiSearchAlt2 } from "react-icons/bi";

export const Navbar = () => {
  return (
    <form className={styles.ContainerNavbar1}>
      <div className={styles.containerLogo}>
        <a href="/">
          <img
            className={styles.Logo}
            src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png"
          />
        </a>
      </div>
      <div className={styles.ubicacion}>
        <div>
          <h1 className={styles.hola}>Hola</h1>
          <a href="/" className={styles.eligeUbicacion}>
            <GoLocation /> Elige tu ubicacion
          </a>
        </div>
      </div>
      <div className={styles.buscador}>
        <select className={styles.Select}>
          <option selected disabled>
            Elige una categoria
          </option>
          <option>Computadoras</option>
          <option>Electronicos</option>
          <option>Bebes</option>
          <option>Libros</option>
        </select>

        <div className={styles.divInput}>
          <input
            type="text"
            placeholder="Ingrese una busqueda"
            className={styles.inputBuscar}
          />

          <button type="submit" className={styles.iconoBusqueda}>
            <BiSearchAlt2 size={20} />
          </button>
        </div>


        <div>
            <div>
          <label className={styles.labelCuenta}>Hola, identificate</label>
          <select className={styles.Cuenta} placeholder="Cuenta">
            <option selected disabled >
              Cuenta
            </option>
            <option>Ingresar</option>
            <option>Salir</option>
            
          </select>
          </div>


          {/* <div className={styles.pedidosYproductos}>
              <label className={styles.labelCuenta}>
                Productos
              </label>
              <h1 className={styles.pedidos}>
                Y pedidos
              </h1>
          </div> */}
      </div>


        </div>
      
    </form>
  );
};
