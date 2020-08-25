const extractDateFromGameInfo = (info) => {

	let date = info.substring(info.indexOf(" ") + 1);
    return date
}

export default extractDateFromGameInfo