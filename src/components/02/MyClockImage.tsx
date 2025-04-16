import clock from "../../assets/clock.png"

function MyClockImage () {
    return (
 <img src={clock} alt="clock" className=" flex justify-center items-center w-100 h-100 animate-pulse"  />
    )
}
export default MyClockImage;