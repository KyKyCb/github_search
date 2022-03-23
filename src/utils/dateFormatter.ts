const dateFormatter = (createdDate: Date): string => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const year = createdDate.getFullYear()
    const month = monthNames[createdDate.getMonth()].slice(0, 3)
    const day = createdDate.getDate() < 10 ? '0' + createdDate.getDate() : createdDate.getDate()
    const hours = createdDate.getHours() < 10 ? '0' + createdDate.getHours() : createdDate.getHours()
    const minutes = createdDate.getMinutes() < 10 ? '0' + createdDate.getMinutes() : createdDate.getMinutes()

    return `${hours}:${minutes}, ${day} ${month}, ${year}`
};

export default dateFormatter;
