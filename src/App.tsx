import { useState } from "react";
import styles from "./App.module.css";
import leftArrowImage from "./assets/leftarrow.png";
import poweredImage from "./assets/powered.png";
import { Level, calcImc, levels } from "./helpers/imc";
import { GridItem } from "./components/GridItem";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calcImc(heightField, weightField));
    } else {
      alert("Digite ambos os campos!");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} width={150} alt="" />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            name="height"
            id="height"
            value={heightField > 0 ? heightField : ""}
            onChange={(event) => setHeightField(parseFloat(event.target.value))}
            placeholder="Digite a sua altura. Ex.: 1.5 (em metros)"
            disabled={toShow ? true : false}
          />

          <input
            type="number"
            name="weight"
            id="weight"
            value={weightField > 0 ? weightField : ""}
            onChange={(event) => setWeightField(parseFloat(event.target.value))}
            placeholder="Digite o seu peso. Ex.: 75 (em kg)"
            disabled={toShow ? true : false}
          />

          <button
            type="submit"
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
            Calcular
          </button>
        </div>

        <div className={styles.right}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}

          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}>
                <img
                  src={leftArrowImage}
                  width={25}
                  alt=""
                  onClick={handleBackButton}
                />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
