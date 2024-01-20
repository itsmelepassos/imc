import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img src={item.icon === "up" ? upImage : downImage} alt="" />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.yourImc && (
        <div className={styles.yourImc}>
          Seu IMC é de {item.yourImc} kg/m<sup>2</sup>
        </div>
      )}

      <div className={styles.gridInfo}>
        <>
          IMC nesta categoria está entre{" "}
          <strong>
            {item.imc[0]} e {item.imc[1]} kg/m<sup>2</sup>
          </strong>
        </>
      </div>
    </div>
  );
};
