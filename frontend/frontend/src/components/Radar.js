import React from 'react'
import {MapComponent} from './Map'
import { ViewData } from './ViewData'
import styles from './styles/app.module.css'
import useTemperatureApi from './hooks/useTemperatureApi'
import '../App.css';


const Radar = () => {
  const [dataWeather, setDataWeather] = useTemperatureApi()

  const handleClickNewPosition = (latlng) => {
    if (!dataWeather.isLoadingApi) setDataWeather({ ...dataWeather, latlng })
  }
  
  return (
    <div className={styles.wrapperGlobal}>
      <div className={styles.wrapperMap}>
        <MapComponent onClickPosition={handleClickNewPosition}/>
      </div>
      <div className={styles.wrapperViewData}>
        <ViewData
          dataWeather={dataWeather?.data}
          isLoadingApi={dataWeather?.isLoadingApi}
          errorApi={dataWeather?.errorApi}
        />
        <div className={styles.wrapperInfo}>
          <br />
          <div className={styles.credits}>
            <span>
              We use 
              <a title="https://openweathermap.org/" target="_blank" rel="noopener noreferrer" href="https://openweathermap.org/" className={styles.link}>OpenWeather (TM)</a>
              as a provider of weather data
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Radar
