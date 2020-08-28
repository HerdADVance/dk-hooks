const extractDateFromGameInfo = (info) => {

	// Remove everything before date
	let date = info.substring(info.indexOf(" ") + 1);
    
	// Remove AM/PM ET
	date = date.slice(0, -5)

	// Convert to actual Date
	date = new Date(date)

    return date
}

export default extractDateFromGameInfo