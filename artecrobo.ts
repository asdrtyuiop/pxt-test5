/**
 * Types of DC motor control
 */
enum LEDSensorSmotion {
	//% block="On"
	On,
	//% block="Off"
	Off
}

enum connectorLEDSensor {
	//% block="P0"
	P0,
	//% block="P1"
	P1,
	//% block="P2"
	P2
}


/**
 * ArtecRobo control package
 */
//% color=#5b99a5 weight=100 icon="\uf009" block="ArtecRobo"
namespace artecrobo {

	/* spped initial value */
	
	

	// Move DC motor
	//% blockId=artec_move_dc_motor
	//% block="LED %_connector| : %_motion"
	export function LEDSensor(_connector: connectorLEDSensor, _motion: LEDSensormotion): void {
		switch(_motion) {
			case LEDSensormotion.On:
				
				pins.digitalWritePin(DigitalPin._connector, 1);

				
				break;
			case LEDSensormotion.Off:
				
				pins.digitalWritePin(DigitalPin._connector, 0);
				break;
		}

	}
	

}
