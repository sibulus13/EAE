import "./App.css";
import { GaugeComponent } from "react-gauge-component";
import { CiParking1 } from "react-icons/ci";
import { PiEngineLight } from "react-icons/pi";
import { MdBatteryChargingFull, MdBatteryCharging20 } from "react-icons/md";
import { PiGearSixDuotone } from "react-icons/pi";
import { TbTemperature } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
import { PiPlugChargingDuotone, PiGearFine } from "react-icons/pi";
import { FaTemperatureFull } from "react-icons/fa6";

function App() {
  // TODO connect to the backend
  return (
    <>
      <header>
        <CiParking1 className="icon" />
        <PiEngineLight className="icon" />
        <MdBatteryChargingFull className="icon" />
        <MdBatteryCharging20 className="icon" />
      </header>
      <main>
        <div className="rpm__indicators">
          <div>
            <GaugeComponent
              minValue={-1000}
              maxValue={1000}
              value={0}
              labels={{
                valueLabel: { formatTextValue: (value) => `${value} kW` },
                tickLabels: {
                  type: "outer",
                  ticks: [
                    { value: -1000, label: "-1000" },
                    { value: -750, label: "-500" },
                    { value: -500, label: "-500" },
                    { value: -250, label: "-500" },
                    { value: 0, label: "0" },
                    { value: 250, label: "-500" },
                    { value: 500, label: "500" },
                    { value: 750, label: "-500" },
                    { value: 1000, label: "1000" },
                  ],
                },
              }}
              arc={{
                colorArray: [],
              }}
            />
          </div>
          <div>
            <GaugeComponent
              minValue={0}
              maxValue={800}
              value={0}
              labels={{
                valueLabel: { formatTextValue: (value) => `${value} RPM` },
                tickLabels: {
                  type: "outer",
                  ticks: [
                    { value: 0 },
                    { value: 100 },
                    { value: 200 },
                    { value: 300 },
                    { value: 400 },
                    { value: 500 },
                    { value: 600 },
                    { value: 700 },
                    { value: 800 },
                  ],
                },
              }}
              arc={{
                colorArray: [],
              }}
            />
          </div>{" "}
        </div>
        <div className="middle__indicators">
          <div className="middle__indicator__container">
            <PiGearFine className="icon" />
            N/N
          </div>
          <div className="middle__indicator__container">
            <MdBatteryChargingFull className="icon" />
            <div>22</div>
            <div>%</div>
          </div>
          <div className="middle__indicator__container">
            <FaTemperatureFull className="icon" />
            <div>33</div>
            <div>°C</div>
          </div>
          <div className="middle__indicator__container">
            <MdBatteryChargingFull className="icon" />
            <div>0.0</div>
            <div>RPM</div>
          </div>
          <div className="middle__indicator__container">
            Motor Speed Setting
            <div>
              <input type="range" min="0" max="4" step="1" list="tickmarks" />
              <datalist id="tickmarks">
                <option value="0" label="Off" />
                <option value="1" label="1" />
                <option value="2" label="2" />
                <option value="3" label="3" />
                <option value="4" label="4" />
              </datalist>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="info__buttons">
          <PiGearSixDuotone className="icon" />
          <MdBatteryChargingFull className="icon" />
          <TbTemperature className="icon" />
        </div>
        <div>
          <TiThMenu className="icon" />
        </div>
        <div>
          <PiPlugChargingDuotone className="icon" />
        </div>
      </footer>
    </>
  );
}

export default App;
