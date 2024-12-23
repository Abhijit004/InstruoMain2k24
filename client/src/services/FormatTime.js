function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    // Extract parts of the date
    const day = date.getUTCDate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    // Get day suffix
    const getDayWithSuffix = (day) => {
        if (day === 1 || day === 21 || day === 31) return `${day}st`;
        if (day === 2 || day === 22) return `${day}nd`;
        if (day === 3 || day === 23) return `${day}rd`;
        return `${day}th`;
    };

    // Extract and format time
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format

    // Return formatted string
    return `${getDayWithSuffix(day)} ${month} ${year}, ${hours}:${minutes}${period}`;
}

export default formatTimestamp
